import { Avatar } from "antd";
import classNames from "classnames";
import PropTypes from "prop-types";
import { BsShop } from "react-icons/bs";
import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";
import { useAuth } from "../../../context/user-auth-context";
import { useNavigate } from "react-router-dom";

const NavbarSellerProfileComponent = ({ isOpen }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div
      className={classNames(
        "absolute -left-52 top-[49px] z-[4] w-[340px] overflow-hidden rounded-b-md bg-white font-space-grotesk text-base font-normal shadow-md transition-all duration-300",
        {
          "h-0 opacity-0": !isOpen,
          "h-[280px] opacity-100": isOpen,
        },
      )}
    >
      <div className="p-5">
        {/* profile section */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center">
            <p className="font-space-grotesk font-bold">{user?.name}</p>
            <span className="flex items-center gap-x-3 self-start pt-3 text-sm">
              <span>
                <BsShop />
              </span>
              <span>{user?.username}</span>
            </span>
          </div>
          <Avatar
            size={64}
            src={
              user?.avatar === "default_avatar.png"
                ? "/default_avatar.png"
                : user?.avatar
            }
          />
        </div>
        <div className="my-5 border" />
        {/* back to tokopedia */}
        <div className="w-full font-space-grotesk text-sm">
          <span>Kembali ke Tokopedia</span>
        </div>
        <div className="my-5 border" />
        {/* account settings */}
        <div className="flex w-full flex-col gap-y-3">
          <div
            className="flex w-full cursor-pointer items-center gap-x-3 font-space-grotesk text-base font-bold"
            onClick={() => navigate("/user/settings")}
          >
            <span>
              <IoSettingsOutline />
            </span>
            <span className="capitalize">Pengaturan Akun</span>
          </div>
          <div className="flex w-full items-center gap-x-3 font-space-grotesk text-base font-bold">
            <span>
              <IoLogOutOutline />
            </span>
            <span className="capitalize">Keluar</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSellerProfileComponent;

NavbarSellerProfileComponent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
