import { Input } from "antd";
import { useState } from "react";
import PropTypes from "prop-types";

const InputTextComponentWithLabel = ({ inputValue, labelText, handleOnChange, errorMessage, size, maxValue, inputType, message }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [currentValue, setCurrentValue] = useState(inputValue);

  const handleOnFocus = () => {
    setIsFocused(true);
  };

  const handleOnBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (inputType === "tel" && /\D/.test(newValue)) return;
    if (maxValue && newValue.length > maxValue) return;

    setCurrentValue(newValue);
    handleOnChange(e);
  };

  return (
    <div className="relative mt-5 transition-all duration-300">
      <label
        htmlFor={labelText}
        className={`block transition-all duration-300 ${
          isFocused || (!currentValue && isFocused) || currentValue ? "-translate-y-1/2 text-xs " : "translate-y-1/2 text-base"
        } z-10 capitalize left-2 absolute font-medium bg-white px-2 text-gray-400`}
      >
        {labelText}
      </label>
      <Input
        allowClear
        size={size}
        status={errorMessage ? "error" : "default"}
        className="px-2 py-3 font-space-grotesk text-gray-700 rounded-xl w-full"
        onChange={handleChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        value={currentValue}
        required
        id={labelText}
      />
      {maxValue && (
        <p className="absolute right-3 text-sm font-space-grotesk text-gray-500">
          {currentValue.length}/{maxValue}
        </p>
      )}
      {<p className="text-red-500 text-[12px] font-medium font-space-grotesk capitalize mt-1">{errorMessage}</p>}
      {<p className="text-gray-400 text-[10px] ml-3 font-medium font-space-grotesk capitalize mt-1">{message}</p>}
    </div>
  );
};

export default InputTextComponentWithLabel;

InputTextComponentWithLabel.propTypes = {
  inputValue: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  size: PropTypes.string,
  maxValue: PropTypes.number,
  inputType: PropTypes.oneOf(["text", "tel"]),
  message: PropTypes.string,
};
