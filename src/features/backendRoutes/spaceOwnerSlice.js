import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { baseUrl } from "../axios";

const initialState = {
  ownerSpaces: [],
  isLoading: false,
  ownerRents: [],
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

export const getOwnerRents = createAsyncThunk(
  "rent/ownerRents",
  async (phoneNumber, thunkAPI) => {
    try {
      const resp = await baseUrl.get("rent/owner", {
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

    [getOwnerRents.pending]: (state) => {
      state.isLoading = true;
    },
    [getOwnerRents.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.ownerRents = payload;
    },
    [getOwnerRents.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

export default spaceOwnerSlice.reducer;
