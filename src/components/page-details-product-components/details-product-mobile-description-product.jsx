import PropTypes from "prop-types";
import ButtonComponent from "../ui-components/button-component";
import { useState } from "react";
import BottomDrawer from "../ui-components/bottom-drawer";
import { IoClose } from "react-icons/io5";
import truncateString from "../../utils/truncate-string";

const DetailsProductMobileDescriptionProduct = ({ productData }) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const handleOpenAndCloseDrawer = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  return (
    <>
      <ReadMoreDrawer
        drawerTitle="Deskripsi Produk"
        description={productData.description}
        handleOpenAndCloseDrawer={handleOpenAndCloseDrawer}
        isOpen={drawerIsOpen}
        onClose={handleOpenAndCloseDrawer}
        drawerHeight="80%"
      />
      <div className="flex flex-col p-3 mt-2 bg-white gap-y-5">
        <div className="w-full">
          <h1 className="text-base font-bold font-space-grotesk">Detail Produk</h1>
          {/* etalase */}
          <div className="w-full mt-3">
            <span className="flex items-center justify-between pb-2 border-b gap-x-5 ">
              <span className="capitalize">etalase</span>
              <span className="font-bold capitalize truncate font-space-grotesk text-[#00AA5B] ">
                Lorem ipsum dolor sit amet.
              </span>
            </span>
          </div>
          {/* kategori */}
          <div className="w-full mt-3">
            <span className="flex items-center justify-between pb-2 border-b gap-x-5 ">
              <span className="capitalize ">kategori</span>
              <div className="flex items-center gap-x-1 truncate">
                <span className="font-bold capitalize truncate cursor-pointer font-space-grotesk text-[#00AA5B]">
                  Home
                </span>
                <span className="font-space-grotesk ">&gt;</span>
                <span className="font-bold capitalize cursor-pointer truncate text-[#00AA5B] font-space-grotesk ">
                  {productData.category}
                </span>
                <span className="font-space-grotesk cursor-pointer ">&gt;</span>
                <span className="font-bold capitalize cursor-pointer text-[#00AA5B] truncate font-space-grotesk ">
                  {productData.name}
                </span>
              </div>
            </span>
          </div>
        </div>
        {/* product description */}
        <div className="w-full">
          <h1 className="text-base font-bold font-space-grotesk">Deskripsi Produk</h1>
          <p className="mt-3">{truncateString(productData.description, 150)}</p>
          <ButtonComponent
            onClick={handleOpenAndCloseDrawer}
            className={"capitalize border-none shadow-none p-0 font-bold font-space-grotesk text-[#00AA5B]"}
          >
            baca selengkap
          </ButtonComponent>
        </div>
      </div>
    </>
  );
};

export default DetailsProductMobileDescriptionProduct;

DetailsProductMobileDescriptionProduct.propTypes = {
  productData: PropTypes.object,
};

const ReadMoreDrawer = ({ drawerTitle, handleOpenAndCloseDrawer, isOpen, onClose, drawerHeight, description }) => {
  return (
    <BottomDrawer
      drawerTitle={
        <div className="flex items-center justify-between w-full ">
          <h1 className="text-lg font-bold font-space-grotesk">{drawerTitle}</h1>
          <ButtonComponent className="p-0 text-3xl border-none " icon={<IoClose />} onClick={onClose} />
        </div>
      }
      handleOpenAndCloseDrawer={handleOpenAndCloseDrawer}
      isOpen={isOpen}
      onClose={onClose}
      drawerHeight={drawerHeight}
      className="rounded-t-lg"
    >
      <div className="w-full p-3">
        <span className="">{description}</span>
      </div>
    </BottomDrawer>
  );
};

ReadMoreDrawer.propTypes = {
  drawerTitle: PropTypes.node.isRequired,
  handleOpenAndCloseDrawer: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  drawerHeight: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
