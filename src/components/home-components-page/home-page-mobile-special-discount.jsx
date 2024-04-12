import { IoIosArrowForward } from "react-icons/io";
import CountDownComponent from "../ui-components/countdown-component";
import "./style/home-page-special-discount.css";
import { WiTime3 } from "react-icons/wi";

// image prodcut list
import product1 from "../../assets/home-page/product1.webp";
import product2 from "../../assets/home-page/product2.webp";
import product3 from "../../assets/home-page/product3.webp";
import discountBanner from "../../assets/home-page/discount-banner.webp";
import MobileDiscountProductCardComponent from "../ui-components/mobile-discount-product-card-component";
import { useNavigate } from "react-router-dom";

// mock data
const images = [product1, product2, product3];
const productList = Array.from({ length: 10 }, (_, index) => ({
  price: Math.floor(Math.random() * 500000) + 50000, // Harga acak
  discount: Math.floor(Math.random() * 70) + 10, // Diskon acak antara 10 dan 70
  image: images[index % images.length], // Memilih gambar dari array gambar dengan indeks sirkular
  stock: Math.floor(Math.random() * 100) + 1,
}));
const deadline = Date.now() + 1000 * 60 * 60 * 24; // 24 hours from now

const HomePageMobileSpecialDiscount = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      {/* title */}
      <div className="w-full p-4 pb-3 flex justify-between items-center">
        <div>
          <h1 className="font-bold font-space-grotesk text-lg">kejar diskon special</h1>
          <div className="flex items-center gap-x-3 mt-2 ">
            <span className="capitalize">berakhir dalam</span>
            <div
              id="countdown"
              className="flex items-center gap-x-1 bg-[rgb(224,_41,_84)] text-white font-bold px-2 rounded-full"
            >
              <div className="text-lg">
                <WiTime3 />
              </div>
              <CountDownComponent deadline={deadline} />
            </div>
          </div>
        </div>
        <div className="p-2 border rounded-full text-lg">
          <IoIosArrowForward />
        </div>
      </div>

      {/* product discount  */}
      <div className="w-full h-[270px] relative z-[1]">
        {/* background */}
        <div
          className="absolute  inset-0 p-5 z-[-1] flex items-center gap-x-3 overflow-x-auto no-scrollbar overflow-y-hidden "
          style={{ backgroundImage: "linear-gradient(rgb(69, 126, 173), rgb(127, 178, 211))" }}
        >
          {/* discount banner */}
          <div className={`h-[237px] min-w-[140px] max-w-[140px] absolute`}>
            <img src={discountBanner} alt="" className="w-full h-full object-cover" />
          </div>
          {/* product list */}
          {productList.map((product, index) =>
            index !== 0 ? (
              index !== productList.length - 1 ? (
                <MobileDiscountProductCardComponent
                  key={index}
                  product={product}
                  onClick={() => navigate(`/coming-soon`)}
                />
              ) : (
                // last index
                <div
                  key={index}
                  onClick={() => navigate(`/coming-soon`)}
                  className={`h-[237px] min-w-[140px] p-2 max-w-[140px] relative  rounded-md flex flex-col items-center justify-center`}
                  style={{
                    backgroundImage:
                      'url("https://assets.tokopedia.net/assets-tokopedia-lite/v2/phoenix/kratos/ee8955f8.svg")',
                    backgroundPosition: "top right",
                    backgroundRepeat: "no-repeat",
                    // backgroundPosition: "right",
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                  }}
                >
                  <span className="text-white font-bold capitalize text-base">
                    lihat produk lainnya
                  </span>
                  <span className="w-full absolute flex items-center bottom-2 left-2 gap-x-6   font-space-grotesk capitalize text-white font-bold">
                    <span>lihat semua</span>
                    <span>
                      <IoIosArrowForward />
                    </span>
                  </span>
                  {/* Tambahkan konten untuk index terakhir di sini */}
                </div>
              )
            ) : (
              // first index
              <div key={index} className={`h-[237px] min-w-[140px] max-w-[140px]  rounded-md`}>
                <div className="w-full h-[132px]"></div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePageMobileSpecialDiscount;
