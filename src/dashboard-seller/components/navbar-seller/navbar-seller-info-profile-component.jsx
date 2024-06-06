import { Avatar } from "antd";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useAuth } from "../../../context/user-auth-context";
import truncateString from "../../../utils/truncate-string";

const NavbarSellerInfoProfileComponent = () => {
  const { user } = useAuth();
  return (
    <div className="min-w-[200px] flex items-center justify-evenly truncate">
      <span className="text-2xl">
        <IoIosNotificationsOutline />
      </span>
      <div className="inline-block h-[25px] w-[1.5px]  bg-gray-200 rounded-b-full rounded-t-full" />
      <div className="flex items-center truncate gap-x-2 hover:bg-gray-100 p-1.5 cursor-pointer rounded-md transition-all duration-200">
        <span>
          <Avatar icon={<img src={user?.avatar} alt="avatar" />} size={25} />
        </span>
        <span className="text-sm truncate font-medium font-space-grotesk">{truncateString(user?.name, 10)}</span>
      </div>
    </div>
  );
};

export default NavbarSellerInfoProfileComponent;
