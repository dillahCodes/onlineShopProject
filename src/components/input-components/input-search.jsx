import { IoSearchSharp } from "react-icons/io5";
import PropTypes from "prop-types";
import { Input } from "antd";

const InputSearch = ({ defaultValue, className, onChange, placeholder, ...rest }) => {
  return (
    <Input
      id="search-bar"
      prefix={<IoSearchSharp className="m-2" />}
      onChange={onChange}
      className={className}
      placeholder={placeholder || "Cari Di Tokopedia"}
      defaultValue={defaultValue}
      allowClear={false}
      {...rest}
    />
  );
};

export default InputSearch;

InputSearch.propTypes = {
  onSearch: PropTypes.func,
  onChange: PropTypes.func,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
};
