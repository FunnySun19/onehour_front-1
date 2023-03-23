import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { baseUrl } from "../axios";

const initialState = {
  tenantRent: [],
  isLoading: false,
};

export const getTenantRent = createAsyncThunk(
  "space/tenantRent",
  async (phoneNumber, thunkAPI) => {
    // if it has errors add slash / after tenant
    try {
      const resp = await baseUrl.get("rent/tenant", {
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
    [getTenantRent.pending]: (state) => {
      state.isLoading = true;
    },
    [getTenantRent.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.tenantRent = payload;
    },
    [getTenantRent.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

export default tenantSlice.reducer;
