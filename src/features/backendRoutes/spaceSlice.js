import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { baseUrl } from "../axios";

const initialState = {
  singleSpace: null,
  allSpaces: {},
  isLoading: false,
  spaces: [],
};

export const getSpaces = createAsyncThunk(
  "spaces/getSpaces",
  async (params, thunkAPI) => {
    try {
      const resp = await baseUrl.get("space/", { params });
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addSpace = createAsyncThunk(
  "space/addSpace",
  async (space, thunkAPI) => {
    try {
      const resp = await baseUrl.post("space/", space, thunkAPI);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteSpace = createAsyncThunk(
  "space/deleteSpace",
  async (id, thunkAPI) => {
    try {
      await baseUrl.delete("space/" + id, thunkAPI);

      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSpacesById = createAsyncThunk(
  "space/getSpace",
  async (id, thunkAPI) => {
    try {
      const resp = await baseUrl.get("space/", { params: { id } });
      console.log(id);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const spaceSlice = createSlice({
  name: "space",
  initialState,
  extraReducers: {
    [getSpaces.pending]: (state) => {
      state.isLoading = true;
    },
    [getSpaces.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.spaces = payload.data;
    },
    [getSpaces.rejected]: (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
    },
    [getSpaces.pending]: (state) => {
      state.isLoading = true;
    },
    [addSpace.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.spaces = [...state.spaces, payload];

      toast.success("Space added");
    },
    [addSpace.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload.response.data.detail);
    },
    [deleteSpace.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteSpace.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      toast.success("Space deleted");
      state.space = state.space.filter((item) => item.id !== payload);
    },
    [deleteSpace.rejected]: (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
    },
    [getSpacesById.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.isLoading = false;
      state.singleSpace = payload[0];
    },
    [getSpacesById.rejected]: (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
    },
    [getSpacesById.pending]: (state) => {
      state.isLoading = true;
    },
  },
});

export default spaceSlice.reducer;
