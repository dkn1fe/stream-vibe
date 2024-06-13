import { Search, Bell } from "lucide-react";

export const HeaderSearch = () => {
  return (
    <div className="flex gap-5 items-center">
      <Search size={20} />
      <Bell size={20} />
    </div>
  );
};
