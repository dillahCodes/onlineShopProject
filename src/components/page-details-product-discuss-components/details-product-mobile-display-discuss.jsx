import { useState } from "react";
import useGetProductById from "../../features/product/hooks/use-get-product-by-id";
import ButtonComponent from "../ui-components/button-component";
import BottomDrawer from "../ui-components/bottom-drawer";
import { IoAddOutline, IoCloseOutline } from "react-icons/io5";
import { Radio } from "antd";
import "./style/details-product-mobile-display-discuss.css";
import DetailsProductMobileDiscussHeader from "./detail-product-mobile-discuss-header";
import DetailsProductMobileButtonSortDiscuss from "./details-product-mobile-button-sort-discuss";
import DetailsProductMobileCreateDiscuss from "./details-product-mobile-create-discuss";
import useToggle from "../../hooks/use-toggle";
import useGetProductDiscussion from "../../features/details-product-discussion/hooks/use-get-product-discussion";

const discussSortCategories = [
  "terbaru",
  "paling relevan",
  "detail produk",
  "pengiriman",
  "variant",
  "stok",
  "lainnya",
];

const DetailsProductMobileDisplayDiscuss = () => {
  const { currentProduct } = useGetProductById();
  const [sortCategory, setSortCategory] = useState({
    date: discussSortCategories[0],
    other: [],
  });
  const [sortDrawerOpen, setSortDrawerOpen] = useToggle();
  const [createDiscussDrawerIsOpen, setCreateDiscussDrawerIsOpen] = useToggle();
  const [disscussionProductList] = useGetProductDiscussion(currentProduct?.product_id);

  const handleOpenAndCloseDrawer = () => {
    setSortDrawerOpen();
  };

  const handleSelectRadioChange = (e) => {
    setSortCategory({
      ...sortCategory,
      date: e.target.value,
    });

    setSortDrawerOpen();
  };

  const handleOpenCreateDIscussDrawer = () => {
    setCreateDiscussDrawerIsOpen();
  };

  const setSelectedOtherSortCategory = (category) => {
    setSortCategory((prev) => {
      if (!prev.other.includes(category)) {
        return {
          ...prev,
          other: [...prev.other, category],
        };
      } else {
        return {
          ...prev,
          other: prev.other.filter((cat) => cat !== category),
        };
      }
    });
  };

  const handleResetAllButtonSelected = () => {
    setSortCategory({
      date: discussSortCategories[0],
      other: [],
    });
  };

  if (!currentProduct) return null;

  return (
    <section className="w-full p-3">
      {/* product info */}
      <DetailsProductMobileDiscussHeader image={currentProduct.images[0].img_url} productName={currentProduct.name} />

      {/* sort discuss section list */}
      <section className="w-full py-3 border-b flex gap-x-2">
        {/* reset all button */}
        {(sortCategory.other.length > 0 || sortCategory.date !== discussSortCategories[0]) && (
          <ButtonComponent className={"text-gray-500"} onClick={handleResetAllButtonSelected}>
            <IoCloseOutline size={20} />
          </ButtonComponent>
        )}
        {/* other sort */}
        <DetailsProductMobileButtonSortDiscuss
          discussSortCategories={discussSortCategories}
          sortCategory={sortCategory}
          isOpen={sortDrawerOpen}
          setSelectedOtherSortCategory={setSelectedOtherSortCategory}
          handleOpenAndCloseDrawer={handleOpenAndCloseDrawer}
        />
      </section>

      {/* discuss list display */}
      <section className="w-full p-3 px-1">
        <section className="w-full border-b">
          <div className="w-full flex items-center gap-x-2">
            <div className="w-6 h-6 border border-black rounded-full">{/* <img src="" alt="" /> */}</div>
            <span className="font-bold font-space-grotesk">user123</span>
            <span className="h-1 w-1 bg-gray-400 rounded-full"></span>
            <span className="font-space-grotesk text-gray-400 rounded-full">jun 2023</span>
          </div>
          <section className="w-full">
            <p>Lorem ipsum?</p>
          </section>
          {/* reply section */}
          <section className="w-full border-l-[2px] pl-4 my-3">
            <div className="w-full flex items-center gap-x-2">
              <div className="w-6 h-6 border border-black rounded-full">{/* <img src="" alt="" /> */}</div>
              <span className="font-bold bg-[#C9FDE0] text-[#00AA5B] px-1 py-0.5 rounded-md font-space-grotesk">
                penjual
              </span>
              <span className="h-1 w-1 bg-gray-400 rounded-full"></span>
              <span className="font-space-grotesk text-gray-400 rounded-full">jun 2023</span>
            </div>
            <section className="w-full">
              <p>Lorem ipsum dolor!!</p>
            </section>
          </section>
        </section>
      </section>

      {/* add discuss floating button  */}
      <ButtonComponent
        onClick={handleOpenCreateDIscussDrawer}
        className=" w-[50px] h-[50px] absolute bottom-5 bg-[#00AA5B] text-white right-5  text-lg rounded-full flex items-center justify-center"
      >
        <IoAddOutline />
      </ButtonComponent>

      {/* create discuss drawer */}
      <DetailsProductMobileCreateDiscuss
        productImage={currentProduct.images[0].img_url}
        ProductName={currentProduct.name}
        isDrawerOpen={createDiscussDrawerIsOpen}
        handleOpenAndCloseDrawer={handleOpenCreateDIscussDrawer}
      />

      {/* discuss sort by date bottom drawer */}
      <BottomDrawer
        id="discuss-sort-bottom-drawer"
        isOpen={sortDrawerOpen}
        className={`rounded-t-lg "}`}
        drawerHeight={"auto"}
        onClose={handleOpenAndCloseDrawer}
        drawerTitle={
          <section className="w-full flex items-center">
            <div className="text-gray-400 text-4xl" onClick={handleOpenAndCloseDrawer}>
              <IoCloseOutline />
            </div>
            <span className="capitalize text-lg font-bold">urutkan berdasarkan</span>
          </section>
        }
      >
        <Radio.Group onChange={handleSelectRadioChange} value={sortCategory.date} className="p-3 flex flex-col gap-y-2">
          <Radio
            className="py-3 border-b flex gap-x-5 text-base capitalize font-bold font-space-grotesk"
            value={discussSortCategories[0]}
          >
            pertanyaan terbaru
          </Radio>
          <Radio
            className="py-3 flex gap-x-5 capitalize text-base font-bold font-space-grotesk"
            value={discussSortCategories[1]}
          >
            pertanyaan paling relevan
          </Radio>
        </Radio.Group>
      </BottomDrawer>
    </section>
  );
};

export default DetailsProductMobileDisplayDiscuss;
