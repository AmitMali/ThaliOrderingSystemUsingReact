import React, { useEffect, useState } from "react";
import FoodItemCard from "../components/FoodItemCard/FoodItemCard";
import { useSelector } from "react-redux";
import { menuItems } from "../data/menuItemsList";
const Home = () => {
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
  return (
    <div className="container px-6 m-auto">
      <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
        <section className="col-span-4 lg:col-span-8">
          <div className="flex flex-wrap">
            {menuItems.map((item, i) => {
              return (
                <div key={i} className=" w-96 ">
                  <FoodItemCard item={item} />
                </div>
              );
            })}
          </div>
        </section>
        <section className="col-span-4 border-l px-2">
          <div className="flex flex-wrap">
            <ul className="divide-y divide-slate-100">
              {cartItems.length > 0 ? (
                <p className="text-2xl text-center">Your Thali</p>
              ) : (
                <p className="text-2xl text-center">Add items to your Thali</p>
              )}
              {cartItems &&
                cartItems.map((item, i) => {
                  const { thumbnail, name, portion, quantity, price } = item;
                  return (
                    <li key={i} className="flex items-center gap-4 px-4 py-3">
                      <div className="flex shrink-0 items-center self-center">
                        <img
                          src={thumbnail}
                          alt="product image"
                          className="w-16 rounded"
                        />
                      </div>

                      <div className="flex min-h-[2rem] min-w-0 flex-1 flex-col items-start justify-center gap-0">
                        <h4 className="w-full truncate text-base text-slate-700">
                          {name}
                        </h4>
                        <p className="text-sm text-slate-400">
                          Portion - {portion}
                        </p>
                        <p className="text-sm text-slate-400">
                          Quantity - {quantity}{" "}
                        </p>
                      </div>
                      <div className="text-1x text-slate-900">
                        &#8377;
                        {price * quantity}
                      </div>
                    </li>
                  );
                })}
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
                      <span className="text-red-500 font-semibold">*</span> are
                      mandetory) or quantity of of mandetory items is more than
                      2
                    </span>
                  )}
                </div>
              ) : (
                <></>
              )}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
