import { Avatar } from "antd";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useAuth } from "../../../context/user-auth-context";
import truncateString from "../../../utils/truncate-string";
import NavbarSellerNotificationComponent from "./navbar-seller-notification-component";
import { useState } from "react";
import { useSellerOverlay } from "../../context/seller-overlay-context";
import NavbarSellerProfileComponent from "./navbar-seller-profile-component";

const NavbarSellerInfoProfileComponent = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [isProfileFocus, setIsProfileFocus] = useState(false);
  const { setIsOperlayOpen, isOperlayOpen } = useSellerOverlay();
  const { user } = useAuth();

  const handleSetIsFocus = () => {
    setIsOperlayOpen(true);
    setIsFocus(true);
  };
  const handleSetIsNotFocus = () => {
    setIsOperlayOpen(false);
    setIsFocus(false);
  };

  const handleSetIsProfileFocus = () => {
    setIsOperlayOpen(true);
    setIsProfileFocus(true);
  };
  const handleSetIsProfileNotFocus = () => {
    setIsOperlayOpen(false);
    setIsProfileFocus(false);
  };

  return (
    <div className="min-w-[200px] flex items-center justify-evenly relative">
      <span className="text-2xl relative p-2 hover:bg-gray-100 transition-all duration-300 rounded-md" onMouseEnter={handleSetIsFocus} onMouseLeave={handleSetIsNotFocus}>
        <IoIosNotificationsOutline />
        {/* notificarion pop up */}
        <NavbarSellerNotificationComponent isOpen={isFocus && isOperlayOpen} onMouseEnter={handleSetIsFocus} onMouseLeave={handleSetIsNotFocus} />
      </span>
      <div className="inline-block h-[25px] w-[1.5px]  bg-gray-200 rounded-b-full rounded-t-full" />
      <div
        className="text-2xl relative p-2 hover:bg-gray-100 transition-all duration-300 rounded-md"
        onMouseEnter={handleSetIsProfileFocus}
        onMouseLeave={handleSetIsProfileNotFocus}
        // onMouseEnter={handleSetIsFocus}
        // onMouseLeave={handleSetIsNotFocus}
      >
        <div className="w-full flex items-center gap-x-1 ">
          <Avatar icon={<img src={user?.avatar} alt="avatar" />} size={25} />
          <span className="text-sm truncate font-medium font-space-grotesk">{truncateString(user?.name, 10)}</span>
        </div>
        {/* notificarion pop up */}
        <NavbarSellerProfileComponent isOpen={isProfileFocus && isOperlayOpen} />
      </div>
    </div>
  );
};

export default NavbarSellerInfoProfileComponent;
