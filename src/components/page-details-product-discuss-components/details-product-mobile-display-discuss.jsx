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
import DetailsProductMobileDiscussMapping from "./details-product-mobile-discuss-mapping";
import useItShouldLoginFirst from "../../features/auth/hooks/use-it-should-login-first";

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
  useItShouldLoginFirst();
  const { currentProduct } = useGetProductById();
  const [sortCategory, setSortCategory] = useState({
    date: discussSortCategories[0],
    other: [],
  });
  const [sortDrawerOpen, setSortDrawerOpen] = useToggle();
  const [createDiscussDrawerIsOpen, setCreateDiscussDrawerIsOpen] = useToggle();
  const [disscussionProductList] = useGetProductDiscussion(currentProduct?.product_id);

  let filteredDiscussionList = disscussionProductList?.filter((discussion) => {
    if (sortCategory.other.includes(discussion.discus_type[0].name)) {
      return discussion;
    }
  });

  const handleOpenAndCloseDrawer = () => setSortDrawerOpen();

  const handleSelectRadioChange = (e) => {
    setSortCategory({
      ...sortCategory,
      date: e.target.value,
    });

    setSortDrawerOpen();
  };

  const handleOpenCreateDIscussDrawer = () => setCreateDiscussDrawerIsOpen();

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
    <section className="w-full">
      {/* product info */}
      <DetailsProductMobileDiscussHeader
        image={currentProduct.images[0].img_url}
        productName={currentProduct.name}
        className={"p-2"}
      />

      <div className="w-full">
        {/* sort discuss section list */}
        <section className="flex overflow-x-scroll no-scrollbar py-2  gap-x-3 bg-white sticky z-50 top-[60px] ">
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
        <DetailsProductMobileDiscussMapping
          discussData={filteredDiscussionList?.length === 0 ? disscussionProductList : filteredDiscussionList}
          productOwnerId={currentProduct.owner.owner_id}
        />
      </div>

      {/* add discuss floating button  */}
      <ButtonComponent
        onClick={handleOpenCreateDIscussDrawer}
        className=" w-[50px] h-[50px] fixed bottom-5 bg-[#00AA5B] text-white right-5  text-lg rounded-full flex items-center justify-center"
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
