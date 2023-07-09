import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ItemState } from "./favoritesSlice";

interface cartSliceState {
  items: ItemState[];
  totalPrice: number;
}

const initialState: cartSliceState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemScooter(state, action: PayloadAction<ItemState>) {
      const findItem = state.items.find(
        (obj) => obj.parentId === action.payload.parentId
      );
      if (findItem) {
        state.items = state.items.filter(
          (obj) => obj.parentId !== action.payload.parentId
        );
      } else {
        state.items.push({ ...action.payload });
      }
      state.totalPrice = state.items.reduce(
        (acc, obj) => acc + obj.priceNew,
        0
      );
    },
    removeItemScooter(state, action: PayloadAction<string>) {
      state.items = state.items.filter(
        (obj) => obj.parentId !== action.payload
      );
      state.totalPrice = state.items.reduce(
        (acc, obj) => acc + obj.priceNew,
        0
      );
    },
    removeCart(state) {
      state.items = []
    }
  },
});

export const { addItemScooter, removeItemScooter, removeCart } = cartSlice.actions;

export default cartSlice.reducer;
