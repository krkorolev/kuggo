import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ItemState } from "./favoritesSlice";

interface cartSliceState {
  purchase: ItemState[];
}

const initialState: cartSliceState = {
  purchase: [],
};

export const buySlice = createSlice({
  name: "buy",
  initialState,
  reducers: {
    addItemBuy(state, action: PayloadAction<ItemState[]>) {
    state.purchase = action.payload
    },
  },
});

export const {addItemBuy} = buySlice.actions;

export default buySlice.reducer;
