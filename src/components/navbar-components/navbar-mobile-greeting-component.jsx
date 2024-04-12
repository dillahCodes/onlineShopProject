import { Avatar } from "antd";
import NavbarShippingToComponent from "./navbar-shipping-to-component";
import ButtonComponent from "../ui-components/button-component";
import { useNavigate } from "react-router-dom";
import userImage from "../../assets/home-page/user-greeting-image.png";

// this component render in mobile view
const NavbarMobileGreetingComponent = () => {
  const navigate = useNavigate();

  return (
    <div
      className={` p-3 pt-[70px] bg-[url('./assets/home-page/greeting.png')] text-slate-100 font-space-grotesk`}
    >
      <div className="flex items-center justify-between w-full text-black border">
        <NavbarShippingToComponent />
      </div>
      <div className="flex justify-between gap-x-5">
        <div className="flex items-center w-full gap-x-3">
          <div>
            <Avatar
              size={35}
              className="bg-gray-600 border-none"
              icon={
                <>
                  <img src={userImage} alt="userImage" />
                </>
              }
            />
          </div>
          <div className="text-black">
            <p className="text-base font-bold capitalize">hai, user!</p>
            <p className="text-sm ">akses semua fitur, yuk~</p>
          </div>
          <ButtonComponent
            onClick={() => navigate("/signup")}
            type="primary"
            className={"capitalize px-5 ml-auto mt-3 "}
          >
            daftar
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobileGreetingComponent;
