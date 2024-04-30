// shoop for you image mock
import shhop1 from "../../assets/home-page/shop-mock-for-you.webp";
import shop1product from "../../assets/home-page/shop-mock-product-for-you.webp";
import shopbadge1 from "../../assets/shop-badge1.png";
import { useNavigate } from "react-router-dom";
// component
import CardMerchantForYouComponent from "../ui-components/card-merchant-for-you-component";

const merchantMockDataList = Array.from({ length: 10 }, () => ({
  productHeaderImage: shop1product,
  shopProfileImage: shhop1,
  shopName: "JINISO.ID",
  rating: Math.floor(Math.random() * 5) + 1,
  shopBadge: shopbadge1,
}));

const HomePageMobileRecomendedMerchantForYou = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full ">
      {/* title */}
      <div className="w-full p-4 pb-3 flex justify-between items-center">
        <div>
          <h1 className="font-bold font-space-grotesk text-lg capitalize">
            toko pilihan untukmu
          </h1>
        </div>
      </div>
      {/* shop for you */}
      <div className="pl-4 w-full h-[233px] relative overflow-x-auto no-scrollbar">
        <div className="absolute flex gap-x-2 ">
          {merchantMockDataList.map((shopData, index) => {
            return (
              <CardMerchantForYouComponent
                key={index}
                shop={shopData}
                onClick={() => navigate(`/coming-soon`)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePageMobileRecomendedMerchantForYou;
