import { useState } from "react";
import { useSearchBar } from "../../context/search-bar-context";
import useToggle from "../../hooks/use-toggle";
import NavbarCartComponent from "./navbar-cart-component";
import NavbarHamburgerMenu from "./navbar-hamburger-component";
import { Header } from "antd/es/layout/layout";
import PropTypes from "prop-types";
import { IoCloseOutline } from "react-icons/io5";
import BottomDrawer from "../ui-components/bottom-drawer";
import NavbarMenuListMobileComponent from "./navbar-menu-list-mobile-component";
import NavbarMobileSearchResultComponent from "./navbar-mobile-search-result-component";
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import NavbarShareComponent from "./navbar-share-component";
import NavbarBackComponent from "./navbar-back-component";
import useSearchGetRecomendationProduct from "../../features/search/hooks/use-get-search-recomendation-product";
import NavbarSearchComponent from "./navbar-search-component";

const NavbarMobileDetailsProductPageComponent = ({ className }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchBarValue, setSearchBarValue] = useState(searchParams.get("q") || "");
  const [isFloatingVisible, setIsFloatingVisible] = useState(false);
  const [profileDrawerIsOpen, setProfileDrawerIsOpen] = useToggle();
  const { searchBarIsFocused, setSearchBarIsFocused } = useSearchBar();
  const [recomendedSearchResult] = useSearchGetRecomendationProduct();
  const location = useLocation();
  const navigate = useNavigate();
  const { productId } = useParams();

  const handleDisplaySearchMobileOverlay = () => {
    setIsFloatingVisible(!isFloatingVisible);
    setSearchBarIsFocused(!searchBarIsFocused);
  };

  // close search mobile
  const closeSearchBarMobile = () => {
    setSearchBarIsFocused(false);
    setIsFloatingVisible(false);
  };

  const handleOnchangeSearchBar = (e) => {
    setSearchBarValue(e.target.value);
  };

  // handle sumbmit
  const handleOnSubmitSearchBar = (e) => {
    if (e.key === "Enter" && searchBarValue && location.pathname === `/product/${productId}`) {
      setSearchParams({ q: searchBarValue, st: "product" });
      navigate(`/product/search?q=${encodeURIComponent(searchBarValue)}&st=product`, { replace: true });
      closeSearchBarMobile();
    }
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

export default NavbarMobileDetailsProductPageComponent;

NavbarMobileDetailsProductPageComponent.propTypes = {
  className: PropTypes.string,
};
