import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { baseUrl } from "../axios";

const initialState = {
    singleRent: {},
    allRents: {},
    isLoading: false,
}

export const addRent = createAsyncThunk(
    "rent/addRent",
    
    async (rent, thunkAPI) => {
      try {
        const resp = await baseUrl.post("rent/", rent, thunkAPI);
  
        return resp.data;
      } catch (error) {
        
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

const rentSlice = createSlice({
    name: "rent",
    initialState,
    extraReducers: {
    [addRent.fulfilled]: (state, { payload }) => {
        state.isLoading = false;
        state.rent = [...state.rent, payload];
        
        toast.success("Space added");
      },
      [addRent.rejected]: (state,{payload}) => {
        state.isLoading = false;
        console.log(payload);
        toast.error(payload.response.data.detail[1].msg) ;
      },
    }
})

export default rentSlice.reducer;