import { imgApi } from "../utiles/const";
import { UserInfo } from "./firebase-config";
// import { BsCircleFill } from "react-icons/bs";
import Resturant from "./../components/Resturant";
import { Link } from "react-router-dom";

const Carousel = ({ data }) => {
  const { userName } = UserInfo();
  const { info } = data[0].card.card.imageGridCards;
  const { title } = data[0].card.card.header;
  const { restaurants } = data[1].card.card.gridElements.infoWithStyle;


  return (
    <div className="sm:mx-36">
      <div>
        <div className="my-10 ">
          <h1 className="text-center text-xl sm:text-start font-black sm:text-4xl">
            {userName.slice(0, -1).trim() && (
              <span>{userName.slice(0, -1).trim()} </span>
            )}{" "}
            {title}
          </h1>
        </div>
        <div className="flex overflow-x-auto mb-10 ms-10 me-5 sm:mx-0 no-scrollbar border-b-2">
          {info.map((res) => (
            <div key={res.id} className="h-40 w-32 flex-shrink-0 mr-4 pb-5">
              <img
                className="w-full h-full object-cover"
                src={imgApi + res?.imageId}
                alt="res-img"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="sm:border-b-2 mx-5 sm:mx-0 border-b-2 pb-5">
        <h1 className="text-center text-xl sm:text-start font-black sm:text-4xl">
          {data[1].card.card.header.title}
        </h1>
        <div className="flex overflow-x-auto p-4 no-scrollbar mt-8 h-[min]  ">
          {restaurants.map((res) => (
            <Link key={res.info.id} to={"/resturants/" + res.info.id}>
              <Resturant resData={res.info} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
