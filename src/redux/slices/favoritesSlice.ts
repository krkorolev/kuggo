import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ItemState {
  parentId: string;
  tittle: string;
  power: number;
  time: string;
  volume: number;
  speed: number;
  priceNew: number;
  priceOld: string;
  img: string;
  rating: number;
}
type FavoritesItem = {
  itemsFavorites: ItemState[];
};

const initialState: FavoritesItem = {
  itemsFavorites: [],
};

export const favoritesCart = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addItemFavorites(state, action: PayloadAction<ItemState>) {
      const findItem = state.itemsFavorites.find(
        (obj) => obj.parentId === action.payload.parentId
      );
      if (findItem) {
        state.itemsFavorites = state.itemsFavorites.filter(
          (obj) => obj.parentId !== action.payload.parentId
        );
      } else {
        state.itemsFavorites.push({ ...action.payload });
      }
    },
  },
});

export const { addItemFavorites } = favoritesCart.actions;

export default favoritesCart.reducer;
