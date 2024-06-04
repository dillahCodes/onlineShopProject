import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useAuth } from "./user-auth-context";

const ShippingToContext = createContext();

const ShippingToProvider = ({ children }) => {
  const { user } = useAuth();
  const selectedAddressFromUserData = user?.address.find((address) => address.is_selected === true);
  const [selectedAddressFromLocal, setSelectedAddressFromLocal] = useState(JSON.parse(localStorage.getItem("shippingToData")) || null);
  const [displayValue, setDisplayValue] = useState(
    selectedAddressFromUserData ? `${selectedAddressFromUserData.address_label} ${selectedAddressFromUserData.receiper_name}` : "jakarta pusat"
  );

  // handle waatch local storage
  useEffect(() => {
    const handleStorageChange = () => {
      const addressData = localStorage.getItem("shippingToData");
      if (addressData) setSelectedAddressFromLocal(JSON.parse(addressData));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // handle watch local storage if new address added
  useEffect(() => {
    const handleStorageChange = () => {
      const addressData = localStorage.getItem("shippingToData");
      if (addressData != selectedAddressFromLocal) setSelectedAddressFromLocal(JSON.parse(addressData));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [selectedAddressFromLocal]);

  // handle set display value if user select address by field form
  useEffect(() => {
    const handleUnselectUserAddres = async () => {
      try {
        selectedAddressFromLocal && setDisplayValue(`${selectedAddressFromLocal.province}, ${selectedAddressFromLocal.districtOrCity}`);
      } catch (error) {
        console.error("Error unselecting user address:", error);
      }
    };

    handleUnselectUserAddres();
  }, [user?.address, user?.user_id, selectedAddressFromLocal]);

  return <ShippingToContext.Provider value={{ displayValue, setSelectedAddressFromLocal }}>{children}</ShippingToContext.Provider>;
};

const useShippingToContext = () => useContext(ShippingToContext);

// eslint-disable-next-line react-refresh/only-export-components
export { ShippingToProvider, useShippingToContext };

ShippingToProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
