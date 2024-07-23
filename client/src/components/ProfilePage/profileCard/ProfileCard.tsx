import { RootState } from "@/app/store/store";
import { Bell, BookMarked, Clock8Icon, Headset } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SubscriptionCard } from "./SubscriptionCard";

export const ProfileCard = () => {
  const { isAuth } = useSelector((state: RootState) => state.authSlice);
  const profileCardInfo = [
    {
      id: 1,
      title: "Уведомление",
      img: <Bell color="white" size={32} />,
      link: "/profile/notification",
    },
    {
      id: 2,
      title: "Смотреть позже",
      img: <BookMarked color="white" size={32} />,
      link: "/profile/later",
    },
    {
      id: 3,
      title: "Просмотры",
      img: <Clock8Icon color="white" size={32} />,
      link: "/profile/watched",
    },
    {
      id: 4,
      title: "Помощь",
      img: <Headset color="white" size={32} />,
      link: "/support",
    },
  ];

  return (
    <>
      <SubscriptionCard />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-10">
        {isAuth &&
          profileCardInfo.map((item) => (
            <Link to={item.link} key={item.id}>
              <div className="flex bg-gradient-to-r from-[#2a2739] to-[#3b3054] gap-2 flex-col items-center justify-center max-w-[250px] h-[250px] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                {item.img}
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};
