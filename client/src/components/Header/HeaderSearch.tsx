import { Search } from "lucide-react";
import { Link } from "react-router-dom";

export const HeaderSearch = () => {
  return (
    <div className="flex gap-5 items-center">
      <Link to="/search">
        <Search size={20} />
      </Link>
    </div>
  );
};
