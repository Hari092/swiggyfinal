import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { gifURL } from "../utiles/const";
// import { gifURL } from "../utiles/const";

const OrderPlaced = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col gap-3 min-h-96 justify-center items-center">
      {!showText && (
        <iframe
          src={gifURL}
          width="480"
          height="480"
          className="giphy-embed"
          allowFullScreen
          title="Animated GIF"
        ></iframe>
      )}
      {showText && (
        <>
          <h1 className="font-bold text-4xl">YOUR ORDER IS PLACED</h1>
          <h2 className="text-orange-500 text-2xl">
            Thank you for shopping with us.
          </h2>
          <Link to="/">
            <h1 className="border bg-red-500 text-white px-5 py-1">
              SEE MORE RESTAURANTS
            </h1>
          </Link>
        </>
      )}
    </div>
  );
};

export default OrderPlaced;
