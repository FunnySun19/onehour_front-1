import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { baseUrl } from "../axios";
import Cookies from "universal-cookie";

const initialState = {
  currentClient: {},
  isLoading: false,
};
const cookies = new Cookies();

export const createClient = createAsyncThunk(
  "client/createClient",
  async (client, thunkAPI) => {
    try {
      const resp = await baseUrl.post("client/sign-up/", client, thunkAPI);
      cookies.set("token", resp.data.token, { path: "/" });
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginClient = createAsyncThunk(
  "client/loginClient",
  async (client, thunkAPI) => {
    try {
      const resp = await baseUrl.post("client/sign-in/", client, thunkAPI);
      cookies.set("token", resp.data.token, { path: "/" });
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const clientSlice = createSlice({
  name: "client",
  initialState,
  extraReducers: {
    [createClient.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.currentClient = payload;
      toast.success("Successfully created account!");
    },
    [createClient.pending]: (state) => {
      state.isLoading = true;
    },
    [createClient.rejected]: (state, { payload }) => {
      state.isLoading = true;
      toast.error(payload.response.data.detail);
    },
    [loginClient.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.currentClient = payload;
      toast.success("Successfully logged in!");
    },
    [loginClient.pending]: (state) => {
      state.isLoading = true;
    },
    [loginClient.rejected]: (state, { payload }) => {
      state.isLoading = true;
      toast.error(payload.response.data.detail);
    },
  },
});

export default clientSlice.reducer;
