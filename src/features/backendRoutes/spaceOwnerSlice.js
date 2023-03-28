import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { baseUrl } from "../axios";

const initialState = {
  ownerSpaces: [],
  isLoading: false,
  ownerBookings: [],
};

export const getOwnerSpaces = createAsyncThunk(
  "space/ownerSpaces",
  async (phoneNumber, thunkAPI) => {
    try {
      const resp = await baseUrl.get("space/owner/", {
        params: { phone_number: phoneNumber },
      });
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getOwnerBookings = createAsyncThunk(
  "booking/ownerBookings",
  async (phoneNumber, thunkAPI) => {
    try {
      const resp = await baseUrl.get("booking/owner", {
        params: { phone_number: phoneNumber },
      });
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const spaceOwnerSlice = createSlice({
  name: "space",
  initialState,
  extraReducers: {
    [getOwnerSpaces.pending]: (state) => {
      state.isLoading = true;
    },
    [getOwnerSpaces.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.ownerSpaces = payload;
    },
    [getOwnerSpaces.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },

    [getOwnerBookings.pending]: (state) => {
      state.isLoading = true;
    },
    [getOwnerBookings.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.ownerBookings = payload;
    },
    [getOwnerBookings.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

export default spaceOwnerSlice.reducer;
