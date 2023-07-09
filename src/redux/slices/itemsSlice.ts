import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ItemState } from "./favoritesSlice";

interface itemsSliceState {
  items: ItemState[];
  status: "loading" | "success" | "error";
}

const initialState: itemsSliceState = {
  items: [],
  status: "loading",
};

export const fetchItems = createAsyncThunk(
  "items/fetchItems",
  async (params) => {
    const { data } = await axios.get(
      "https://648dde6b2de8d0ea11e85073.mockapi.io/product"
    );
    return data as ItemState[];
  }
);

export const itemsSlice = createSlice({
  name: "fetchItems",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.status = "success";
      state.items = action.payload;
    });
    builder.addCase(fetchItems.rejected, (state) => {
      state.status = "error";
      state.items = [];
    });
  },
});

export default itemsSlice.reducer;
