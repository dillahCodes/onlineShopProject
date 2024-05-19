import InputComponent from "../input-components/input-component";
import ButtonComponent from "../ui-components/button-component";
import PropTypes from "prop-types";

const ChangeUsernameInputComponent = ({
  username,
  handleOnChange,
  handleOnFocus,
  handleOnBlur,
  handleChangeUserName,
  errorMessae,
  isInputEmpty,
  isFocused,
}) => {
  return (
    <div className="relative mt-5 transition-all duration-300 ">
      <label
        htmlFor="input-change-username"
        className={` block transition-all duration-300 ${
          isFocused || !isInputEmpty || username ? "-translate-y-1/2 text-xs " : "translate-y-1/2 text-base"
        } z-10 capitalize left-2 absolute font-medium bg-white px-2 text-gray-400 `}
      >
        username
      </label>
      <InputComponent
        allowClear
        status={errorMessae ? "error" : "default"}
        className={`px-2 py-3 font-space-grotesk text-gray-700 `}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        value={username}
        id="input-change-username"
      />
      {<p className="text-red-500 text-[12px] font-medium pl-2 font-space-grotesk capitalize">{errorMessae}</p>}
      <ButtonComponent
        onClick={handleChangeUserName}
        className="capitalize w-full font-bold mt-3 font-space-grotesk"
        size={"large"}
        type="primary"
        disabled={isInputEmpty || errorMessae}
      >
        simpan
      </ButtonComponent>
    </div>
  );
};

export default ChangeUsernameInputComponent;

ChangeUsernameInputComponent.propTypes = {
  username: PropTypes.string,
  handleOnChange: PropTypes.func.isRequired,
  handleOnFocus: PropTypes.func.isRequired,
  handleOnBlur: PropTypes.func.isRequired,
  handleChangeUserName: PropTypes.func.isRequired,
  errorMessae: PropTypes.string.isRequired,
  isInputEmpty: PropTypes.bool.isRequired,
  isFocused: PropTypes.bool.isRequired,
};
