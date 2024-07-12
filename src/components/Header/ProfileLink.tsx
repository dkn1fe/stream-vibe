import { useSelector, useDispatch } from "react-redux";
import { profileColor } from "@/shared/utils/profileInfo";
import { AppDispatch, RootState } from "@/app/store/store";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { setColor, logout } from "@/app/store/AuthSlice";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Button } from "@/shared/ui/button";

export const ProfileLink = () => {
  const { userData, isAuth } = useSelector(
    (state: RootState) => state.authSlice
  );
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    let profileBackground =
      profileColor[Math.floor(profileColor.length * Math.random())];
    dispatch(setColor(profileBackground));
  }, [userData?._id]);

  const mouseEnterHandler = () => {
    setIsOpen(true);
  };

  const mouseLeaveHandler = () => {
    setIsOpen(false);
  };

  const logOutProfile = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    window.location.reload();
  };

  return (
    <Popover open={isOpen}>
      <PopoverTrigger onMouseEnter={mouseEnterHandler} asChild>
        <div
          style={{ background: `${userData?.color}` }}
          className="flex justify-center items-center w-[50px] cursor-pointer h-[50px] rounded-lg shadow-lg"
        >
          <h3 className="text-[18px] text-white">
            {isAuth && userData?.username?.slice(0, 1).toUpperCase()}
          </h3>
        </div>
      </PopoverTrigger>
      <PopoverContent
        onPointerDownOutside={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        collisionPadding={20}
        className="w-[180px] p-4 z-20 bg-[#1f1f1f] text-white rounded-lg shadow-lg"
      >
        <h3 className="mb-3 text-lg font-semibold">
          {isAuth && userData?.username}
        </h3>
        <div className="bg-white h-[0.2px] my-3" />
        <Link
          to="/profile"
          className="block py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md text-center transition duration-300"
        >
          Profile
        </Link>
        <Button
          onClick={logOutProfile}
          className="block w-full mt-2 py-2 text-red-500 bg-transparent hover:bg-red-600 hover:text-white rounded-md text-center transition duration-300"
        >
          Log Out
        </Button>
      </PopoverContent>
    </Popover>
  );
};
