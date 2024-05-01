import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import ButtonComponent from "../ui-components/button-component";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import useGetProductFromUserSearch from "../../features/search/hooks/use-get-products-from-user-search";
import ScreenLoader from "../ui-components/screen-loader";
import TwoRowsAndTwoColumnsDisplayProduct from "../ui-components/two-rows-and-two-columns-display-product";
import ResultSearchAdvanceFilterSearch from "./result-search-advance-filter-search";
import { useSearchBar } from "../../context/search-bar-context";

const navList = ["product", "shop"];
const ResultSearchMobilePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchStatus, setSearchStatus] = useState("product");
  const { searchResult, isLoading, isDataNotFound } = useGetProductFromUserSearch(
    searchParams.get("q"),
    searchStatus,
    10
  );
  const { setSearchBarIsFocused } = useSearchBar();
  const location = useLocation();
  const urlSearchParams = new URLSearchParams(location.search);
  const keyword = urlSearchParams.get("q");
  const status = urlSearchParams.get("st");

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  // handle change keyword
  const handleOpenSearchBarToChangeKeyword = () => setSearchBarIsFocused(true);

  //division of data into 2 columns
  const halfLength = Math.ceil(searchResult?.length / 2);
  const leftColumnData = searchResult?.slice(0, halfLength);
  const rightColumnData = searchResult?.slice(halfLength);

  const navChangeStatusHandler = (status) => {
    if (status === "product") {
      setSearchStatus("product");
      setSearchParams((params) => ({ ...params, q: keyword, st: status }));
    } else {
      setSearchStatus("shop");
      setSearchParams((params) => ({ ...params, q: keyword, st: status }));
    }
  };

  if (!searchResult)
    return (
      <section className="w-full h-full flex items-center justify-center">
        <ScreenLoader />
      </section>
    );

  return (
    <div className="w-full ">
      {/* nav */}
      <section className="w-full flex  relative ">
        {navList.map((item, index) => (
          <div className="w-full bg-white" key={index}>
            <ButtonComponent
              onClick={() => navChangeStatusHandler(item)}
              key={index}
              className={` m-0 shadow-none border-none text-sm rounded-none p-2.5 ${
                searchStatus === item ? "text-[#00AA5B]" : "text-[#6D7588]"
              } w-full font-space-grotesk capitalize font-bold h-fit`}
            >
              <span className=" block truncate">{item === "product" ? "Produk" : "Toko"}</span>
            </ButtonComponent>
            <LineAnimation isClicked={searchStatus === item} />
          </div>
        ))}
      </section>
      <section className="w-full">
        <ResultSearchAdvanceFilterSearch />
        {isDataNotFound && searchStatus === "product" ? (
          <>
            <section className="w-full justify-center flex p-4 gap-x-2 bg-white items-center">
              <img
                src="https://images.tokopedia.net/img/tokonow/empty-result.png"
                alt="produk tidak ditemukan"
                className="max-w-[120px] object-contain"
              />
              <div className="w-full">
                <h1 className="font-bold capitalize  text-base">Oops, barangnya nggak ketemu</h1>
                <span className="text-sm">coba cari kata kunci lain atau cek produk rekomendasi di bawah</span>
              </div>
            </section>
            <section className="w-full mb-2 p-3 bg-white">
              <ButtonComponent
                onClick={handleOpenSearchBarToChangeKeyword}
                className={
                  "w-full border-none   bg-[#00AA5B] text-white font-bold capitalize font-space-grotesk rounded-md"
                }
              >
                ganti kata kunci
              </ButtonComponent>
            </section>
            <section className="w-full bg-white p-3">
              <h1 className="font-bold capitalize text-lg font-space-grotesk">rekomendasi untukmu</h1>
              <TwoRowsAndTwoColumnsDisplayProduct
                leftDisplayData={leftColumnData}
                rightDisplayData={rightColumnData}
                isLoading={(isLoading || !searchResult) && !isDataNotFound}
              />
            </section>
          </>
        ) : null}
        {status === "product" && !isDataNotFound ? (
          // product display
          <TwoRowsAndTwoColumnsDisplayProduct
            leftDisplayData={leftColumnData}
            rightDisplayData={rightColumnData}
            isLoading={(isLoading || !searchResult) && !isDataNotFound}
          />
        ) : null}
      </section>
    </div>
  );
};

export default ResultSearchMobilePage;

const LineAnimation = ({ isClicked }) => {
  const [animationWidth, setAnimationWidth] = useState("0%");

  useEffect(() => {
    setAnimationWidth(isClicked ? `100%` : "0%");
  }, [isClicked]);

  return (
    <div className="relative w-full h-1 ">
      <motion.div
        initial={{ width: animationWidth }}
        animate={{ width: animationWidth }}
        transition={{ duration: 0.2, ease: "linear" }}
        className="h-full bg-[#00AA5B] rounded-full mx-auto "
      />
    </div>
  );
};

LineAnimation.propTypes = {
  isClicked: PropTypes.bool.isRequired,
};
