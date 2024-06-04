import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const addressContext = createContext();

const AddressProvider = ({ children }) => {
  const [isAddAdress, setIsAddAddress] = useState(false);

  const handleOpenAddressDrawer = () => setIsAddAddress(!isAddAdress);
  return <addressContext.Provider value={{ isAddAdress, handleOpenAddressDrawer }}>{children}</addressContext.Provider>;
};

const useAddress = () => useContext(addressContext);

// eslint-disable-next-line react-refresh/only-export-components
export { AddressProvider, useAddress };

AddressProvider.propTypes = {
  children: PropTypes.node,
};
