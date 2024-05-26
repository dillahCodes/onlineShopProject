import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import AllProductReviewsMobile from "../components/page-all-product-reviews-components/all-product-reviews-mobile";

const AllProductReviewsPage = () => {
  const [currentProductData, setCurrentProductData] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(import.meta.env.VITE_API_URL + `products/${productId}`)
        .then(function (response) {
          setCurrentProductData(response.data.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    };

    if (productId) fetchData();
  }, [productId]);

  return <AllProductReviewsMobile currentProductData={currentProductData} />;
};

export default AllProductReviewsPage;
