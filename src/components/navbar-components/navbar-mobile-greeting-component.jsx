import { Avatar } from "antd";
import NavbarShippingToComponent from "./navbar-shipping-to-component";
import ButtonComponent from "../ui-components/button-component";
import { useNavigate } from "react-router-dom";
import userImage from "../../assets/home-page/user-greeting-image.png";
import { useAuth } from "../../context/user-auth-context";
import formatCurrencyToIDR from "../../utils/format-currency";

// this component render in mobile view
const NavbarMobileGreetingComponent = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div
      className={` p-3 pt-[70px] bg-[url('./assets/home-page/greeting.png')] text-slate-100 font-space-grotesk`}
    >
      <div className="flex items-center justify-between w-full text-black border">
        <NavbarShippingToComponent />
      </div>
      {user ? (
        <div className="w-full  mt-3 overflow-x-auto no-scrollbar">
          <div className=" min-w-[500px] flex">
            {navbarGreetingUserMenu.map((item, index) => (
              <div
                className={`w-full h-[48px] flex gap-x-2 items-center`}
                key={index}
                onClick={() => navigate(item.to)}
              >
                <div className="w-9">
                  <img src={item.image} alt={item.details} className="object-fill" />
                </div>
                <div className="w-full">
                  <span className="font-bold text-black capitalize font-space-grotesk">
                    {item.title}
                  </span>
                  <span
                    className={`block text-xs ${
                      index !== 1 ? "text-[#6D7588]" : "text-green-700 font-bold"
                    }`}
                  >
                    {item.details}
                  </span>
                </div>

                {index !== navbarGreetingUserMenu.length - 1 && (
                  <div className="w-0.5 h-full bg-gray-300 rounded-t-full rounded-b-full mr-2 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default NavbarMobileGreetingComponent;

const navbarGreetingUserMenu = [
  {
    title: formatCurrencyToIDR(0),
    details: "Top-Up GoPay",
    image: "https://images.tokopedia.net/img/toppay/gopay-120x120.png",
    to: "/gopay",
  },
  {
    title: "coba 1 bulan",
    details: "langganan, yuk!",
    image: "https://images.tokopedia.net/img/plus/homepage/balancewidget/march2023/plus.png",
    to: "/gotoplus",
  },
  {
    title: "silver",
    details: "8 kupon baru",
    image: "https://images.tokopedia.net/img/HThbdi/2023/03/17/rewards_silver_filled.png",
    to: "/rewards",
  },
];
