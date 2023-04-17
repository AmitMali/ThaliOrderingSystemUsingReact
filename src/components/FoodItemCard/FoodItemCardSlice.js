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
        // var i = 0;
        // while (i < state.foodItems.length) {
        //   //removing items if item id and portion matches with cart items id and portion
        //   if (
        //     state.foodItems[i].id === itemToRemove.id &&
        //     state.foodItems[i].portion == itemToRemove.portion
        //   ) {
        //     state.foodItems.splice(i, 1);
        //   } else {
        //     ++i;
        //   }
        // }
        //
        state.foodItems = state.foodItems.filter(
          (item) =>
            item.id !== itemToRemove.id && item.portion !== itemToRemove.portion
        );
        state.foodItemsCount -= 1;
        //
      }
    },
  },
});

export const { addFoodItem, removeFoodItem } = foodItemSlice.actions;
export default foodItemSlice.reducer;
