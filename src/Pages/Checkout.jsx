import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Checkout = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.foodItem.foodItems);
  const totalCartPrice = cartItems.reduce((accumulator, current) => {
    return (
      Number(accumulator) + Number(current.price) * Number(current.quantity)
    );
  }, 0);
  const mandetoryItems = cartItems.reduce((accumulator, current) => {
    {
      return current.mandatoryItem ? accumulator + 1 : accumulator + 0;
    }
  }, 0);
  const mandetoryItemsQuantity = cartItems.reduce((accumulator, current) => {
    {
      return current.mandatoryItem
        ? (accumulator += current.quantity)
        : accumulator + 0;
    }
  }, 0);

  mandetoryItems > 2 || mandetoryItemsQuantity > 2 ? navigate("/") : "";
};

export default Checkout;
