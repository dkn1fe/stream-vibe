import { Link } from "react-router-dom";
import { navButtonInfo } from "@/shared/utils/burgerMenuInfo";

export const NavButton = () => {

  return (
    <div className="w-[555px] hidden md:flex px-10 m-auto h-[75px] justify-between border-solid border-2 border-[#BFBFBF] rounded-lg items-center bg-[#0F0F0F]">
      {navButtonInfo.map((item) => (
        <Link key={item.id} to={item.link}>
          <div className="flex">
            <p className="text-white">{item.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
