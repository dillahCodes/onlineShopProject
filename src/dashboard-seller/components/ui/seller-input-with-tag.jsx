import classNames from "classnames";
import PropTypes from "prop-types";
import { useRef, useState } from "react";

const SellerInputWithTag = ({ classname }) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const handleFocusWhenClickInput = () => {
    inputRef.current && inputRef.current.focus();
  };

  const handleFocused = () => setIsFocused(true);
  const handleUnFocused = () => setIsFocused(false);

  return (
    <div
      className={classNames(`${classname}`, {
        "border border-green-600": isFocused,
        border: !isFocused,
      })}
      onClick={handleFocusWhenClickInput}
    >
      <div className="w-fit">
        <input
          type="text"
          ref={inputRef}
          onFocus={handleFocused}
          onBlur={handleUnFocused}
          className="min-w-[2px] max-w-fit focus:shadow-none focus:outline-none"
        />
      </div>
    </div>
  );
};

SellerInputWithTag.propTypes = {
  classname: PropTypes.string,
};

export default SellerInputWithTag;
