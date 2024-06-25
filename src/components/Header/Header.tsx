import { HeaderLogo } from "./HeaderLogo";
import { NavButton } from "./NavButton";
import { HeaderSearch } from "./HeaderSearch";
import { BurgerMenu } from "./BurgerMenu";
import { Bell } from "lucide-react";

export const Header = () => {
  return (
    <div className="container pt-5">
      <div className="flex gap-5 justify-between text-white items-center">
        <HeaderLogo />
        <NavButton />
        <HeaderSearch />
        <Bell size = {20}/>
        <div className="block md:hidden">
          <BurgerMenu />
        </div>
      </div>
    </div>
  );
};
