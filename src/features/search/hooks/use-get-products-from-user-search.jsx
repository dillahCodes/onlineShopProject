import { useCallback, useEffect, useRef, useState } from "react";
import productServices from "../../product/services/product-services";
import shuffleArray from "../../../utils/shuffle-array";

const useGetProductFromUserSearch = (searchValue, typeOfSearch, limitFetchData) => {
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDataNotFound, setIsDataNotFound] = useState(false);
  const renderCount = useRef(0);

  const getProductFromUserSearch = useCallback(async () => {
    if (!searchValue) return;
    try {
      setIsLoading(true);
      const respose = await productServices.searchProductWithLimit(searchValue, limitFetchData);
      const products = respose.data.data;

      const shuffledProducts = shuffleArray(products);
      setSearchResult(shuffledProducts);
      setIsDataNotFound(false);
      if (products.length === 0) {
        setIsDataNotFound(true);
        const response = await productServices.getAllProductsWithLimit(limitFetchData);
        const products = response.data.data;
        const shuffledProducts = shuffleArray(products);
        setSearchResult(shuffledProducts);
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }, [searchValue, limitFetchData]);

  const getUserFromSearch = useCallback(async () => {
    if (!searchValue) return;

    alert("API BELUM SIAP");

    // try {
    //   const response = await authServices.(searchValue);
    // } catch (error) {
    //   console.error(error);
    // }
  }, [searchValue]);

  useEffect(() => {
    if (typeOfSearch === "product" && renderCount.current > 0) getProductFromUserSearch();
    if (typeOfSearch === "shop" && renderCount.current > 0) getUserFromSearch();

    return () => (renderCount.current += 1);
  }, [getProductFromUserSearch, getUserFromSearch, typeOfSearch]);

  return { searchResult, isLoading, isDataNotFound };
};

export default useGetProductFromUserSearch;
