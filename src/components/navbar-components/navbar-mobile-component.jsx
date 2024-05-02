import { useSearchBar } from "../../context/search-bar-context";
import NavbarMobileSearchResultComponent from "./navbar-mobile-search-result-component";
import { useState } from "react";
import BottomDrawer from "../ui-components/bottom-drawer";
import useToggle from "../../hooks/use-toggle";
import { IoCloseOutline } from "react-icons/io5";
import NavbarMenuListMobileComponent from "./navbar-menu-list-mobile-component";
import PropTypes from "prop-types";
import NavbarMailComponent from "./navbar-mail-component";
import NavbarNotificationComponent from "./navbar-notification-component";
import NavbarCartComponent from "./navbar-cart-component";
import NavbarHamburgerMenu from "./navbar-hamburger-component";
import useSearchGetRecomendationProduct from "../../features/search/hooks/use-get-search-recomendation-product";
import { useNavigate, useSearchParams } from "react-router-dom";
import NavbarFakeSearchbarComponent from "./navbar-fake-searchbar-component";

const NavbarMobileComponent = ({ className }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFloatingVisible, setIsFloatingVisible] = useToggle(false);
  const [profileDrawerIsOpen, setProfileDrawerIsOpen] = useToggle();
  const { searchBarIsFocused, setSearchBarIsFocused } = useSearchBar();
  const [searchBarValue, setSearchBarValue] = useState(searchParams.get("q") || "");
  const [recomendedSearchResult] = useSearchGetRecomendationProduct();
  const navigate = useNavigate();

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

  // handle onchange search bar
  const handleOnchangeSearchBar = (e) => {
    setSearchBarValue(e.target.value);
  };

  // handle submit search bar
  const handleOnSubmitSearchBar = (e) => {
    if (e.key === "Enter" && searchBarValue) {
      setSearchParams({ q: searchBarValue, st: "product" });
      navigate(`/product/search?q=${encodeURIComponent(searchBarValue)}&st=product`, { replace: true });
      closeSearchBarMobile();
    }
  };

  return (
    <>
      <header className={`flex items-center w-full px-3 py-2 shadow-sm gap-x-4 fixed z-40    ${className} `}>
        <NavbarFakeSearchbarComponent
          className={"w-full bg-white rounded-md capitalize text-gray-400"}
          fakeSearchbarText={"cari di tokopedia"}
          onClick={handleDisplaySearchMobileOverlay}
        />
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

      {/*  overlay when search bar mobile is focused */}
      {searchBarIsFocused && (
        <NavbarMobileSearchResultComponent
          onChange={handleOnchangeSearchBar}
          recomendedSearch={recomendedSearchResult}
          onClick={closeSearchBarMobile}
          onKeyDown={handleOnSubmitSearchBar}
        />
      )}
    </>
  );
};

export default NavbarMobileComponent;

NavbarMobileComponent.propTypes = {
  className: PropTypes.string,
};
