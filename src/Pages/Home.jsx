import React, { useEffect, useState } from "react";
import FoodItemCard from "../components/FoodItemCard/FoodItemCard";
import { useSelector } from "react-redux";
import { menuItems } from "../data/menuItemsList";
const Home = () => {
  const cartItems = useSelector((state) => state.foodItem.foodItems);
  return (
    <div>
      <section>
        <div className="container px-6 m-auto">
          <div className="flex flex-wrap">
            {cartItems.map((item, i) => {
              return (
                <div key={i} className=" w-96 ">
                  {item.name}({item.portion}) - qantity {item.quantity}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section>
        <div className="container px-6 m-auto">
          <div className="flex flex-wrap">
            {menuItems.map((item, i) => {
              return (
                <div key={i} className=" w-96 ">
                  <FoodItemCard item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
