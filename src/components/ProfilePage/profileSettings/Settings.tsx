import { RootState } from "@/app/store/store";
import { useState } from "react";
import { useSelector } from "react-redux";
import { SettingsModal } from "./SettingsModal";

export const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("");
  const { userData, isAuth } = useSelector(
    (state: RootState) => state.authSlice
  );

  const settingsInfo = [
    { id: 1, title: "Имя", label: userData?.username, type: "name" },
    { id: 2, title: "Почта", label: userData?.email, type: "email" },
    { id: 2, title: "Аватар", label: userData?.color, type: "icon" },
    {
      id: 3,
      title: "Телефон",
      label: userData?.phone || "Добавить",
      type: "phone",
    },
  ];

  if (!isAuth) {
    return <div>Please log in to see settings</div>;
  }

  const changeSettingsModal = (type: string) => {
    setIsOpen(!isOpen);
    setType(type);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="flex flex-col items-center justify-start min-h-screen bg-[#110e1a] pb-10">
        {settingsInfo &&
          settingsInfo.map((item) => (
            <div
              key={item.id}
              onClick={() => changeSettingsModal(item.type)}
              className="flex justify-between cursor-pointer items-center w-full max-w-[500px] p-5 mb-4 bg-[#1f1b2e] max-h-[65px] rounded-[20px] shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <h3 className="text-[#999999]">{item.title}</h3>
              <div className="flex items-center">
                {item.type === "icon" ? (
                  <div
                    style={{ background: `${userData?.color}` }}
                    className="flex justify-center items-center w-[40px] cursor-pointer h-[40px] rounded-lg shadow-lg"
                  >
                    <h3 className="text-[18px] text-white">
                      {userData?.username?.slice(0, 1).toUpperCase()}
                    </h3>
                  </div>
                ) : (
                  <p className="text-white font-bold">{item.label}</p>
                )}
              </div>
            </div>
          ))}
      </div>
      <SettingsModal open={isOpen} closeModal={closeModal} type={type} />
    </>
  );
};
