import PropTypes from "prop-types";
import ButtonComponent from "../../components/ui/button-component";
import { useState } from "react";
import BottomDrawer from "../../components/ui/bottom-drawer";
import { IoClose } from "react-icons/io5";

const DetailsProductMobileDescriptionProduct = ({ productData }) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const handleOpenAndCloseDrawer = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  function truncateString(text, maxLength) {
    return text.length > maxLength ? text.substring(0, maxLength) + "-..." : text;
  }

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
      <div className="flex flex-col p-5 mt-2 bg-white gap-y-5">
        <div className="w-full">
          <h1 className="text-lg font-bold font-space-grotesk">Detail Produk</h1>
          {/* etalase */}
          <div className="w-full mt-3">
            <span className="flex items-center justify-between pb-2 border-b gap-x-5 ">
              <span className="capitalize">etalase</span>
              <span className="font-bold capitalize truncate font-space-grotesk ">
                Lorem ipsum dolor sit amet.
              </span>
            </span>
          </div>
          {/* kategori */}
          <div className="w-full mt-3">
            <span className="flex items-center justify-between pb-2 border-b gap-x-5 ">
              <span className="capitalize">kategori</span>
              <span className="font-bold capitalize truncate font-space-grotesk ">
                Lorem ipsum dolor sit amet.
              </span>
            </span>
          </div>
        </div>
        {/* product description */}
        <div className="w-full">
          <h1 className="text-lg font-bold font-space-grotesk">Deskripsi Produk</h1>
          <p className="mt-3">{truncateString(productData.description, 150)}</p>
          <ButtonComponent
            onClick={handleOpenAndCloseDrawer}
            className={"capitalize border-none shadow-none p-0 font-bold font-space-grotesk"}
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

const ReadMoreDrawer = ({
  drawerTitle,
  handleOpenAndCloseDrawer,
  isOpen,
  onClose,
  drawerHeight,
  description,
}) => {
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
      <p>{description}</p>
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
