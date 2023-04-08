import React from "react";
import FoodItemCard from "../components/FoodItemCard/FoodItemCard";

const menuItems = [
  {
    id: 1,
    name: "Chapati",
    image: "",
    price: "15",
    halfPrice: null,
    unit: "unit",
    mandatoryItem: true,
    type: "bread",
    unitAllowed: true,
  },
  {
    id: 2,
    name: "Rice",
    image: "",
    price: "60",
    halfPrice: "40",
    unit: "plate",
    mandatoryItem: true,
    type: "rice",
    unitAllowed: true,
  },
  {
    id: 3,
    name: "Dal",
    image: "",
    price: "80",
    halfPrice: "50",
    unit: "plate",
    mandatoryItem: true,
    type: "dal",
    unitAllowed: true,
  },
  {
    id: 4,
    name: "Paneer Masala",
    image: "",
    price: "90",
    halfPrice: "60",
    unit: "plate",
    mandatoryItem: true,
    type: "DrySabji",
    unitAllowed: true,
  },
  {
    id: 5,
    name: "Pickel",
    image: "",
    price: "10",
    halfPrice: null,
    unit: "serving",
    mandatoryItem: true,
    type: "extra",
    unitAllowed: false,
  },
  {
    id: 6,
    name: "Curd",
    image: "",
    price: "20",
    halfPrice: null,
    unit: "serving",
    mandatoryItem: true,
    type: "extra",
    unitAllowed: false,
  },
  {
    id: 7,
    name: "Gulab Jamun",
    image: "",
    price: "60",
    halfPrice: null,
    unit: "plate (2 unit)",
    mandatoryItem: true,
    type: "extra",
    unitAllowed: false,
  },
];
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
