import { FC } from "react";

interface NotificationProps {
  type: string;
  icon: React.ReactChild
  message: string;
  notification:string,
}

export const NotificationAuth: FC<NotificationProps> = ({
  type,
  icon,
  message,
  notification
}) => {
  return (
    <div 
     style = {{background: notification === 'failed' ? 'red' : 'green'}}
     className="fixed bottom-[20px] right-[20px] w-[250px] text-white py-[15px] p-[10px] rounded-md shadow-md z-50">
      <h3 className="pb-1">{type}</h3>
      <div className="flex gap-2 items-center">
        {icon}
        <p>{message}</p>
      </div>
    </div>
  );
};
