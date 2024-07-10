import { CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Button } from "@/shared/ui/button";
import { Link } from "react-router-dom";
import { profileAuthInfo, profileInfo } from "@/shared/utils/profileInfo";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

export const Profile = () => {
  const { isAuth } = useSelector((state: RootState) => state.authSlice);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost">
          <CircleUserRound size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="py-2">
        <DropdownMenuLabel>{isAuth ? 'Name' : 'Authorization'}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {!isAuth &&
          profileInfo.map((item) => (
            <Link to={item.link}>
              <DropdownMenuItem className="flex gap-2" key={item.id}>
                <div className="flex pl-1 items-center gap-3">
                  <span className="text-[16px]">{item.title}</span>
                </div>
              </DropdownMenuItem>
            </Link>
          ))}
          {isAuth && (
            profileAuthInfo.map((item) =>(
                <Link to={item.link}>
                <DropdownMenuItem className="flex gap-2" key={item.id}>
                  <div className="flex pl-1 items-center gap-3">
                    <span className="text-[16px]">{item.title}</span>
                  </div>
                </DropdownMenuItem>
              </Link>
            ))
          )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
