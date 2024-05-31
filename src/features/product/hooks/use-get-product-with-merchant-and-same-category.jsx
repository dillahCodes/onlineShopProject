import { useCallback, useEffect, useRef, useState } from "react";
import authServices from "../../auth/services/auth-services";
import productServices from "../services/product-services";

const useGetProductWithMerchantAndSameCategory = (ownerId, category) => {
  const [currentProductData, setCurrentProductData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const renderCount = useRef(0); // renderCount for componentDidMount and componentDidUpdate

  // console.log(ownerId, category);

  const getProductWithMerchantAndSameCategory = useCallback(async () => {
    try {
      setIsLoading(true);
      if (!ownerId || !category) return;

      const userId = await authServices.getUserById(ownerId);
      const dataProductIdWithSameCategory = userId.data.data;
      // .products.filter((product) => product.category === category).map((product) => product.product_id);

      // console.log(dataProductIdWithSameCategory);

      // const getProductWithSameCategoryById = await Promise.all(
      //   dataProductIdWithSameCategory.map(async (productId) => {
      //     const response = await productServices.getProductById(productId);
      //     return response.data.data;
      //   })
      // );

      // setCurrentProductData(getProductWithSameCategoryById);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }, [ownerId, category]);

  useEffect(() => {
    const fetchData = async () => await getProductWithMerchantAndSameCategory();

    ownerId && category && renderCount.current > 0 && fetchData();

    return () => (renderCount.current += 1);
  }, [getProductWithMerchantAndSameCategory, ownerId, category]);

  return [currentProductData, isLoading];
};

export default useGetProductWithMerchantAndSameCategory;
