import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { baseUrl } from "../axios";

const initialState = {
  singleBooking: {},
  allBookings: [],
  isLoading: false,
};

export const addBooking = createAsyncThunk(
  "booking/addBooking",

  async (booking, thunkAPI) => {
    try {
      const resp = await baseUrl.post("booking/", booking, thunkAPI);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  extraReducers: {
    [addBooking.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.allBookings = [...state.allBookings, payload];
    },
    [addBooking.pending]: (state) => {
      state.isLoading = true;
    },
    [addBooking.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload.response.data.detail[1].msg);
      toast.error(payload.response.data.detail);
    },
  },
});

export default bookingSlice.reducer;
