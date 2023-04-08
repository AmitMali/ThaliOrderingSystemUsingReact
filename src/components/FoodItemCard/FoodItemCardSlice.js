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
      const itemToAdd = actions.payload;
      const exitsItem = state.foodItems.find(
        (item) => item.id === itemToAdd.id && item.portion === itemToAdd.portion
      );
      if (exitsItem && exitsItem.portion === itemToAdd.portion) {
        exitsItem.quantity++;
        exitsItem.totalPrice =
          Number(exitsItem.totalPrice) + Number(itemToAdd.price);
      } else {
        state.foodItems.push({
          ...itemToAdd,
          quantity: 1,
          totalPrice: itemToAdd.price,
        });
        state.foodItemsCount += 1;
      }
    },
    removeFoodItem: (state, actions) => {
      const itemToRemove = actions.payload;
      const exitsItem = state.foodItems.find(
        (item) =>
          item.id === itemToRemove.id && item.portion === itemToRemove.portion
      );
      if (exitsItem && exitsItem.quantity > 1) {
        exitsItem.quantity--;
        exitsItem.totalPrice =
          Number(exitsItem.totalPrice) - Number(itemToRemove.price);
      } else {
        state.foodItems = state.foodItems.filter(
          (item) => item.id != itemToRemove.id
        );
        state.foodItemsCount -= 1;
      }
    },
  },
});

export const { addFoodItem, removeFoodItem } = foodItemSlice.actions;
export default foodItemSlice.reducer;
