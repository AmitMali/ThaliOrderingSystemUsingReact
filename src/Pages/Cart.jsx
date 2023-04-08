import React from "react";
import { useSelector } from "react-redux";
const Cart = () => {
  const cartItems = useSelector((state) => state.foodItem.foodItems);
  const cartItemsCount = useSelector((state) => state.foodItem.cartItemsCount);
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
  return (
    <div>
      <div className="py-4">{cartItemsCount} items in cart</div>
      <div className="flex flex-col">
        <table
          className=" mx-auto w-full lg:w-6/12 text-left  rounded sm:border-separate"
          cellSpacing="0"
        >
          <thead>
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
          </thead>
          <tbody>
            {cartItems &&
              cartItems.map((foodItem, i) => {
                const {
                  name,
                  id,
                  price,
                  thumbnail,
                  totalPrice,
                  quantity,
                  portion,
                } = foodItem;

                return (
                  <tr key={i}>
                    <td className="capitalize h-12 px-6 text-sm transition duration-300  text-slate-500 ">
                      <img
                        src={thumbnail}
                        alt={name}
                        className="w-12 inline-block mr-1"
                      />
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
                colSpan={4}
                className="h-12 px-6 text-1xl bg-orange-200  transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
              >
                {cartItems.length > 0 ? (
                  <div className="p-2 text-1xl bg-orange-200  transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-700 font-bold ">
                    Total : &#8377; {totalCartPrice}
                    {mandetoryItems > 2 || mandetoryItemsQuantity > 2 ? (
                      <button className="mx-2 inline-flex items-center justify-center gap-2 px-2 py-1 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-red-500 hover:bg-red-600 focus:bg-red-700 disabled:cursor-not-allowed disabled:border-red-300 disabled:bg-red-300 disabled:shadow-none">
                        <span>Checkout</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          aria-labelledby="title description"
                          role="graphics-symbol"
                        >
                          <title id="title">Cart Icon</title>
                          <desc id="description">Cart icon with items</desc>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                          />
                        </svg>
                      </button>
                    ) : (
                      <span className="text-xs block font-light">
                        At least 2 mendatory items need in thali to checkout (
                        items with
                        <span className="text-red-500 font-semibold">
                          *
                        </span>{" "}
                        are mandetory) or quantity of of mandetory items is more
                        than 2
                      </span>
                    )}
                  </div>
                ) : (
                  <></>
                )}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
