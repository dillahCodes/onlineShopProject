import { useState } from "react";
import { useSearchBar } from "../../context/search-bar-context";
import useToggle from "../../hooks/use-toggle";
import NavbarCartComponent from "./navbar-cart-component";
import NavbarHamburgerMenu from "./navbar-hamburger-component";
import PropTypes from "prop-types";
import { IoCloseOutline } from "react-icons/io5";
import BottomDrawer from "../ui-components/bottom-drawer";
import NavbarMenuListMobileComponent from "./navbar-menu-list-mobile-component";
import NavbarMobileSearchResultComponent from "./navbar-mobile-search-result-component";
import NavbarBackComponent from "./navbar-back-component";
import useSearchGetRecomendationProduct from "../../features/search/hooks/use-get-search-recomendation-product";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import NavbarFakeSearchbarComponent from "./navbar-fake-searchbar-component";

const NavbarMobileSearchResultPageComponent = ({ className }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchBarValue, setSearchBarValue] = useState(searchParams.get("q") || "");
  const [isFloatingVisible, setIsFloatingVisible] = useState(false);
  const [profileDrawerIsOpen, setProfileDrawerIsOpen] = useToggle();
  const { searchBarIsFocused, setSearchBarIsFocused } = useSearchBar();
  const [recomendedSearchResult] = useSearchGetRecomendationProduct();

  useEffect(() => {
    setSearchBarValue(searchParams.get("q") || "");
  }, [searchParams]);

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

  // handle sumbmit
  const handleOnSubmitSearchBar = (e) => {
    if (e.key === "Enter" && searchBarValue) {
      setSearchParams({ q: searchBarValue, st: "product" });
      closeSearchBarMobile();
    }
  };

  return (
    <>
      <header
        className={` w-full justify-between  px-3 py-2 shadow-sm  fixed z-40 gap-x-3  flex items-center   ${className} `}
      >
        <NavbarBackComponent size={25} onClick={() => history.back()} />
        <section className="flex items-center gap-x-3 w-full">
          <NavbarFakeSearchbarComponent
            className={"w-full bg-white rounded-md  "}
            fakeSearchbarText={searchBarValue}
            onClick={handleDisplaySearchMobileOverlay}
          />
          <NavbarCartComponent size={25} />
          <NavbarHamburgerMenu size={25} onClick={setProfileDrawerIsOpen} />
        </section>
      </header>

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

export default NavbarMobileSearchResultPageComponent;

NavbarMobileSearchResultPageComponent.propTypes = {
  className: PropTypes.string,
};
