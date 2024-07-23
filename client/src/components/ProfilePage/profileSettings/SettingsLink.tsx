import { Link } from "react-router-dom";

export const SettingsLink = () => {
  return (
    <div className="flex gap-2 text-white font-bold">
      <Link to="/profile">
        <h3 className="opacity-80 hover:opacity-100 duration-100">Профиль</h3>
      </Link>
      <p>·</p>
      <h3 className="opacity-50">Редактирование профиля</h3>
    </div>
  );
};
