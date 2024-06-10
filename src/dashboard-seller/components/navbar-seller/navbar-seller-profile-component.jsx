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
        "w-[340px] transition-all font-normal duration-300 font-space-grotesk absolute overflow-hidden rounded-b-md shadow-md -left-52 top-[49px]   z-[4] bg-white   text-base ",
        {
          "h-0 opacity-0 ": !isOpen,
          "h-[280px] opacity-100": isOpen,
        }
      )}
    >
      <div className="p-5">
        {/* profile section */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center ">
            <p className="font-bold font-space-grotesk">{user?.name}</p>
            <span className="flex items-center gap-x-3 pt-3 self-start text-sm">
              <span>
                <BsShop />
              </span>
              <span>{user?.username}</span>
            </span>
          </div>
          <Avatar size={64} src={user?.avatar} />
        </div>
        <div className="border my-5" />
        {/* back to tokopedia */}
        <div className="w-full  text-sm font-space-grotesk">
          <span>Kembali ke Tokopedia</span>
        </div>
        <div className="border my-5" />
        {/* account settings */}
        <div className="w-full flex flex-col gap-y-3">
          <div className="w-full flex items-center gap-x-3 font-bold font-space-grotesk text-base cursor-pointer" onClick={() => navigate("/user/settings")}>
            <span>
              <IoSettingsOutline />
            </span>
            <span className="capitalize">Pengaturan Akun</span>
          </div>
          <div className="w-full flex items-center gap-x-3 font-bold font-space-grotesk text-base">
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
