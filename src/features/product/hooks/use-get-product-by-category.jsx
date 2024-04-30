import { useCallback, useEffect, useRef, useState } from "react";
import productServices from "../services/product-services";

const useGetProductByCategory = (category, limit) => {
  const [currentProductData, setCurrentProductData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const renderCount = useRef(0); // renderCount for componentDidMount and componentDidUpdate

  const getProductByCategory = useCallback(
    async (category) => {
      try {
        setIsLoading(true);

        const response = limit
          ? await productServices.searchProductWithLimit(category, limit)
          : await productServices.searchProduct(category);
        setCurrentProductData(response.data.data);

        setIsLoading(false);
      } catch (error) {
        setErrorMessage(error.response.data.error);
        setIsLoading(false);
      }
    },
    [limit]
  );

  useEffect(() => {
    const fetchData = async () => await getProductByCategory(category);

    if (category && renderCount.current > 0) fetchData();

    return () => (renderCount.current += 1);
  }, [category, getProductByCategory]);

  return [currentProductData, errorMessage, isLoading];
};

export default useGetProductByCategory;
