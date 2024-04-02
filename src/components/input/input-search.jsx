import Search from "antd/es/input/Search";
import { IoSearchSharp } from "react-icons/io5";
import PropTypes from "prop-types";
import { Input } from "antd";
import { isMobile } from "react-device-detect";

const InputSearch = ({ defaultValue, onSearch, className, ...rest }) => {
  return isMobile ? (
    <Input
      id="search-bar"
      prefix={<IoSearchSharp className="m-2" />}
      // onSearch={onSearch}
      className={className}
      placeholder="search here"
      defaultValue={defaultValue}
      allowClear
      {...rest}
    />
  ) : (
    <Search
      id="search-bar"
      placeholder="search here"
      allowClear
      enterButton={<IoSearchSharp />}
      size="large"
      className={className}
      defaultValue={defaultValue}
      // onSearch={onSearch}
      {...rest}
    />
  );
};

export default InputSearch;

InputSearch.propTypes = {
  onSearch: PropTypes.func,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
};
