import { Header } from "antd/es/layout/layout";
import NavbarTitle from "./navbar-title-component";
import NavbarUserAuth from "./navbar-user-auth-component";
import InputSearch from "../input/input-search";
import NavbarCartComponent from "./navbar-cart-component";
import NavbarRecomendedProductsComponent from "./navbar-recomended-poducts-component";
import NavbarShippingToComponent from "./navbar-shipping-to-component";
import recomendedSearchResult from "../navbar-fake-search-result-data";
import { useEffect, useRef, useState } from "react";
import { useSearchBar } from "../../context/search-bar-context/search-bar-context";
import NavbarDeskstopSearchResult from "./navbar-dekstop-search-result-component";

const NavbarDekstopComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [isFloatingVisible, setIsFloatingVisible] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const [resultsValue, setResultsValue] = useState(null);
  const { setSearchBarIsFocused, searchBarIsFocused } = useSearchBar();
  const floatingRef = useRef(null);

  // close floating when click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (floatingRef.current && !floatingRef.current.contains(event.target)) {
        setIsFloatingVisible(false);
        setSearchBarIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setSearchBarIsFocused]);

  // set results value to update placeholder
  useEffect(() => {
    setResultsValue(recomendedSearchResult?.[selectedItemIndex]?.title);
  }, [selectedItemIndex]);

  // toggle floating if input is clicked
  const toggleFloating = () => {
    setIsFloatingVisible(!isFloatingVisible);
    setSearchBarIsFocused(true);
  };

  // handle change
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // handle key down for search
  const handleKeyDown = (e) => {
    console.log(e.key);
    if (e.key === "ArrowUp" && selectedItemIndex > 0) {
      e.preventDefault();
      setSelectedItemIndex((prevIndex) => prevIndex - 1);
    } else if (e.key === "ArrowDown" && selectedItemIndex < recomendedSearchResult.length - 1) {
      e.preventDefault();
      setSelectedItemIndex((prevIndex) => prevIndex + 1);
    } else if (e.key === "Enter") {
      window.open(recomendedSearchResult[selectedItemIndex].to);
      setIsFloatingVisible(false);
    } else if (e.key === "Escape") {
      setIsFloatingVisible(false);
      setSearchBarIsFocused(false);
    }
  };

  console.log(searchBarIsFocused);

  return (
    <Header className="relative flex w-full py-5 text-2xl capitalize shadow-sm font-space-grotesk h-fit">
      {/* overlay when search bar is focused for desktop */}
      {searchBarIsFocused && (
        <div className="fixed top-[114px] left-0 z-[1] w-full h-full bg-black pointer-events-none opacity-40" />
      )}

      {/* navbar title */}
      <NavbarTitle className={"w-[20%] font-bold"} />
      <div className="flex flex-col items-center w-full gap-y-2">
        <div className="flex items-center w-full gap-x-10">
          {/* navbar search  */}
          <div className="relative w-full">
            <InputSearch
              className="rounded-lg "
              onClick={toggleFloating}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder={resultsValue || "search Online Shoping "}
            />

            {/* floating search result */}
            {isFloatingVisible && (
              <div ref={floatingRef} className="absolute z-10 w-full bg-white rounded-md">
                <NavbarDeskstopSearchResult
                  searchValue={inputValue}
                  resultsValue={recomendedSearchResult}
                  selectedItemIndex={selectedItemIndex}
                />
              </div>
            )}
          </div>

          <NavbarCartComponent size={45} className={"cursor-pointer hover:bg-gray-200  rounded-md"} />
          <div className="inline-block rounded-full  w-0.5 self-stretch bg-gray-300" />
          {/* navbar user auth  */}
          <NavbarUserAuth />
        </div>

        <div className="flex items-center justify-between w-full text-sm gap-x-5">
          {/* recomended products */}
          <NavbarRecomendedProductsComponent />

          {/* shipping to */}
          <NavbarShippingToComponent />
        </div>
      </div>
    </Header>
  );
};

export default NavbarDekstopComponent;
