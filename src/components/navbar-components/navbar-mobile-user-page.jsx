import { IoCloseOutline } from "react-icons/io5";
import NavbarBackComponent from "./navbar-back-component";
import NavbarHamburgerMenu from "./navbar-hamburger-component";
import NavbarMenuListMobileComponent from "./navbar-menu-list-mobile-component";
import BottomDrawer from "../ui-components/bottom-drawer";
import PropTypes from "prop-types";
import useToggle from "../../hooks/use-toggle";
import { useNavigate } from "react-router-dom";

const NavbarUserPage = ({ className }) => {
  const [profileDrawerIsOpen, setProfileDrawerIsOpen] = useToggle();
  const navigate = useNavigate();

  return (
    <>
      <section
        className={` w-full justify-between  px-3 py-3 shadow-sm  fixed z-40  flex items-center bg-white   ${className} `}
      >
        <section className="flex items-center gap-x-3  w-full">
          <div className="flex items-center mr-auto gap-x-5">
            <NavbarBackComponent size={25} onClick={() => navigate(-1)} />
            <h1 className="capitalize font-bold">akun saya</h1>
          </div>
          <NavbarHamburgerMenu size={25} onClick={setProfileDrawerIsOpen} />
        </section>
      </section>

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

export default NavbarUserPage;

NavbarUserPage.propTypes = {
  className: PropTypes.string,
};
