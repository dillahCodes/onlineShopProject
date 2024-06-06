import { Layout } from "antd";
import NavbarSeller from "../navbar-seller/navbar-seller";
import SidebarSeller from "../sidebar-seller/sidebar-seller";
import homeSellerBgImage from "../../../assets/seller-dashboard/dashboard-background.png";
import SellerHomePageCardProductView from "./seller-home-page-card-product-view";
import SellerHomePageCardCartProduct from "./seller-home-page-card-cart-product";
import SellerVerificationCard from "./seller-verificarion-card";
import SellerHomePageGuideCard from "./seller-home-page-guide-card";
import SellerHomePageSellerNewsCard from "./seller-home-page-seller-news-card";
import SellerHomePageRecomendedInfoCard from "./seller-home-page-recomended-info-card";

const SellerHomePageComponent = () => {
  return (
    <Layout className="w-full h-screen">
      <NavbarSeller />
      <Layout className="flex">
        <SidebarSeller />
        <Layout
          className="p-3 py-6  overflow-x-auto no-scrollbar"
          style={{ backgroundColor: "#F0F3F7", backgroundImage: `url(${homeSellerBgImage})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
        >
          <section className="flex gap-x-3  min-w-[900px] ">
            <aside className="w-full border-r h-fit pr-3">
              <div className="w-full">
                <h1 className="text-[19px] font-bold font-space-grotesk">Selamat Datang Di Tokopedia</h1>
                <p className="text-[#6D7588] font-space-grotesk">Ikuti rekomendasi dan misi untuk raih penjualan pertama.</p>
              </div>

              <div className="w-full flex gap-x-3 mt-3">
                <SellerHomePageCardProductView />
                <SellerHomePageCardCartProduct />
              </div>
              <SellerVerificationCard />
            </aside>

            <aside className="w-full max-w-[390px]">
              <div className="w-full">
                <h1 className="text-[19px] font-bold font-space-grotesk">Keperluan Jualan Untukmu</h1>
                <p className="text-[#6D7588] font-space-grotesk">Cek semuanya untuk tingkatkan performa toko</p>
              </div>

              <div className="w-full mt-3 flex flex-col gap-y-3">
                <SellerHomePageGuideCard />
                <SellerHomePageSellerNewsCard />
                <SellerHomePageRecomendedInfoCard />
              </div>
            </aside>
          </section>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default SellerHomePageComponent;
