import { useState, useEffect } from "react";
import { menuApi } from "../utiles/const";

const useResturantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    const data = await fetch(menuApi + resId);
    const json = await data.json();

    setResInfo(json);
  };
  return resInfo;
};

export default useResturantMenu;
