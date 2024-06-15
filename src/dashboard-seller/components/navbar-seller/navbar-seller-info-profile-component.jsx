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
    <div className="relative flex min-w-[200px] items-center justify-evenly">
      <span
        className="relative rounded-md p-2 text-2xl transition-all duration-300 hover:bg-gray-100"
        onMouseEnter={handleSetIsFocus}
        onMouseLeave={handleSetIsNotFocus}
      >
        <IoIosNotificationsOutline />
        {/* notificarion pop up */}
        <NavbarSellerNotificationComponent
          isOpen={isFocus && isOperlayOpen}
          onMouseEnter={handleSetIsFocus}
          onMouseLeave={handleSetIsNotFocus}
        />
      </span>
      <div className="inline-block h-[25px] w-[1.5px] rounded-b-full rounded-t-full bg-gray-200" />
      <div
        className="relative rounded-md p-2 text-2xl transition-all duration-300 hover:bg-gray-100"
        onMouseEnter={handleSetIsProfileFocus}
        onMouseLeave={handleSetIsProfileNotFocus}
        // onMouseEnter={handleSetIsFocus}
        // onMouseLeave={handleSetIsNotFocus}
      >
        <div className="flex w-full items-center gap-x-1">
          <Avatar
            icon={
              <img
                src={
                  user?.avatar === "default_avatar.png"
                    ? "/default_avatar.png"
                    : user?.avatar
                }
                alt="avatar"
              />
            }
            size={25}
          />
          <span className="truncate font-space-grotesk text-sm font-medium">
            {truncateString(user?.name, 10)}
          </span>
        </div>
        {/* notificarion pop up */}
        <NavbarSellerProfileComponent
          isOpen={isProfileFocus && isOperlayOpen}
        />
      </div>
    </div>
  );
};

export default NavbarSellerInfoProfileComponent;
