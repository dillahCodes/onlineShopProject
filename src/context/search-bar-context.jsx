import { useContext } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const SearchBarContext = createContext();

const SearchBarProvider = ({ children }) => {
  const [searchBarIsFocused, setSearchBarIsFocused] = useState(false);

  return (
    <SearchBarContext.Provider value={{ searchBarIsFocused, setSearchBarIsFocused }}>
      {children}
    </SearchBarContext.Provider>
  );
};

const useSearchBar = () => useContext(SearchBarContext);
SearchBarProvider.propTypes = {
  children: PropTypes.node,
};
export { SearchBarProvider, useSearchBar };
