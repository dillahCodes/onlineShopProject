import { useState } from "react";
import { useSearchBar } from "../../context/search-bar-context";
import useToggle from "../../hooks/use-toggle";
import NavbarCartComponent from "./navbar-cart-component";
import NavbarHamburgerMenu from "./navbar-hamburger-component";
import { Header } from "antd/es/layout/layout";
import PropTypes from "prop-types";
import NavbarSearchComponent from "./navbar-search-component";
import { IoCloseOutline } from "react-icons/io5";
import BottomDrawer from "../ui-components/bottom-drawer";
import NavbarMenuListMobileComponent from "./navbar-menu-list-mobile-component";
import NavbarMobileSearchResultComponent from "./navbar-mobile-search-result-component";
import { useNavigate } from "react-router-dom";
import NavbarShareComponent from "./navbar-share-component";
import NavbarBackComponent from "./navbar-back-component";
import useSearchGetRecomendationProduct from "../../features/search/hooks/use-get-search-recomendation-product";

const NavbarMobileDetailsProductComponent = ({ className }) => {
  const [isFloatingVisible, setIsFloatingVisible] = useState(false);
  const [profileDrawerIsOpen, setProfileDrawerIsOpen] = useToggle();
  const { searchBarIsFocused, setSearchBarIsFocused } = useSearchBar();
  const [recomendedSearchResult] = useSearchGetRecomendationProduct();
  const navigate = useNavigate();

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
      <Header className={` w-full justify-between  px-3 py-6 shadow-sm  fixed z-40  flex items-center   ${className} `}>
        <NavbarBackComponent size={25} onClick={() => history.back()} />
        <section className="flex items-center gap-x-3">
          <NavbarSearchComponent size={25} onClick={handleDisplaySearchMobileOverlay} />
          <NavbarShareComponent onClick={() => navigate("/coming-soon")} size={25} />
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

      {/*  overlay when search bar mobile is focused */}
      {searchBarIsFocused && (
        <NavbarMobileSearchResultComponent recomendedSearch={recomendedSearchResult} onClick={closeSearchBarMobile} />
      )}
    </>
  );
};

export default NavbarMobileDetailsProductComponent;

NavbarMobileDetailsProductComponent.propTypes = {
  className: PropTypes.string,
};
