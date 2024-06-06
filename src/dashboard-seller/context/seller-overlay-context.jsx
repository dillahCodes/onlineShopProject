import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const SellerOverlayContext = createContext();

const SellerOverlayProvider = ({ children }) => {
  const [isOperlayOpen, setIsOperlayOpen] = useState(false);
  const handleOpenAndCloseSellerOverlay = () => setIsOperlayOpen(!isOperlayOpen);

  return <SellerOverlayContext.Provider value={{ isOperlayOpen, handleOpenAndCloseSellerOverlay }}>{children}</SellerOverlayContext.Provider>;
};

const useSellerOverlay = () => useContext(SellerOverlayContext);

// eslint-disable-next-line react-refresh/only-export-components
export { SellerOverlayProvider, useSellerOverlay };

SellerOverlayProvider.propTypes = {
  children: PropTypes.node,
};
