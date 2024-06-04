import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { useAuth } from "../../../context/user-auth-context";

const SearchAddressContext = createContext();

const sortAddressByIsSelected = (data) => data.sort((a, b) => (a.is_selected === b.is_selected ? 0 : a.is_selected ? -1 : 1));

const SearchAddressContextProvider = ({ children }) => {
  const { user } = useAuth();
  const [addressFiltered, seAddressFiltered] = useState(sortAddressByIsSelected(user.address));
  const [selectAddress, setSelectAddress] = useState(user.address.find((data) => data.is_selected === true)?.address_id);

  const handleSearchAddress = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredAddress = user.address.filter((address) => Object.values(address).some((value) => typeof value === "string" && value.toLowerCase().includes(searchValue)));

    seAddressFiltered(sortAddressByIsSelected(filteredAddress));
  };

  return <SearchAddressContext.Provider value={{ handleSearchAddress, addressFiltered, setSelectAddress, selectAddress }}>{children}</SearchAddressContext.Provider>;
};

SearchAddressContextProvider.propTypes = {
  children: PropTypes.node,
};

const useSearchAddress = () => useContext(SearchAddressContext);

// eslint-disable-next-line react-refresh/only-export-components
export { SearchAddressContextProvider, useSearchAddress };
