import { HeaderLogo } from "./HeaderLogo";
import { NavButton } from "./NavButton";
import { HeaderSearch } from "./HeaderSearch";
import { BurgerMenu } from "./BurgerMenu";

export const Header = () => {
  return (
    <div className="container pt-5">
      <div className="flex justify-between text-white items-center">
        <HeaderLogo />
        <NavButton />
        <HeaderSearch />
        <div className="block md:hidden">
        <BurgerMenu/>
        </div>
      </div>
    </div>
  );
};
