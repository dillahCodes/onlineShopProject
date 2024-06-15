import { useCallback, useEffect, useState } from "react";
import productServices from "../services/product-services";

const useGetProductByCategory = (category, limit) => {
  const [currentProductData, setCurrentProductData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
    [limit],
  );

  useEffect(() => {
    const fetchData = async () => await getProductByCategory(category);
    category && fetchData();
  }, [category, getProductByCategory]);

  return [currentProductData, errorMessage, isLoading];
};

export default useGetProductByCategory;
