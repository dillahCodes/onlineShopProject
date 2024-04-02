import NavbarCartComponent from "./navbar-cart-component";
import NavbarMailComponent from "./navbar-mail-component";
import NavbarNotificationComponent from "./navbar-notification-component";
import NavbarHamburgerMenu from "./navbar-hamburger-component";
const NavbarMenuMobile = () => {
  return (
    <div className="flex items-center justify-between gap-x-5 ">
      <NavbarMailComponent size={25} />
      <NavbarNotificationComponent size={25} />
      <NavbarCartComponent size={25} />
      <NavbarHamburgerMenu size={25} />
    </div>
  );
};

export default NavbarMenuMobile;
