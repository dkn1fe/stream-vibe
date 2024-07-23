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
import { profileInfo } from "@/shared/utils/profileInfo";

export const AuthHeader = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="ghost">
            <CircleUserRound size={20} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="py-2">
          <DropdownMenuLabel>Authorization</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {profileInfo.map((item) => (
            <Link key = {item.id} to={item.link}>
              <DropdownMenuItem className="flex gap-2" key={item.id}>
                <div className="flex pl-1 items-center gap-3">
                  <span className="text-[16px]">{item.title}</span>
                </div>
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
