import { configureStore } from "@reduxjs/toolkit";
import foodItemReducer from "../components/FoodItemCard/FoodItemCardSlice";
export const store = configureStore({
  reducer: {
    foodItem: foodItemReducer,
  },
});
