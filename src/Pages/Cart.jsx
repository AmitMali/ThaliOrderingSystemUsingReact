import React from "react";
import { useSelector } from "react-redux";
const Cart = () => {
  const foodItems = useSelector((state) => state.foodItem.foodItems);
  const foodItemsCount = useSelector((state) => state.foodItem.foodItemsCount);

  console.log(foodItems);
  const totalCartPrice = foodItems.reduce((accumulator, current) => {
    return (
      Number(accumulator) + Number(current.price) * Number(current.quantity)
    );
  }, 0);
  return (
    <div>
      <div className="py-4">{foodItemsCount} items in cart</div>
      <div className="flex flex-col">
        <table
          className="w-full text-left  rounded sm:border-separate"
          cellSpacing="0"
        >
          <tr>
            <th
              scope="col"
              className="h-12 px-6 text-sm font-medium  text-slate-700 bg-slate-100"
            >
              Item Name
            </th>
            <th
              scope="col"
              className="h-12 px-6 text-sm font-medium  text-slate-700 bg-slate-100"
            >
              Price
            </th>
            <th
              scope="col"
              className="h-12 px-6 text-sm font-medium  text-slate-700 bg-slate-100"
            >
              Quantity
            </th>
            <th
              scope="col"
              className="h-12 px-6 text-sm font-medium  text-slate-700 bg-slate-100"
            >
              Portion
            </th>
          </tr>
          {foodItems &&
            foodItems.map((foodItem, i) => {
              const { name, id, price, totalPrice, quantity, portion } =
                foodItem;

              return (
                <tr key={i}>
                  <td className="capitalize h-12 px-6 text-sm transition duration-300  text-slate-500 ">
                    {name}
                  </td>
                  <td className="capitalize h-12 px-6 text-sm transition duration-300  text-slate-500 ">
                    {price}
                  </td>
                  <td className="capitalize h-12 px-6 text-sm transition duration-300  text-slate-500 ">
                    {quantity}
                  </td>
                  <td className="capitalize h-12 px-6 text-sm transition duration-300  text-slate-500 ">
                    {portion}
                  </td>
                </tr>
              );
            })}
          <tr>
            <th
              colSpan={2}
              className="h-12 px-6 text-1xl bg-orange-200  transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
            >
              Total Price - &#8377; {totalCartPrice && totalCartPrice}
            </th>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Cart;
