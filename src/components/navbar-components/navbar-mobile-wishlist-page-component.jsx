import { Header } from "antd/es/layout/layout";
import PropTypes from "prop-types";
import NavbarHamburgerMenu from "./navbar-hamburger-component";
import NavbarCartComponent from "./navbar-cart-component";
import NavbarNotificationComponent from "./navbar-notification-component";
import BottomDrawer from "../ui-components/bottom-drawer";
import { IoCloseOutline } from "react-icons/io5";
import NavbarMenuListMobileComponent from "./navbar-menu-list-mobile-component";
import useToggle from "../../hooks/use-toggle";

const NavbarMobileWishlistPageComponent = ({ className }) => {
  const [profileDrawerIsOpen, setProfileDrawerIsOpen] = useToggle();

  return (
    <>
      <Header className={` w-full justify-between  px-3 py-6 shadow-sm  fixed z-40  flex items-center   ${className} `}>
        <h1 className="text-base font-bold font-space-grotesk">wishlist</h1>
        <section className="flex items-center gap-x-3">
          <NavbarNotificationComponent size={25} />
          <NavbarCartComponent size={25} />
          <NavbarHamburgerMenu size={25} onClick={setProfileDrawerIsOpen} />
        </section>
      </Header>

      {/* menu overlay */}
      <BottomDrawer
        isOpen={profileDrawerIsOpen}
        onClose={setProfileDrawerIsOpen}
        drawerHeight={"100vh"}
        id="mobileMenuDrawer"
        drawerTitle={
          <div className="flex items-center w-full gap-x-5">
            <span className="text-3xl" onClick={setProfileDrawerIsOpen}>
              <IoCloseOutline />
            </span>
            <h1 className="font-bold capitalize font-space-grotesk">Menu Utama</h1>
          </div>
        }
      >
        {/* navbar menu list */}
        <NavbarMenuListMobileComponent />
      </BottomDrawer>
    </>
  );
};

export default NavbarMobileWishlistPageComponent;

NavbarMobileWishlistPageComponent.propTypes = {
  className: PropTypes.string,
};
