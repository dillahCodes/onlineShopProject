import { Link } from "react-router-dom";
import { useState } from "react";
import { Alert, Checkbox, Input } from "antd";

import PropTypes from "prop-types";
import ButtonComponent from "../ui-components/button-component";
import FormHelpDropdown from "./form-help-dropdown";

const FormAuthLogin = ({
  handleLoginInputChange,
  handleLoginSubmit,
  loginData,
  errorMessage,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full">
      <h1 className="mb-5 text-2xl font-bold capitalize font-space-grotesk">Log in</h1>
      {errorMessage && (
        <Alert
          message={errorMessage.error || errorMessage}
          type="error"
          className="mb-5"
          showIcon
        />
      )}
      <form onSubmit={handleLoginSubmit} action="" className="flex flex-col w-full gap-y-5">
        {/* email */}
        <div className="w-full">
          <label htmlFor="email" className="capitalize">
            email: <span className="text-red-600">*</span>
          </label>

          <Input
            id="email"
            name="email"
            placeholder="example@gmail.com"
            size="large"
            className="mt-1"
            type="email"
            defaultValue={loginData.email}
            onChange={handleLoginInputChange}
          />
        </div>

        {/* password */}
        <div className="w-full">
          <label htmlFor="password" className="capitalize">
            password: <span className="text-red-600">*</span>
          </label>
          <Input.Password
            className="mt-1"
            name="password"
            size="large"
            id="password"
            placeholder="****"
            visibilityToggle={{
              visible: showPassword,
              onVisibleChange: setShowPassword,
            }}
            defaultValue={loginData.password}
            onChange={handleLoginInputChange}
          />
        </div>
        {/* remember me */}
        <Checkbox>Remember me</Checkbox>
        {/* submit button */}
        <ButtonComponent className={"w-full"} type="primary" htmlType="submit" size="large">
          <span className="capitalize">Log in</span>
        </ButtonComponent>

        {/* help dropdown */}
        <div className="flex flex-wrap items-center justify-between w-full">
          <FormHelpDropdown />
          <Link to={"/signup"} className="text-black">
            belum punya akun? <span className="font-bold underline capitalize">daftar</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

FormAuthLogin.propTypes = {
  handleLoginInputChange: PropTypes.func.isRequired,
  handleLoginSubmit: PropTypes.func.isRequired,
  loginData: PropTypes.object.isRequired,
  errorMessage: PropTypes.any,
};

export default FormAuthLogin;
