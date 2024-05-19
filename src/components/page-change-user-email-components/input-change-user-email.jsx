import InputComponent from "../input-components/input-component";
import ButtonComponent from "../ui-components/button-component";
import PropTypes from "prop-types";

const InputChangeUserEmail = ({
  userEmail,
  handleOnChange,
  handleOnFocus,
  handleOnBlur,
  handleChangeUserEmail,
  errorMessae,
  isFocused,
}) => {
  return (
    <div className="relative mt-5 transition-all duration-300 ">
      <label
        htmlFor="input-change-email"
        className={` block transition-all duration-300 ${
          isFocused || (!userEmail && isFocused) || userEmail
            ? "-translate-y-1/2 text-xs "
            : "translate-y-1/2 text-base"
        } z-10 capitalize left-2 absolute font-medium bg-white px-2 text-gray-400 `}
      >
        email
      </label>
      <InputComponent
        allowClear
        status={errorMessae ? "error" : "default"}
        className={`px-2 py-3 font-space-grotesk text-gray-700 `}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        value={userEmail}
        type="email"
        required
        id="input-change-email"
      />
      {<p className="text-red-500 text-[12px] font-medium  font-space-grotesk capitalize mt-1">{errorMessae}</p>}
      <ButtonComponent
        onClick={handleChangeUserEmail}
        className="capitalize w-full font-bold mt-3 font-space-grotesk"
        size={"large"}
        type="primary"
        disabled={!userEmail || errorMessae}
      >
        simpan
      </ButtonComponent>
    </div>
  );
};

export default InputChangeUserEmail;
InputChangeUserEmail.propTypes = {
  userEmail: PropTypes.string,
  handleOnChange: PropTypes.func.isRequired,
  handleOnFocus: PropTypes.func.isRequired,
  handleOnBlur: PropTypes.func.isRequired,
  handleChangeUserEmail: PropTypes.func.isRequired,
  errorMessae: PropTypes.string.isRequired,
  isFocused: PropTypes.bool.isRequired,
};
