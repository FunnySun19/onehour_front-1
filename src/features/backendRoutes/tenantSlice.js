import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { baseUrl } from "../axios";

const initialState = {
  tenantBooking: [],
  isLoading: false,
};

export const getTenantBooking = createAsyncThunk(
  "space/tenantBooking",
  async (phoneNumber, thunkAPI) => {
    // if it has errors add slash / after tenant
    try {
      const resp = await baseUrl.get("booking/tenant", {
        params: { phone_number: phoneNumber },
      });
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const tenantSlice = createSlice({
  name: "tenant",
  initialState,
  extraReducers: {
    [getTenantBooking.pending]: (state) => {
      state.isLoading = true;
    },
    [getTenantBooking.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.tenantBooking = payload;
    },
    [getTenantBooking.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

export default tenantSlice.reducer;
