import { imgApi } from "../utiles/const";
import { BsCircleFill } from "react-icons/bs";

const Resturant = ({ resData }) => {
  const res = resData;
  return (
    <div className="md:my-5 h-80 md:pt-5  md:-mt-5 ">
      <div
        key={res.id}
        className=" w-64 h-40 mr-4 flex-shrink-0 cursor-pointer hover:scale-95 hover:duration-100 hover:shadow-xl	"
      >
        <img
          src={imgApi + res.cloudinaryImageId}
          alt={`Restaurant ${res.id}`}
          className="w-full h-full object-cover rounded-lg"
        />
        <div>
          <h2 className="font-bold text-neutral-600 text-base me-2 my-1 whitespace-nowrap overflow-clip">
            {res?.name}
          </h2>
          <div className="flex">
            <p className=" font-medium text-base text-neutral-600">
              <span className="text-green-500">*</span>
              {res.avgRating}
            </p>
            <p className="mt-3 mx-2">
              <BsCircleFill color="grey" size={8} />
            </p>
            <p className=" text-base font-medium text-neutral-600">
              {res.sla.slaString}
            </p>
            <p className="text-sm px-2 mt-[3px] font-medium text-neutral-600 ms-1">
              {res.costForTwo}
            </p>
          </div>
          <p className="whitespace-nowrap overflow-clip text-sm my-1">
            {res.cuisines.length > 4
              ? res.cuisines.slice(0, -3).join(",")
              : res.cuisines.join(", ")}
          </p>
          <p className="text-sm">
            {res.areaName}
            {"  "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resturant;
