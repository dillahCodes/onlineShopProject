import { useCallback, useEffect, useRef, useState } from "react";
import { useAuth } from "../../../context/user-auth-context";
import productServices from "../services/product-services";
import shuffleArray from "../../../utils/shuffle-array";

export const homePageNavigationFeed = [
  { name: "for you" },
  { name: "beli lokal" },
  { name: "web cams" },
  { name: "make up wajah" },
  { name: "makanan jadi" },
  { name: "mirip yang kamu cek" },
];

const useGetProductHomePageMobileRecomendationFeed = (categoryFeed, fetchLimit) => {
  const [currentProductData, setCurrentProductData] = useState(null);
  const [isRequiredLogin, setIsRequiredLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const { history_search } = user || {};
  const renderCount = useRef(0); // renderCount for componentDidMount and componentDidUpdate

  //   caegory feeds
  const categoryName = categoryFeed.replace(/\s/g, "").toLowerCase();
  const categoryFeedNames = homePageNavigationFeed.map((item) => item.name.toLowerCase().replace(/\s/g, ""));
  const isForYou = categoryName === categoryFeedNames[0];
  const isBeliLokal = categoryName === categoryFeedNames[1];
  const isWebCams = categoryName === categoryFeedNames[2];
  const isMakeUpWajah = categoryName === categoryFeedNames[3];
  const isMakananJadi = categoryName === categoryFeedNames[4];
  const isMiripYangKamuCek = categoryName === categoryFeedNames[5];

  //   foryou algorithm
  const getCategoryFeedForYou = useCallback(async () => {
    if (!history_search || !user) {
      setCurrentProductData([]);

      try {
        setIsLoading(true);
        const products = await productServices.getAllProductsWithLimit(fetchLimit);
        setCurrentProductData(products.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
      return;
    }

    const filteredCategory = history_search
      .filter((item, index, self) => self.findIndex((currentItem) => currentItem.category === item.category) === index)
      .map((uniqueItem) => uniqueItem.category);
    const fetchProductLimit = fetchLimit;

    try {
      setIsLoading(true);
      const productPromises = filteredCategory.map((category) =>
        productServices.searchProductWithLimit(category, fetchProductLimit)
      );
      const productResponses = await Promise.all(productPromises);
      const products = productResponses.map((response) => response.data.data).flat();

      // shuffle array
      const shuffledProducts = shuffleArray(products);

      setCurrentProductData(shuffledProducts);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }, [history_search, fetchLimit, user]);

  //   beli lokal algorithm
  const getProductBeliLokal = useCallback(async () => {
    if (!history_search || !user) {
      setCurrentProductData([]);

      try {
        setIsLoading(true);
        const products = await productServices.getAllProductsWithLimit(fetchLimit);
        setCurrentProductData(products.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
      return;
    }

    const minIndex = 0;
    const maxIndex = history_search.length - 1;
    const selectRandomIndex = Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
    const selectedCategory = history_search[selectRandomIndex].category;
    try {
      setIsLoading(true);
      const response = fetchLimit
        ? await productServices.searchProductWithLimit(selectedCategory, fetchLimit)
        : await productServices.searchProduct(selectedCategory);

      const product = response?.data.data;

      // shuffle array
      const shuffledProducts = shuffleArray(product);

      setCurrentProductData(shuffledProducts);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }, [fetchLimit, history_search, user]);

  // mirip yang kamu cek algorithm
  const getProductSmilarCategory = useCallback(async () => {
    if (!history_search || !user) {
      setCurrentProductData([]);

      try {
        setIsLoading(true);
        const products = await productServices.getAllProductsWithLimit(fetchLimit);
        setCurrentProductData(products.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
      return;
    }

    const categoryByCurrentUserSearch = history_search[history_search.length - 1].category;

    try {
      setIsLoading(true);

      const response = fetchLimit
        ? await productServices.searchProductWithLimit(categoryByCurrentUserSearch, fetchLimit)
        : await productServices.searchProduct(categoryByCurrentUserSearch);

      const product = response?.data.data;

      // shuffle array
      const shuffledProducts = shuffleArray(product);

      setCurrentProductData(shuffledProducts);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }, [fetchLimit, history_search, user]);

  //   another home page feed category algorithm
  const getProductByCategory = useCallback(
    async (category) => {
      setIsRequiredLogin(false);

      try {
        setIsLoading(true);

        const response = fetchLimit
          ? await productServices.searchProductWithLimit(category, fetchLimit)
          : await productServices.searchProduct(category);

        const product = response?.data.data;

        // shuffle array
        const shuffledProducts = shuffleArray(product);

        setCurrentProductData(shuffledProducts);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    },
    [fetchLimit]
  );

  useEffect(() => {
    if (isForYou && renderCount.current > 0) getCategoryFeedForYou();
    if (isBeliLokal && renderCount.current > 0) getProductBeliLokal();
    if (isMiripYangKamuCek && renderCount.current > 0) getProductSmilarCategory();
    if ((isWebCams || isMakeUpWajah || isMakananJadi) && renderCount.current > 0) getProductByCategory(categoryFeed);

    return () => (renderCount.current += 1);
  }, [
    isForYou,
    isMiripYangKamuCek,
    isBeliLokal,
    isWebCams,
    isMakeUpWajah,
    isMakananJadi,
    getCategoryFeedForYou,
    getProductSmilarCategory,
    getProductByCategory,
    getProductBeliLokal,
    categoryFeed,
  ]);

  return [currentProductData, isLoading, isRequiredLogin];
};

export default useGetProductHomePageMobileRecomendationFeed;
