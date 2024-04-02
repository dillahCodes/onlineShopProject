import { useEffect, useState } from "react";
import NavigationCategoriesTabComponent from "./home-page-navigation-categories-tab";
import PropTypes from "prop-types";
import axios from "axios";
import CardProductDisplay from "../../components/ui/card-product-display";
import ButtonComponent from "../../components/ui/button-component";
import { useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect";

const HomePageMainCategoriesTab = () => {
  const [currCategory, setCurrCategory] = useState(null);
  const [productData, setProductData] = useState([]);
  const [limitValue, setLimitValue] = useState(6);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          import.meta.env.VITE_API_URL + `products?limit=${limitValue}`
        );
        setProductData(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (currCategory) fetchData();
  }, [currCategory, limitValue]);

  return (
    <>
      <NavigationCategoriesTabComponent currCategory={setCurrCategory} />
      <div className="w-[90%]  mx-auto   mt-5  flex flex-col items-center gap-y-10">
        {/* card product display */}
        <div
          className={`flex flex-wrap w-full gap-5 ${
            isMobile <= 1024 && "justify-center"
          } `}
        >
          {productData &&
            productData.map((item) => (
              <CardProductDisplay
                onClick={() => navigate(`/product/${item.product_id}`)}
                key={item.product_id}
                productTitle={item.name}
                price={item.price}
                rating={(
                  item.review.reduce((acc, curr) => acc + curr.rating, 0) /
                  item.review.length
                ).toFixed(1)}
                totalSold={item.total_sold}
                imageUrl={item.images[0].img_url}
                productOwnerName={item.owner.name}
              />
            ))}
        </div>

        <ButtonComponent
          className="px-10 "
          size="large"
          type="primary"
          onClick={() => setLimitValue(limitValue + 6)}
        >
          Muat Lebih Banyak
        </ButtonComponent>
      </div>
    </>
  );
};

export default HomePageMainCategoriesTab;

HomePageMainCategoriesTab.propTypes = {
  currCategory: PropTypes.func,
};
