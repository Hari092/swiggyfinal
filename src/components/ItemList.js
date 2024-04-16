import { useDispatch } from "react-redux";
import { imgApi } from "../utiles/const";
import { addItem } from "../utiles/cartSlice";

export const ItemList = ({ item }) => {
  const dispatch = useDispatch();

  const handleAdd = (a) => {
    dispatch(addItem(a));
  };
  return (
    <div>
      {item.map((a) => (
        <div
          key={a?.card?.info?.id}
          className="flex justify-between border-b border-slate-300 my-10 pb-10"
        >
          <div className="w-full px-5 md:w-7/12 flex justify-between">
            <div className="me-3 text-sm md:text-lg ">
              <p className="rounded-full">
                {a.card.info.itemAttribute.vegClassifier === "VEG"
                  ? "🟢"
                  : "🔴"}{" "}
              </p>
              <h1 className="font-bold text-lg pt-1">{a?.card?.info?.name}</h1>
              <p className="py-2">{a?.card?.info?.description}</p>
              <p className=" font-medium text-lg">
                ₹{a?.card?.info?.price / 100 || a?.card.info.price}
              </p>
            </div>
          </div>
          <div>
            <img
              className=" h-24 mt-7 w-40 md:h-36 md:m-0 md:p-0 md:w-40 border border-zinc-300 rounded-lg"
              src={
                a?.card?.info?.imageId
                  ? imgApi + a?.card?.info?.imageId
                  : `https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/food-photography/CODERED_B1_food-photography_p4b_690x455.jpg.img.jpg`
              }
              alt="img-food"
            />
            <button
              className="absolute border py-3 font-semibold px-4 translate-x-8 text-xs -translate-y-4 border-gray-300 md:py-1 md:px-8 text-green-600 md:font-medium  md:text-xs rounded-sm hover:shadow-lg shadow-slate-800  md:translate-x-8 md:-translate-y-3 bg-white"
              onClick={() => handleAdd(a)}
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
