import { Settings } from "./Settings";
import { SettingsTitle } from "./SettingsTitle";

export const SettingsInfo = () => {
  return (
    <div className="flex justify-center flex-col">
        <SettingsTitle />
        <div className="pt-10">
            <Settings/>
        </div>
    </div>
  
);
};
