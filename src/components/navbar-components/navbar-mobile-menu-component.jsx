import NavbarCartComponent from "./navbar-cart-component";
import NavbarMailComponent from "./navbar-mail-component";
import NavbarNotificationComponent from "./navbar-notification-component";
import NavbarHamburgerMenu from "./navbar-hamburger-component";
import PropTypes from "prop-types";
const NavbarMenuMobile = ({ NavbarHamburgerMenuOnclick }) => {
  return (
    <div className="flex items-center justify-between gap-x-5 ">
      <NavbarMailComponent size={25} />
      <NavbarNotificationComponent size={25} />
      <NavbarCartComponent size={25} />
      <NavbarHamburgerMenu size={25} onClick={NavbarHamburgerMenuOnclick} />
    </div>
  );
};

export default NavbarMenuMobile;

NavbarMenuMobile.propTypes = {
  NavbarHamburgerMenuOnclick: PropTypes.func.isRequired,
};
