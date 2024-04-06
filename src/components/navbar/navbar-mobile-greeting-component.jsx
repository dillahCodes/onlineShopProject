import { Avatar } from "antd";
import NavbarShippingToComponent from "./navbar-shipping-to-component";
import { LuUser2 } from "react-icons/lu";
import ButtonComponent from "../ui/button-component";
import shopimage from "../../assets/shopimage.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

// this component render in mobile view
const NavbarMobileGreetingComponent = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const handleClose = () => setIsOpen(!isOpen);

  if (isOpen === false) return null;

  return (
    <div className="relative p-3 bg-gray-950 text-slate-100 font-space-grotesk">
      <div className="flex items-center justify-between w-full">
        <NavbarShippingToComponent />
        <IoClose className="text-lg font-bold cursor-pointer" onClick={handleClose} />
      </div>
      <div className="flex justify-between mt-5 gap-x-5">
        <div className="flex gap-x-5">
          <Avatar size={30} className="bg-gray-600" icon={<LuUser2 />} />
          <div className="flex flex-col">
            <p className="text-base font-bold">hai, user!</p>
            <p className="text-sm ">akses semua fitur, yuk~</p>
            <ButtonComponent
              onClick={() => navigate("/signup")}
              type="primary"
              size="small"
              className={"capitalize px-5 mt-3 border-white shadow-sm shadow-white"}
            >
              daftar
            </ButtonComponent>
          </div>
        </div>
        <img
          src={shopimage}
          alt="shopimage"
          className="bottom-0 w-[100px] right-0 drop-shadow-white"
          width={20}
        />
      </div>
    </div>
  );
};

export default NavbarMobileGreetingComponent;
