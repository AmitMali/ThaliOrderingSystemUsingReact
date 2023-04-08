import React from "react";
import FoodItemCard from "../components/FoodItemCard/FoodItemCard";

import { menuItems } from "../data/menuItemsList";
const Home = () => {
  return (
    <div>
      <section>
        <div className="container px-6 m-auto">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-9 lg:grid-cols-12">
            {menuItems.map((item, i) => {
              return (
                <div
                  key={item.id}
                  className="lg:col-span-3 md:col-span-3 col-span-2"
                >
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
