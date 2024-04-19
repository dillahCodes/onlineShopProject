import { Header } from "antd/es/layout/layout";
import InputSearch from "../input-components/input-search";
import NavbarMenuMobile from "./navbar-mobile-menu-component";
import { useSearchBar } from "../../context/search-bar-context";
import NavbarMobileSearchResultComponent from "./navbar-mobile-search-result-component";
import recomendedSearchResult from "../navbar-fake-search-result-data";
import { isMobile } from "react-device-detect";
import { useState } from "react";
import BottomDrawer from "../ui-components/bottom-drawer";
import useToggle from "../../hooks/use-toggle";
import { IoCloseOutline } from "react-icons/io5";
import NavbarMenuListMobileComponent from "./navbar-menu-list-mobile-component";
import PropTypes from "prop-types";

const NavbarMobileComponent = ({ className }) => {
  const [isFloatingVisible, setIsFloatingVisible] = useState(false);
  const [profileDrawerIsOpen, setProfileDrawerIsOpen] = useToggle();
  const { searchBarIsFocused, setSearchBarIsFocused } = useSearchBar();

  // handle display search mobile overlay
  const handleDisplaySearchMobileOverlay = () => {
    setIsFloatingVisible(!isFloatingVisible);
    setSearchBarIsFocused(!searchBarIsFocused);
  };

  // close search mobile
  const closeSearchBarMobile = () => {
    setSearchBarIsFocused(false);
    setIsFloatingVisible(false);
  };

  return (
    <>
      <Header
        className={`flex items-center w-full px-3 py-6 shadow-sm gap-x-5 fixed z-40    ${className} `}
      >
        <InputSearch className={"w-full"} onClick={handleDisplaySearchMobileOverlay} />
        <NavbarMenuMobile NavbarHamburgerMenuOnclick={setProfileDrawerIsOpen} />
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

      {/*  overlay when search bar mobile is focused */}
      {searchBarIsFocused && isMobile && (
        <NavbarMobileSearchResultComponent
          recomendedSearch={recomendedSearchResult}
          onClick={closeSearchBarMobile}
        />
      )}
    </>
  );
};

export default NavbarMobileComponent;

NavbarMobileComponent.propTypes = {
  className: PropTypes.string,
};
