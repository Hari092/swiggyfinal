// import OderPlaced from "./Oderplaced";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { imgApi } from "../utiles/const";
import {
  removeItem,
  clearItem,
  increaseItemCount,
  decreaseItemCount,
} from "../utiles/cartSlice";
import Address from "./Address";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  const totalCost = useSelector((store) => store.cart.totalCost);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearItem());
  };

  const handleIncreaseItemCount = (itemId) => {
    dispatch(increaseItemCount(itemId));
  };

  const handleDecreaseItemCount = (itemId) => {
    dispatch(decreaseItemCount(itemId));
  };

  if (cart.length === 0) {
    return (
      <div className="sm:h-[26rem] h-[26rem] w-full flex flex-col justify-center items-center">
        <h1 className=" font-bold text-xl">YOUR CART IS EMPTY</h1>
        <Link to="/">
          <button className="border p-2 m-3 bg-red-500 text-2xl text-white">
            SEE RESTURANTS NEAR YOU
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full p-5 md:flex md:flex-row flex flex-col-reverse ">
      {/* <div className="md:w-1/2">
        <h1 className="text-center font-bold text-xl text-orange-500">
          DELIVERY ADDRESS
        </h1>
        <div>
          <Address />
        </div>
      </div> */}
      <div className="md:w-full sm:w-full">
        <div className="sm:h-[25rem] h-96 overflow-y-auto">
          {cart.map((item) => (
            <div key={item.card.info.id} className="mb-2 bg-gray-200 p-2">
              <h1 className=" text-lg text-black font-bold">
                {item.card.info.name}
              </h1>
              <div className="flex justify-between ">
                <div className="flex gap-2">
                  <img
                    className="h-20 w-20"
                    src={imgApi + item.card.info.imageId}
                    alt="food-img"
                  />
                  <button
                    onClick={() => handleDecreaseItemCount(item.card.info.id)}
                    className="border w-12 h-min  bg-white font-bold"
                  >
                    -
                  </button>
                  <p>{item.count}</p>
                  <button
                    onClick={() => handleIncreaseItemCount(item.card.info.id)}
                    className="border w-12 h-min bg-white font-bold "
                  >
                    +
                  </button>
                  <p>₹{(item.card.info.price * item.count) / 100}</p>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.card.info.id)}
                  className="bg-red-500 font-bold text-white px-2 py-2 text-xs sm:text-lg h-min  md:h-min block"
                >
                  Remove Item
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between border-t-2 mt-2 pt-2 border-t-black sm:w-full">
          <p  className="bg-orange-500 px-2 text-white"> TO PAY: ₹{totalCost}</p>
          <button onClick={handleClearCart}  className="bg-red-500 px-2 text-white">Clear Cart</button>
          <Link to="/Oderplaced">
            <button onClick={handleClearCart} className="bg-orange-500 px-2 text-white">CHECK OUT</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
