import { IoCloseOutline } from "react-icons/io5";
import BottomDrawer from "../ui-components/bottom-drawer";
import DetailsProductMobileDiscussHeader from "./detail-product-mobile-discuss-header";
import "./style/details-product-mobile-create-discuss.css";
import PropTypes from "prop-types";
import ButtonComponent from "../ui-components/button-component";
import { useEffect, useState } from "react";
import { Input } from "antd";
import { useParams } from "react-router-dom";
import useAddProductDiscussion from "../../features/details-product-discussion/hooks/use-add-product-discussion";
const { TextArea } = Input;

const discussCategory = ["pengiriman", "detail produk", "variant", "stok", "lainnya"];

const DetailsProductMobileCreateDiscuss = ({ isDrawerOpen, handleOpenAndCloseDrawer, productImage, ProductName }) => {
  const [selectedCategoryDiscuss, setSelectedCategoryDiscuss] = useState(null);
  const [discussContent, setDiscussContent] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [textCount, setTextCount] = useState(0);
  const { productId } = useParams();
  const { addProductDiscussion } = useAddProductDiscussion(discussContent, selectedCategoryDiscuss, productId);
  const maxTextCount = 200;
  const minTextCount = 5;

  // reset state
  useEffect(() => {
    if (!isDrawerOpen) {
      setSelectedCategoryDiscuss(null);
      discussContent && setDiscussContent("");
    }
  }, [isDrawerOpen, discussContent]);

  const handleInputChange = (e) => {
    const text = e.target.value;
    const textLength = text.length;

    setDiscussContent(text);
    setTextCount(textLength);

    if (textLength > maxTextCount) {
      setErrorMessage(`oops, maksimal ${maxTextCount} karakter`);
    } else if (textLength < minTextCount) {
      setErrorMessage(`oops, minimal ${minTextCount} karakter`);
    } else {
      setErrorMessage("");
    }
  };

  const handleSubmit = () => {
    if (!discussContent) return setErrorMessage("oops, silahkan isi pertanyaan terlebih dahulu");
    if (textCount >= maxTextCount) return setErrorMessage(`oops, maksimal ${maxTextCount} karakter`);
    addProductDiscussion().then(() => {
      handleOpenAndCloseDrawer();
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  };

  return (
    <BottomDrawer
      isOpen={isDrawerOpen}
      id="create-discuss-bottom-drawer"
      className={`rounded-t-lg`}
      drawerHeight={"100%"}
      footer={
        <section className={`w-full`}>
          <p className="text-xs font-space-grotesk text-gray-400 m-1 mb-2">
            Diskusi adalah tempat kamu bertanya dan kasih jawaban seputar produk. Tetap sopan dan jangan lupa&nbsp;
            <a className="font-bold text-[#00AA5B]">baca S&amp;K</a>
          </p>

          <ButtonComponent
            disabled={!discussContent || discussContent.length < minTextCount}
            onClick={handleSubmit}
            type="primary"
            className="w-full"
          >
            Kirim
          </ButtonComponent>
        </section>
      }
      onClose={handleOpenAndCloseDrawer}
      drawerTitle={
        <section className="w-full flex items-center">
          <div className="text-gray-400 text-4xl" onClick={handleOpenAndCloseDrawer}>
            <IoCloseOutline />
          </div>
          <span className="capitalize text-lg font-bold">kirim pertanyaan</span>
        </section>
      }
    >
      <section className="w-full p-3 relative h-full ">
        <DetailsProductMobileDiscussHeader
          className={"border-b-2 pb-3"}
          image={productImage}
          productName={ProductName}
        />
        <div className="w-full my-4 flex flex-col">
          <h1 className="font-bold capitalize font-space-grotesk text-base">pilih topik</h1>
          <div className="w-full flex gap-3 flex-wrap my-3 ">
            {/* discuss category */}
            {discussCategory.map((category, index) => (
              <ButtonComponent
                onClick={() => setSelectedCategoryDiscuss(category)}
                className={`rounded-xl capitalize ${
                  selectedCategoryDiscuss === category && "text-[#00AA5B] border-[#00AA5B] bg-[#ECFEF4]"
                }`}
                key={index}
              >
                {category}
              </ButtonComponent>
            ))}
          </div>
          {selectedCategoryDiscuss && (
            <label htmlFor="discuss_input" className="mt-10  flex flex-col relative">
              <TextArea
                minLength={5}
                placeholder="Tulis pertanyaanmu "
                autoSize
                id="discuss_input"
                onChange={handleInputChange}
              />
              <div className="w-full relative mt-1">
                {errorMessage && discussContent && (
                  <span className="text-red-500 font-space-grotesk">{errorMessage}</span>
                )}
                {!discussContent && <span className="text-red-500 font-space-grotesk">{errorMessage}</span>}
                <span className="absolute right-0 font-space-grotesk text-gray-400">
                  {textCount}/{maxTextCount}
                </span>
              </div>
            </label>
          )}
        </div>
      </section>
    </BottomDrawer>
  );
};

export default DetailsProductMobileCreateDiscuss;

DetailsProductMobileCreateDiscuss.propTypes = {
  isDrawerOpen: PropTypes.bool,
  handleOpenAndCloseDrawer: PropTypes.func,
  productImage: PropTypes.string,
  ProductName: PropTypes.string,
};
