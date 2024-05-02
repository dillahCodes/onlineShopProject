import homeIcon from "../../assets/home-page/home-icon.svg";
import homefeedIcon from "../../assets/home-page/home-feed-icon.svg";
import homeFeedActiveIcon from "../../assets/home-page/home-feed-active-icon.png";
import homeOfficialStoreIcon from "../../assets/home-page/home-official-store-icon.svg";
import homeOfficialStoreActiveIcon from "../../assets/home-page/home-official-store-active-icon.svg";
import homeWishListIcon from "../../assets/home-page/home-favorite-icon.svg";
import homeWishListActiveIcon from "../../assets/home-page/home-wishlist-active-icon.png";
import homeReceiptIcon from "../../assets/home-page/home-receipt-icon.png";
import homeActiveReceiptIcon from "../../assets/home-page/home-receipt-active-icon.png";
import ButtonComponent from "../ui-components/button-component";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const bottomNavHomeList = [
  {
    title: "home",
    icon: homeIcon,
    activeIcon: homeIcon,
    to: "/",
  },
  {
    title: "feed",
    icon: homefeedIcon,
    activeIcon: homeFeedActiveIcon,
    to: "/feed",
  },
  {
    title: "official store",
    icon: homeOfficialStoreIcon,
    activeIcon: homeOfficialStoreActiveIcon,
    to: "/discovery",
  },
  {
    title: "wishlist",
    icon: homeWishListIcon,
    activeIcon: homeWishListActiveIcon,
    to: "/wishlist",
  },
  {
    title: "transaksi",
    icon: homeReceiptIcon,
    activeIcon: homeActiveReceiptIcon,
    to: "/order-list",
  },
];

const BottombarMobileNavHomePage = ({ active }) => {
  const navigate = useNavigate();
  return (
    <section className="w-full fixed z-50 bg-white p-2.5 px-5 box-border  flex items-center justify-between bottom-0  max-w-[500px]">
      {bottomNavHomeList.map((item, index) => (
        <ButtonComponent
          onClick={() => navigate(item.to)}
          key={index}
          className={"p-0  rounded-none m-0 border-none  shadow-none min-h-[40px]   flex flex-col "}
        >
          <img
            src={active === item.title ? item.activeIcon : item.icon}
            alt={item.title}
            width={active === item.title ? 28 : 20}
            className="mx-auto"
          />
          <span
            className={`text-xs mt-auto capitalize font-space-grotesk ${
              active === item.title ? "text-black" : "text-slate-400"
            }`}
          >
            {item.title}
          </span>
        </ButtonComponent>
      ))}
    </section>
  );
};

export default BottombarMobileNavHomePage;

BottombarMobileNavHomePage.propTypes = {
  active: PropTypes.oneOf(bottomNavHomeList.map((item) => item.title)),
};
