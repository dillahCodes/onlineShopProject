import { Layout } from "antd";
import { useSellerOverlay } from "../../context/seller-overlay-context";
import NavbarSeller from "../navbar-seller/navbar-seller";
import NavbarOverlay from "../ui/navbar-overlay";
import SellerAddProductTitlePage from "./seller-add-product-title-page";
import SellerAddProductNameField from "./seller-add-product-name-field";
import SellerAddProductCategory from "./seller-add-product-category-field";
import SellerAddProductEtalaseField from "./seller-add-product-etalase-field";
import SellerAddProductImagesField from "./seller-add-product-images-field";
import SellerAddProductConditionField from "./seller-add-product-condition-field";
import SellerAddProductDescriptionField from "./seller-add-product-description-field";
import ButtonComponent from "../../../components/ui-components/button-component";

const SellerAddProduct = () => {
  const { isOperlayOpen } = useSellerOverlay();

  return (
    <Layout className="h-screen w-full">
      <NavbarSeller />
      <Layout>
        {isOperlayOpen && <NavbarOverlay />}
        <Layout className="overflow-x-auto bg-white p-3 py-6 no-scrollbar">
          <SellerAddProductTitlePage />
          <section className="mx-auto mt-5 w-[1168px] rounded-md border p-[32px] shadow-md">
            {/* product information section */}
            <h1 className="mb-[32px] font-space-grotesk text-lg font-bold capitalize">
              informasi produk
            </h1>
            <div className="flex w-full flex-col gap-y-8">
              <SellerAddProductNameField />
              <SellerAddProductCategory />
              <SellerAddProductEtalaseField />
            </div>
          </section>
          <section className="mx-auto mt-5 w-[1168px] rounded-md border p-[32px] shadow-md">
            {/* product information section */}
            <h1 className="mb-[32px] font-space-grotesk text-lg font-bold capitalize">
              Detail Produk
            </h1>
            <div className="flex w-full flex-col gap-y-8">
              <SellerAddProductImagesField />
              <SellerAddProductConditionField />
              <SellerAddProductDescriptionField />
            </div>
          </section>
          <section className="mx-auto mt-5 flex w-[1168px] rounded-md">
            <div className="ml-auto flex items-center gap-x-2">
              <ButtonComponent className="px-10 font-space-grotesk font-bold">
                Batal
              </ButtonComponent>
              <ButtonComponent
                type="primary"
                className="px-10 font-space-grotesk font-bold text-white"
              >
                Simpan
              </ButtonComponent>
            </div>
          </section>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default SellerAddProduct;
