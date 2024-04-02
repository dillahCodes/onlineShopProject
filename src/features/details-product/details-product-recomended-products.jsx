import axios from "axios";
import { useEffect, useState } from "react";
import CardProductDisplay from "../../components/ui/card-product-display";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonComponent from "../../components/ui/button-component";
import PropTypes from "prop-types";

const DetailsProductRecomendedProducts = ({ currentProductId }) => {
  const [productData, setProductData] = useState([]);
  const [limitValue, setLimitValue] = useState(6);
  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(import.meta.env.VITE_API_URL + `products?limit=${limitValue}`);
        setProductData(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [limitValue]);

  const handleOnclick = (item) => {
    if (currentProductId !== item.product_id) {
      navigate(`/product/${item.product_id}`);
      window.location.reload();
    }
  };

  return (
    <div className="flex flex-col w-full gap-y-5 ">
      <h1 className="text-2xl font-bold capitalize font-space-grotesk">produk serupa untukmu</h1>
      <div className="flex flex-wrap w-full gap-5">
        {productData &&
          productData.map((item) => (
            <CardProductDisplay
              onClick={() => handleOnclick(item)}
              key={item.product_id}
              productTitle={item.name}
              price={item.price}
              rating={(
                item.review.reduce((acc, curr) => acc + curr.rating, 0) / item.review.length
              ).toFixed(1)}
              totalSold={item.total_sold}
              imageUrl={item.images[0].img_url}
              productOwnerName={item.owner.name}
            />
          ))}
      </div>

      <ButtonComponent
        className="px-10 mx-auto "
        size="large"
        type="primary"
        onClick={() => setLimitValue(limitValue + 6)}
      >
        Muat Lebih Banyak
      </ButtonComponent>
    </div>
  );
};

export default DetailsProductRecomendedProducts;

DetailsProductRecomendedProducts.propTypes = {
  currentProductId: PropTypes.string,
};
