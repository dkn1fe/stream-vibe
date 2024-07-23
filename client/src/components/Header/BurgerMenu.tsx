import { Menu, BedSingle, Clapperboard, Cable, Podcast, KeyRound, CirclePlus } from "lucide-react";
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


export const BurgerMenu = () => {
  const navButtonInfo = [
    { id: 1, title: "Home", link: "/", img: <BedSingle size={20} /> },
    { id: 2, title: "Movies & Shows", link: "/movies&show", img: <Clapperboard size={20} /> },
    { id: 3, title: "Support", link: "/support", img: <Cable size={20} /> },
    { id: 4, title: "Subscriptions", link: "/subscriptions", img: <Podcast size={20} /> },
    { id: 5, title: 'Login', link: '/auth/login', img: <KeyRound size={20} /> },
    { id: 6, title: 'Registration', link: '/auth/registry', img: <CirclePlus size={20} /> },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="bg-[#1A1A1A] border-[2px] border-solid border-[#262626]" variant="ghost">
          <Menu size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {navButtonInfo.map((item) => (
          <DropdownMenuItem className="flex gap-2" key={item.id}>
            <Link to={item.link}>
              <div className="flex items-center gap-4">
                {item.img}
                <span>{item.title}</span>
              </div>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
