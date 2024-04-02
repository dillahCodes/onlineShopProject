import { useState } from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import ButtonComponent from "../../components/ui/button-component";
import { HiOutlinePencil } from "react-icons/hi2";
import PropTypes from "prop-types";
import TextArea from "antd/es/input/TextArea";

const DetailsProductDekstopProductCountAndMessage = ({ currentProductData }) => {
  const [productCount, setProductCount] = useState(1);
  const [message, setMessage] = useState("");
  const [messageIsOpen, setMessageIsOpen] = useState(false);

  function formatCurrencyToIDR(amount) {
    const currencyFormatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    return currencyFormatter.format(amount);
  }

  const onChange = (value) => {
    console.log("changed", value);
  };

  const onIncrease = () => {
    setProductCount(productCount + 1);
  };

  const onDecrease = () => {
    if (productCount > 1) {
      setProductCount(productCount - 1);
    }
  };

  const openAndCloseMessage = () => {
    setMessageIsOpen(!messageIsOpen);
    if (messageIsOpen) {
      setMessage("");
    }
  };

  return (
    <div className="min-w-[300px]">
      {/* prpduct variant */}
      <div className="flex flex-col w-full py-3 border-b gap-y-3">
        <h1 className="text-lg font-bold capitalize font-space-grotesk">atur jumlah dan catatan</h1>
        <span>product variant</span>
      </div>
      {/* product count */}
      <div className="flex items-center w-full mt-3 gap-x-2">
        <div className="w-[120px] border-black border p-1 rounded-md flex items-center">
          <ButtonComponent
            onClick={onDecrease}
            size="small"
            disabled={productCount <= 1}
            className={`bg-transparent ${
              productCount <= 1
                ? "cursor-not-allowed text-gray-400 border-none hover:bg-transparent hover:text-gray-400"
                : ""
            } hover:bg-black hover:text-white border border-black items-center flex`}
            icon={<IoMdRemove />}
          />
          <span className="w-full text-center">{productCount}</span>
          <ButtonComponent
            onClick={onIncrease}
            size="small"
            disabled={currentProductData?.quantity <= productCount}
            className={`bg-transparent ${
              productCount >= currentProductData?.quantity
                ? "cursor-not-allowed text-gray-400 border-none hover:bg-transparent hover:text-gray-400"
                : ""
            } hover:bg-black hover:text-white border border-black items-center flex`}
            icon={<IoMdAdd />}
          />
        </div>
        <span className="capitalize">
          stok: <span className="font-bold">{currentProductData?.quantity}</span>
        </span>
      </div>
      {/* product message */}
      <div className="w-full mt-3">
        {messageIsOpen && (
          <TextArea
            rows={2}
            className="bg-transparent resize-none"
            placeholder="Contoh: warna putih, size M"
            maxLength={100}
            onChange={(e) => setMessage(e.target.value)}
          />
        )}
        <div className="flex items-center cursor-pointer gap-x-1" onClick={openAndCloseMessage}>
          <HiOutlinePencil className="text-lg" />
          <span className={`font-bold capitalize font-space-grotesk ${messageIsOpen ? "mt-3" : ""}`}>
            {messageIsOpen ? "batalkan catatan" : "tambahkan catatan"}
          </span>
        </div>

        {/* product total price */}
        <div className="flex justify-between w-full mt-3 ">
          <span className="capitalize">subtotal</span>
          {currentProductData && (
            <span className="text-lg font-bold font-space-grotesk">
              {formatCurrencyToIDR(currentProductData?.price * productCount)}
            </span>
          )}
        </div>

        {/* product button buy and add to cart */}
        <div className="flex flex-col w-full mt-3 gap-y-2">
          <ButtonComponent
            size="large"
            className={
              "flex w-full items-center justify-center bg-black text-white font-bold font-space-grotesk capitalize"
            }
            icon={<IoMdAdd className="text-lg font-bold" />}
          >
            keranjang
          </ButtonComponent>
          <ButtonComponent
            size="large"
            className={
              "flex items-center w-full justify-center bg-transparent border-black font-bold font-space-grotesk capitalize"
            }
            icon={<IoMdAdd className="text-lg font-bold" />}
          >
            beli
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default DetailsProductDekstopProductCountAndMessage;

DetailsProductDekstopProductCountAndMessage.propTypes = {
  currentProductData: PropTypes.object,
};
