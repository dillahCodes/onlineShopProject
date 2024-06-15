import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const SellerAddProductValueData = createContext();

const SellerAddProductValueDataProvider = ({ children }) => {
  const [addProductData, setAddProductData] = useState({
    productName: "",
    productCategory: "",
    productDescription: "",
    productCondition: "",
    productPrice: 0,
    productBrand: "",
    productQty: null,
    productImagesPreviewAsUrl: [],
    productImagesFiles: [],
    productVariantData: [],
  });

  console.log(addProductData);

  const handleSetProcutName = (productName) =>
    setAddProductData({ ...addProductData, productName: productName });

  const handleSetProductCategory = (productCategory) =>
    setAddProductData({ ...addProductData, productCategory: productCategory });

  const handleSetProductDescription = (productDescription) =>
    setAddProductData({
      ...addProductData,
      productDescription: productDescription,
    });
  const handleSetProductCondition = (productCondition) =>
    setAddProductData({
      ...addProductData,
      productCondition: productCondition,
    });

  const contextValue = {
    addProductData,
    setAddProductData,
    handleSetProductCategory,
    handleSetProductDescription,
    handleSetProcutName,
    handleSetProductCondition,
  };

  return (
    <SellerAddProductValueData.Provider value={contextValue}>
      {children}
    </SellerAddProductValueData.Provider>
  );
};

const useSellerAddProductData = () => useContext(SellerAddProductValueData);

SellerAddProductValueDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export { SellerAddProductValueDataProvider, useSellerAddProductData };
