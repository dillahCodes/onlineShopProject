import { Input } from "antd";
import { useState } from "react";
import PropTypes from "prop-types";

const InputPasswordComponentWithLabel = ({ inputValue, labelText, handleOnChange, errorMessage }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleOnFocus = () => setIsFocused(true);
  const handleOnBlur = () => setIsFocused(false);

  return (
    <div className=" relative mt-5 transition-all duration-300 ">
      <label
        htmlFor={labelText}
        className={` block transition-all duration-300 ${
          isFocused || (!inputValue && isFocused) || inputValue ? "-translate-y-1/2 text-xs " : "translate-y-1/2 text-base"
        } z-10 capitalize left-2 absolute font-medium bg-white px-2 text-gray-400 `}
      >
        {labelText}
      </label>
      <Input.Password
        allowClear
        status={errorMessage ? "error" : "default"}
        className={`px-2 py-3 font-space-grotesk text-gray-700 `}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        value={inputValue}
        visibilityToggle={{
          visible: passwordVisible,
          onVisibleChange: setPasswordVisible,
        }}
        required
        id={labelText}
      />
      {<p className="text-red-500 text-[12px] font-medium  font-space-grotesk capitalize mt-1">{errorMessage}</p>}
    </div>
  );
};

export default InputPasswordComponentWithLabel;

InputPasswordComponentWithLabel.propTypes = {
  inputValue: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};
