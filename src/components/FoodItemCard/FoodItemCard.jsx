import { useEffect, useState } from "react";
import { addFoodItem, removeFoodItem } from "./FoodItemCardSlice";
import { useDispatch, useSelector } from "react-redux";

export default function FoodItemCard(props) {
  const foodItems = useSelector((state) => state.foodItem.foodItems);
  const [quantityFullPortion, setQuantityFullPortion] = useState(0);
  const [quantityHalfPortion, setQuantityHalfPortion] = useState(0);
  const dispatch = useDispatch();
  const getQuantity = (id, portion) => {
    const filteredItem = foodItems.filter(
      (item) => item.id == id && item.portion == portion
    );

    if (filteredItem === undefined || filteredItem.length == 0) {
      return 0;
    }

    return filteredItem[0].quantity;
  };
  const handlePlusClick = (e) => {
    const portion = e.target.dataset.portion;
    const itemPrice = portion == "full" ? price : halfPrice;
    console.log(portion, id);
    dispatch(addFoodItem({ name, price: itemPrice, portion, id }));
    if (portion == "full") {
      setQuantityFullPortion(
        (quantityFullPortion) => (quantityFullPortion += 1)
      );
    }
    if (portion == "half") {
      setQuantityHalfPortion(
        (quantityHalfPortion) => (quantityHalfPortion += 1)
      );
    }
  };
  const handleMinusClick = (e) => {
    const portion = e.target.dataset.portion;
    dispatch(removeFoodItem({ portion, id }));
    if (portion == "full") {
      setQuantityFullPortion((quantityFullPortion) =>
        quantityFullPortion > 0 ? (quantityFullPortion -= 1) : 0
      );
    }
    if (portion == "half") {
      setQuantityHalfPortion((quantityHalfPortion) =>
        quantityHalfPortion > 0 ? (quantityHalfPortion -= 1) : 0
      );
    }
  };

  const {
    name,
    price,
    halfPrice,
    unit,
    type,
    mandatoryItem,
    unitAllowed,
    thumbnail,
    id,
  } = props.item;
  useEffect(() => {
    setQuantityFullPortion(getQuantity(id, "full"));
    setQuantityHalfPortion(getQuantity(id, "half"));
  }, [quantityFullPortion, quantityHalfPortion]);
  return (
    <>
      {/*      <!-- Component: Elevated primary base sized testimonial with avatar --> */}
      <div
        key={name}
        className="overflow-auto rounded shadow-sm bg-white-500 text-white-200 m-2  "
      >
        <div className="relative p-2">
          <div className="flex flex-row align-top  gap-4 text-sm text-white ">
            <img
              src={thumbnail}
              alt="user name"
              title="user name"
              height="88px"
              width="128px"
              className=" rounded"
            />
            <div className="flex flex-col gap-1 text-black text-center w-full">
              <h2 className="font-bold uppercase text-slate-700 text-lg">
                {name}
                <span className=" font-light capitalize "> / {unit}</span>
              </h2>
              <div className="not-italic font-mono">
                {price && (
                  <div className="flex p-2 bg-amber-500 justify-between  ">
                    <p className="">
                      {`${price} Rs `} {unitAllowed ? "Full" : ""}
                    </p>
                    <div>
                      <span
                        onClick={handleMinusClick}
                        data-portion="full"
                        className="text-white bg-gray-700 text-center py-1 px-2 cursor-pointer hover:bg-red-400"
                      >
                        -
                      </span>

                      <span className="text-black bg-gray-200 text-center py-1 px-2">
                        {quantityFullPortion}
                      </span>

                      <span
                        onClick={handlePlusClick}
                        data-portion="full"
                        className="text-white bg-gray-700 text-center py-1 px-2 cursor-pointer  hover:bg-red-400"
                      >
                        +
                      </span>
                    </div>
                  </div>
                )}
                {halfPrice && (
                  <div className="flex p-2 bg-amber-200 justify-between ">
                    <p className="">
                      {`${halfPrice} Rs `} {unitAllowed ? "half" : ""}
                    </p>
                    <div>
                      <span
                        onClick={handleMinusClick}
                        data-portion="half"
                        className="text-white bg-gray-700 text-center py-1 px-2 cursor-pointer  hover:bg-red-400"
                      >
                        -
                      </span>

                      <span className="text-black bg-gray-200 text-center py-1 px-2">
                        {quantityHalfPortion}
                      </span>

                      <span
                        onClick={handlePlusClick}
                        data-portion="half"
                        className="text-white bg-gray-700 text-center py-1 px-2 cursor-pointer  hover:bg-red-400"
                      >
                        +
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*      <!-- End Elevated primary base sized testimonial with avatar --> */}
    </>
  );
}
