import { addFoodItem } from "./FoodItemCardSlice";
import { useDispatch, useSelector } from "react-redux";

export default function FoodItemCard(props) {
  const {
    name,
    price,
    halfPrice,
    unit,
    type,
    mandatoryItem,
    image,
    unitAllowed,
    id,
  } = props.item;
  const dispatch = useDispatch();
  return (
    <>
      {/*      <!-- Component: Elevated primary base sized testimonial with avatar --> */}
      <div
        key={name}
        className="overflow-auto rounded shadow-sm bg-white-500 text-white-200 m-2  "
      >
        <div className="relative p-2">
          <div className="flex flex-col justify-center  gap-4 text-sm text-white ">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.4dpC8yqkOilrECizuWwlpgHaER%26pid%3DApi&f=1&ipt=6f069f82c320539cd977ec92d1ac124bb105e6723ab0f54b674bbbf0efeaa051&ipo=images"
              alt="user name"
              title="user name"
              width="128"
              height="128"
              className="max-w-full shrink-0 rounded mx-auto"
            />
            <div className="flex flex-col gap-1 text-black text-center">
              <span className="font-bold uppercase">
                {name}
                <span className=" font-light capitalize "> / {unit}</span>
              </span>
              <div className="not-italic font-mono">
                {price && (
                  <div className="flex p-1 bg-amber-500 justify-between ">
                    <p className="">
                      {`${price} Rs `} {unitAllowed ? "Full" : ""}
                    </p>
                    <div>
                      <span className="text-white bg-gray-700 text-center py-1 px-2 cursor-pointer hover:bg-red-400">
                        -
                      </span>

                      <span className="text-black bg-gray-200 text-center py-1 px-2">
                        0
                      </span>

                      <span
                        onClick={() =>
                          dispatch(
                            addFoodItem({ name, price, portion: "full", id })
                          )
                        }
                        className="text-white bg-gray-700 text-center py-1 px-2 cursor-pointer  hover:bg-red-400"
                      >
                        +
                      </span>
                    </div>
                  </div>
                )}
                {halfPrice && (
                  <div className="flex p-1 bg-amber-200 justify-between ">
                    <p className="">
                      {`${halfPrice} Rs `} {unitAllowed ? "Full" : ""}
                    </p>
                    <div>
                      <span className="text-white bg-gray-700 text-center py-1 px-2 cursor-pointer  hover:bg-red-400">
                        -
                      </span>

                      <span className="text-black bg-gray-200 text-center py-1 px-2">
                        0
                      </span>

                      <span
                        onClick={() =>
                          dispatch(
                            addFoodItem({ name, price, portion: "half", id })
                          )
                        }
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