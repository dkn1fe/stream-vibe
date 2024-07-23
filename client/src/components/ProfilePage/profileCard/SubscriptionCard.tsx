import logo from "@/layouts/header/headerLogo.png";
import { Link } from "react-router-dom";

export const SubscriptionCard = () => {
  return (
    <Link to="/subscription">
      <div className="flex flex-col items-center sm:flex-row max-w-full sm:max-w-[600px] sm:h-[200px] rounded-xl shadow-lg bg-gradient-to-r from-[#1f1b2e] to-[#3b3054] hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div className="p-5 flex items-center justify-center sm:justify-start">
          <img src={logo} className="w-[50px] h-[50px]" alt="Logo" />
        </div>
        <div className="p-5 flex flex-col items-center sm:items-start text-center sm:text-left text-white">
          <h3 className="text-[22px] font-bold">Оформить подписку</h3>
          <p className="text-[16px] text-[#b3aed4]">
            Подключить и попробовать
          </p>
        </div>
      </div>
    </Link>
  );
};
