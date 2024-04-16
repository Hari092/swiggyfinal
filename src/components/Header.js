
import { Link } from "react-router-dom";
import useOnlineStatus from "../utiles/useOnlineStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import  {Auth}  from "./signInWithGoogle";


const Header = () => {


  const status = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);
 


  return (
    <div
      className="flex justify-between  bg-orange-100 shadow-lg mb-3 md:flex md:flex-row md:justify-between"
    >
      <div className="md:mb-0">
        <Link to="/">
          <img
            className="w-20 rounded-full m-3"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK4vZhk5VYEpE7qBYmuxv_3oKYnSLcThSdEw&usqp=CAU"
            alt="header-logo"
          />
        </Link>
      </div>

      <nav className="">
        <ul className="mt-6 p-4 m-4 font-semibold text-lg flex gap-5">
          <li className="hidden md:block">
            Online Status: {status ? "🟢" : "🔴"}
          </li>
          <li className="mx-5 ">
            <Link className="h-2 w-2 " to="/Cart">
              <FontAwesomeIcon icon={faCartShopping} />{" "}
              { (
                <p className="absolute top-0 -ms-3 inline-block bg-orange-400 text-white w-max px-2 rounded-full h-max text-sm translate-y-8 ">
                  <span className="cart-count"> {cartItems.length}</span>
                </p>
              )}
            </Link>
          </li>
          <li className="hover:text-orange-400 hidden sm:block">
            <Link className="Link" to="/about">
              About Us
            </Link>
          </li>
          <li className="hover:text-orange-400 hidden sm:block">
            <Link className="Link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="Link  hover:text-orange-400 hidden sm:block">Help</li>
          <li>
            <Auth />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
