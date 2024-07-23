
import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface ScrollTopProps{
    children: React.ReactNode;
}

export const ScrollTop:FC<ScrollTopProps> = (props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return props.children
};

