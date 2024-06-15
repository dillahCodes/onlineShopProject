import { useCallback } from "react";
import { useState } from "react";
import productServices from "../services/product-services";
import { useAuth } from "../../../context/user-auth-context";
import { useEffect } from "react";

const useGetProductFromYourSearch = (fetchLimit) => {
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const { history_search } = user || {};

  const getProductFromYourSearch = useCallback(async () => {
    if (!history_search) return setCurrentProduct([]);

    const filteredCategory = history_search
      .filter(
        (item, index, self) =>
          self.findIndex(
            (currentItem) => currentItem.category === item.category,
          ) === index,
      )
      .map((uniqueItem) => uniqueItem.category);
    const fetchProductLimit = fetchLimit;

    try {
      setIsLoading(true);
      const productPromises = filteredCategory.map((category) =>
        productServices.searchProductWithLimit(category, fetchProductLimit),
      );
      const productResponses = await Promise.all(productPromises);
      const products = productResponses
        .map((response) => response.data.data)
        .flat();

      //   sort by random
      products.sort(() => Math.random() - 0.5);

      setCurrentProduct(products);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }, [fetchLimit, history_search]);

  useEffect(() => {
    getProductFromYourSearch();
  }, [getProductFromYourSearch]);

  return [currentProduct, isLoading];
};

export default useGetProductFromYourSearch;
