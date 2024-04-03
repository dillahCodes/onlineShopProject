import { Link } from "react-router-dom";
import { useState } from "react";
import { Checkbox, Input } from "antd";

import PropTypes from "prop-types";
import ButtonComponent from "../ui/button-component";
import FormHelpDropdown from "./form-help-dropdown";

const FormAuthLogin = ({ handleInputChange, handleLoginSubmit, loginData }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full">
      <h1 className="mb-5 text-2xl font-bold capitalize font-space-grotesk">
        Log in
      </h1>
      <form
        onSubmit={handleLoginSubmit}
        action=""
        className="flex flex-col w-full gap-y-5"
      >
        {/* email */}
        <div className="w-full">
          <label htmlFor="email" className="capitalize">
            email: <span className="text-red-600">*</span>
          </label>

          <Input
            id="email"
            placeholder="example@gmail.com"
            size="large"
            className="mt-1"
            value={loginData.email}
            onChange={handleInputChange}
          />
        </div>

        {/* password */}
        <div className="w-full">
          <label htmlFor="password" className="capitalize">
            password: <span className="text-red-600">*</span>
          </label>
          <Input.Password
            className="mt-1"
            size="large"
            id="password"
            placeholder="****"
            visibilityToggle={{
              visible: showPassword,
              onVisibleChange: setShowPassword,
            }}
            value={loginData.password}
            onChange={handleInputChange}
          />
        </div>
        {/* remember me */}
        <Checkbox>Remember me</Checkbox>
        {/* submit button */}
        <ButtonComponent className={"w-full"} type="primary" size="large">
          <span className="capitalize">Log in</span>
        </ButtonComponent>

        {/* help dropdown */}
        <div className="flex flex-wrap items-center justify-between w-full">
          <FormHelpDropdown />
          <Link to={"/signup"} className="text-black">
            belum punya akun?{" "}
            <span className="font-bold underline capitalize">daftar</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

FormAuthLogin.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleLoginSubmit: PropTypes.func.isRequired,
  loginData: PropTypes.object.isRequired,
};

export default FormAuthLogin;
