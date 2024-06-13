import headerlogo from "@/layouts/header/headerLogo.png";

export const HeaderLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={headerlogo} />
      <h3 className="font-bold md:text-xl">StreamVibe</h3>
    </div>
  );
};
