import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foodItems: [],
  foodItemsCount: 0,
};
const foodItemSlice = createSlice({
  name: "FoodItem",
  initialState,
  reducers: {
    addFoodItem: (state, actions) => {
      const newItem = actions.payload;
      const exitsItem = state.foodItems.find((item) => item.id === newItem.id);
      if (exitsItem && exitsItem.portion === newItem.portion) {
        exitsItem.quantity++;
        exitsItem.totalPrice =
          Number(exitsItem.totalPrice) + Number(newItem.price);
      } else {
        state.foodItems.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
        state.foodItemsCount += 1;
      }
    },
  },
});

export const { addFoodItem } = foodItemSlice.actions;
export default foodItemSlice.reducer;
