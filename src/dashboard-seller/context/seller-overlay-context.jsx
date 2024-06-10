import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const SellerOverlayContext = createContext();

const SellerOverlayProvider = ({ children }) => {
  const [isOperlayOpen, setIsOperlayOpen] = useState(false);
  const location = useLocation();
  const sellerLocation = location.pathname.split("/").slice(1, 2);

  // fix overlay bug after change route
  useEffect(() => {
    if (sellerLocation[0] !== "seller" && isOperlayOpen) setIsOperlayOpen(false);
  }, [isOperlayOpen, sellerLocation]);

  return <SellerOverlayContext.Provider value={{ isOperlayOpen, setIsOperlayOpen }}>{children}</SellerOverlayContext.Provider>;
};

const useSellerOverlay = () => useContext(SellerOverlayContext);

// eslint-disable-next-line react-refresh/only-export-components
export { SellerOverlayProvider, useSellerOverlay };

SellerOverlayProvider.propTypes = {
  children: PropTypes.node,
};
