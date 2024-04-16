import Resturant from "./../components/Resturant";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { mainApi } from "../utiles/const";
import useOnlineStatus from "../utiles/useOnlineStatus";
import Carousel from "./Carousel";

const Body = () => {
  const [resturantData, setresturantData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRes, setFilterRes] = useState([]);
  const [header, setHeader] = useState("");
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(mainApi);
    const json = await data.json();
    setJsonData(json?.data?.cards);



    setresturantData(
      json?.data?.cards[4]?.card.card.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRes(
      json?.data?.cards[4]?.card.card.gridElements?.infoWithStyle?.restaurants
    );
    setHeader(json?.data?.cards[2]?.card?.card?.title);
  };

  const status = useOnlineStatus();

  if (!status) {
    return (
      <h1 className="text-center text-rose-600	text-2xl	flex justify-center items-center h-screen w-auto	">
        your are offline please check your internet connectivity and come back
        sooner....
      </h1>
    );
  }

  return resturantData.length === 0 ? (
    <Shimmer />
  ) : (
    <div  className="overflow-x-hidden">
      <div>
        <div>
          <Carousel data={jsonData} />
        </div>
      </div>

      <div className="res-container sm:mx-36">
        <h1 className="my-5 text-center font-sans font-black text-lg md:text-left md:text-4xl  md:mt-10 md:mb-10">
          {header}
        </h1>
        <div className="flex gap-8 my-5 mb-10">
          <div className="flex ps-5 md:ps-3">
            <input
              type="text"
              className="border-2 rounded border-orange-400 h-6 mx-2 md:mx-3 md:h-8"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <div>
              <button
                className="h-6 text-xs px-2 md:h-min md:px-3 md:py-1 md:text-base  bg-orange-400 text-white font-semibold rounded "
                onClick={() => {
                  const filter = resturantData.filter((e) =>
                    e.info.name.toLowerCase().includes(searchText.toLowerCase())
                  );
                  setFilterRes(filter);
                }}
              >
                search
              </button>
            </div>
          </div>
          <div className="h-6 text-xs px-2 me-3 pt-1 md:h-min md:px-3 md:py-1 md:text-base  bg-orange-400 text-white font-semibold rounded ">
            <button
              onClick={() => {
                const top = resturantData.filter((a) => a.info?.avgRating >= 4);
                setFilterRes(top);
   
              }}
            >
              Top-Rated-resturant
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          {filterRes.map((res) => (
            <Link key={res.info.id} to={"/resturants/" + res.info.id} className="mx-10">
              <Resturant resData={res.info} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
