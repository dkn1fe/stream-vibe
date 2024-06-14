import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Button } from "@/shared/ui/button";
import { navButtonInfo } from "@/shared/utils/burgerMenuInfo";
import { Link } from "react-router-dom";

export const BurgerMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="secondary">
          <Menu size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {navButtonInfo.map((item) => (
          <DropdownMenuItem className="flex gap-2" key={item.id}>
            <Link to={item.link}>
              <div className="flex items-center gap-3">
                <span>{item.title}</span>
              </div>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
