import { Header } from "antd/es/layout/layout";
import InputSearch from "../input/input-search";
import NavbarMenuMobile from "./navbar-mobile-menu-component";
import { useSearchBar } from "../../context/search-bar-context/search-bar-context";
import NavbarMobileSearchResultComponent from "./navbar-mobile-search-result-component";
import recomendedSearchResult from "../navbar-fake-search-result-data";
import { isMobile } from "react-device-detect";
import { useState } from "react";
// import PropTypes from "prop-types";

const NavbarMobileComponent = () => {
  const [isFloatingVisible, setIsFloatingVisible] = useState(false);
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
      <Header className="flex items-center w-full px-3 py-6 shadow-sm gap-x-5">
        <InputSearch className={"w-full"} onClick={handleDisplaySearchMobileOverlay} />
        <NavbarMenuMobile />
      </Header>

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
