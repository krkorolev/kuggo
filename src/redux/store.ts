import { configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cartSlice";
import favorites from "./slices/favoritesSlice";
import items from "./slices/itemsSlice";
import buy from "./slices/buySlice";

import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    cart,
    favorites,
    items,
    buy,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
