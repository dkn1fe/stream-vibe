import { HeaderLogo } from "./HeaderLogo";
import { NavButton } from "./NavButton";
import { HeaderSearch } from "./HeaderSearch";
import { BurgerMenu } from "./BurgerMenu";
import { AuthHeader } from "./AuthHeader";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { ProfileLink } from "./ProfileLink";

export const Header = () => {
  const { isAuth } = useSelector((state: RootState) => state.authSlice);
  return (
    <div className="container pt-5">
      <div className="flex gap-5 justify-between text-white items-center">
        <HeaderLogo />
        <NavButton />
        <HeaderSearch />
        <div className="hidden sm:block">
          {!isAuth && 
           <AuthHeader/>
          }
          {isAuth && 
            <ProfileLink/>
          }
        </div>
        <div className="block md:hidden">
          <BurgerMenu />
        </div>
      </div>
    </div>
  );
};
