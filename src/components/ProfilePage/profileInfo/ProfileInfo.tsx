import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";
import { Pencil } from "lucide-react";
import { Link } from "react-router-dom";

export const ProfileInfo = () => {
  const { userData, isAuth } = useSelector(
    (state: RootState) => state.authSlice
  );
  return (
    <Link className="flex gap-3 items-center" to={"/profile/settings"}>
      <div
        style={{ background: `${userData?.color}` }}
        className="flex justify-center items-center w-[80px] cursor-pointer h-[80px] rounded-lg shadow-lg"
      >
        <h3 className="text-[28px] text-white">
          {isAuth && userData?.username?.slice(0, 1).toUpperCase()}
        </h3>
      </div>
      <div className="flex items-center gap-2">
        <h3 className="text-white text-[28px] font-bold">
          {userData?.username}
        </h3>
        <Pencil size={18} color="#999999" />
      </div>
    </Link>
  );
};
