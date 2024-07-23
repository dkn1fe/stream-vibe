import { Link, useLocation } from "react-router-dom";
import { navButtonInfo } from "@/shared/utils/burgerMenuInfo";
import { useState, useEffect } from "react";

export const NavButton = () => {
  const [selectIndex, setSelectIndex] = useState(1);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const activeItem = navButtonInfo.find((item) => item.link === currentPath);
    if (activeItem) {
      setSelectIndex(activeItem.id);
    }
  }, [location.pathname]);

  return (
    <div className="w-[555px] hidden md:flex px-2 py-2 m-auto h-[75px] justify-between border-solid border-4 border-[#1F1F1F] rounded-[12px] items-center bg-[#0F0F0F] shadow-lg">
      {navButtonInfo.map((item) => (
        <div
          key={item.id}
          className={`flex items-center justify-center rounded-[8px] transition-colors duration-300 ${
            selectIndex === item.id
              ? "bg-[#222222] scale-105"
              : "bg-transparent"
          }`}
          style={{ margin: "0 4px" }}
          onClick={() => setSelectIndex(item.id)}
        >
          <Link
            className={`flex items-center justify-center w-full h-full px-5 py-3 rounded-[8px] ${
              selectIndex === item.id
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
            to={item.link}
          >
            <div className="flex">
              <p
                className={`font-semibold ${
                  selectIndex === item.id ? "text-white" : "text-[#BFBFBF]"
                }`}
              >
                {item.title}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
