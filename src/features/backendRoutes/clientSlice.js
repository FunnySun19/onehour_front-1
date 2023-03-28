import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { baseUrl } from "../axios";


const initialState = {
    currentClient: {},
    isLoading: false,
  };


  export const createClient = createAsyncThunk(
    "client/createClient",
  
    async (client, thunkAPI) => {
      try {
        const resp = await baseUrl.post("client/", client, thunkAPI);
        console.log(resp);
        return resp.data;
        
      
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  const clientSlice = createSlice({
    name:"client",
    initialState,
    extraReducers:{
      [createClient.fulfilled]: (state, { payload }) => {
        state.isLoading = false;
        state.currentClient = payload;
        toast.success("Successfully created account");
      },
      [createClient.pending]: (state) => {
        state.isLoading = true;
      },
      [createClient.rejected]: (state, { payload }) => {
        state.isLoading = true;
        toast.error(payload.response.data.detail);
      },
  }});
  
  export default clientSlice.reducer;