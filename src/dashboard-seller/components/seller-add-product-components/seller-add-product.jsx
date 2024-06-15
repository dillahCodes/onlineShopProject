import { Layout } from "antd";
import { useSellerOverlay } from "../../context/seller-overlay-context";
import NavbarSeller from "../navbar-seller/navbar-seller";
import NavbarOverlay from "../ui/navbar-overlay";
import SellerAddProductTitlePage from "./seller-add-product-title-page";
import SellerAddProductNameField from "./seller-add-product-name-field";
import SellerAddProductCategory from "./seller-add-product-category-field";
import SellerAddProductImagesField from "./seller-add-product-images-field";
import SellerAddProductConditionField from "./seller-add-product-condition-field";
import SellerAddProductDescriptionField from "./seller-add-product-description-field";
import ButtonComponent from "../../../components/ui-components/button-component";
import SellerAddProductVariantField from "./seller-add-product-variant-filed";
import SellerAddProductQtyField from "./seller-add-product-qty-field";
import SellerAddProductPriceField from "./seller-add-product-price-field";
import { useSellerAddProductData } from "../../context/seller-add-product-value-data-context";
import useAddProduct from "../../../features/product/hooks/use-add-product";
import SellerAddProcutBrand from "./seller-add-product-brand-field";
import { useAuth } from "../../../context/user-auth-context";

const SellerAddProduct = () => {
  const { addProductData } = useSellerAddProductData();
  const { addProduct } = useAddProduct();
  const { user } = useAuth();
  const { isOperlayOpen } = useSellerOverlay();

  const handleAddProduct = () => addProduct(addProductData, user?.user_id);

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
              <SellerAddProcutBrand />
              <SellerAddProductCategory />
              <SellerAddProductQtyField />
              <SellerAddProductPriceField />
              {/* <SellerAddProductEtalaseField /> */}
            </div>
          </section>
          <section className="mx-auto mt-5 w-[1168px] rounded-md border p-[32px] shadow-md">
            {/* product information section */}
            <h1 className="mb-[32px] font-space-grotesk text-lg font-bold capitalize">
              Detail Produk
            </h1>
            <div className="flex w-full flex-col gap-y-8">
              <SellerAddProductDescriptionField />
              <SellerAddProductConditionField />
              <SellerAddProductImagesField />
            </div>
          </section>
          <section className="mx-auto mt-5 w-[1168px] rounded-md border p-[32px] shadow-md">
            {/* product variant section */}
            <SellerAddProductVariantField />
          </section>
          <section className="mx-auto mt-5 flex w-[1168px] rounded-md">
            <div className="ml-auto flex items-center gap-x-2">
              <ButtonComponent className="px-10 font-space-grotesk font-bold">
                Batal
              </ButtonComponent>
              <ButtonComponent
                type="primary"
                onClick={handleAddProduct}
                className="px-10 font-space-grotesk font-bold text-white"
              >
                Tambahkan Produk
              </ButtonComponent>
            </div>
          </section>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default SellerAddProduct;
