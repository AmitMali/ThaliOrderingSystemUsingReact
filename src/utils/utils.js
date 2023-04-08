import { useSelector } from "react-redux";

export const cartItems = useSelector((state) => state.foodItem.foodItems);
export const totalCartPrice = cartItems.reduce((accumulator, current) => {
  return Number(accumulator) + Number(current.price) * Number(current.quantity);
}, 0);
export const mandetoryItems = cartItems.reduce((accumulator, current) => {
  {
    console.log(accumulator, current.mandatoryItem);
    return current.mandatoryItem ? accumulator + 1 : accumulator + 0;
  }
}, 0);
export const foodItemsCount = useSelector(
  (state) => state.foodItem.foodItemsCount
);
