import { IoSearchSharp } from "react-icons/io5";
import PropTypes from "prop-types";
import { Input } from "antd";

const InputSearch = ({ defaultValue, onSearch, className, ...rest }) => {
  return (
    <Input
      id="search-bar"
      prefix={<IoSearchSharp className="m-2" />}
      // onSearch={onSearch}
      className={className}
      placeholder="cari di tokopedia"
      defaultValue={defaultValue}
      allowClear
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
