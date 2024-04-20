import { useCallback, useEffect, useState } from "react";
import productServices from "../services/product-services";

const useGetProductByCategory = (category) => {
  const [currentProductData, setCurrentProductData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const getProductByCategory = useCallback(async (category) => {
    try {
      const response = await productServices.searchProduct(category);
      setCurrentProductData(response.data.data);
    } catch (error) {
      setErrorMessage(error.response.data.error);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      category && getProductByCategory(category);
    };

    fetchData();
  }, [category, getProductByCategory]);

  return [currentProductData, errorMessage];
};

export default useGetProductByCategory;
