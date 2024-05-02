import { IoCloseOutline } from "react-icons/io5";
import useToggle from "../../hooks/use-toggle";
import InputSearch from "../input-components/input-search";
import BottomDrawer from "../ui-components/bottom-drawer";
import NavbarCartComponent from "./navbar-cart-component";
import NavbarHamburgerMenu from "./navbar-hamburger-component";
import NavbarMailComponent from "./navbar-mail-component";
import NavbarNotificationComponent from "./navbar-notification-component";
import NavbarMenuListMobileComponent from "./navbar-menu-list-mobile-component";
import PropTypes from "prop-types";

const NavbarMobileReceiptPageComponent = ({ className }) => {
  const [profileDrawerIsOpen, setProfileDrawerIsOpen] = useToggle();

  return (
    <>
      <header className={`flex items-center w-full px-3 py-2 shadow-sm gap-x-3 fixed z-40    ${className} `}>
        <InputSearch placeholder="Cari Transaksi" />
        <NavbarMailComponent size={25} />
        <NavbarNotificationComponent size={25} />
        <NavbarCartComponent size={25} />
        <NavbarHamburgerMenu size={25} onClick={setProfileDrawerIsOpen} />
      </header>

      {/* menu overlay */}
      <BottomDrawer
        isOpen={profileDrawerIsOpen}
        onClose={setProfileDrawerIsOpen}
        drawerHeight={"100%"}
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

export default NavbarMobileReceiptPageComponent;

NavbarMobileReceiptPageComponent.propTypes = {
  className: PropTypes.string,
};
