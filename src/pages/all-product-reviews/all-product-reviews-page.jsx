import { isMobile } from "react-device-detect";
import AllProductReviewsMobile from "./all-product-reviews-mobile";
import AllProductReviewsDesktop from "./all-product-reviews-desktop";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const AllProductReviewsPage = () => {
  const [currentProductData, setCurrentProductData] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`http://localhost:8080/v1/products/${productId}`)
        .then(function (response) {
          setCurrentProductData(response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    if (productId) fetchData();
  }, [productId]);

  return (
    <>
      {isMobile ? (
        <AllProductReviewsMobile currentProductData={currentProductData} />
      ) : (
        <AllProductReviewsDesktop />
      )}
    </>
  );
};

export default AllProductReviewsPage;
