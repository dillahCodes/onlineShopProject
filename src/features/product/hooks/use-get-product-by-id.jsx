import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productServices from "../services/product-services";

const useGetProductById = () => {
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { productId } = useParams();
  const navigate = useNavigate();

  const getProductById = useCallback(
    async (productId) => {
      if (!productId) return;

      setIsLoading(true);

      try {
        const response = await productServices.getProductById(productId);
        setCurrentProduct(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
        setIsError(true);
        if (error.response?.data?.statusCode === 404) {
          navigate("/coming-soon", { replace: true }); // change to 404 page later when it's ready
        }
      }
    },
    [navigate],
  );

  useEffect(() => {
    const fetchData = async () => await getProductById(productId);

    productId && fetchData();
  }, [getProductById, productId]);

  return {
    currentProduct,
    isLoading,
    isError,
  };
};

export default useGetProductById;
