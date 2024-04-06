import { Input } from "antd";
import { useState } from "react";
import ButtonComponent from "../ui/button-component";
import FormHelpDropdown from "./form-help-dropdown";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Alert, Checkbox } from "antd";

const FormAuthRegister = ({
  handleRegister,
  errorMessage,
  validationCheckCondition,
  handleRegisterInputChange,
  registerData,
}) => {
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const { nama, email, password, confirmPassword } = registerData;

  return (
    <div className="w-full">
      <h1 className="mb-5 text-2xl font-bold capitalize font-space-grotesk">register</h1>
      {errorMessage && <Alert message={errorMessage.error || errorMessage} type="error" className="mb-5" showIcon />}
      <form action="" onSubmit={handleRegister} className="flex flex-col w-full gap-y-5">
        {/* name */}
        <div className="w-full">
          <label htmlFor="name" className="capitalize">
            nama: <span className="text-red-600">*</span>
          </label>

          <Input
            id="name"
            name="nama"
            placeholder="jhon doe"
            type="text"
            size="large"
            className="mt-1"
            defaultValue={nama}
            onChange={handleRegisterInputChange}
          />
        </div>
        {/* email */}
        <div className="w-full">
          <label htmlFor="email" className="capitalize">
            email: <span className="text-red-600">*</span>
          </label>

          <Input
            id="email"
            name="email"
            type="email"
            placeholder="example@gmail.com"
            size="large"
            className="mt-1"
            defaultValue={email}
            onChange={handleRegisterInputChange}
          />
        </div>

        {/* password */}
        <div className="w-full">
          <label htmlFor="password" className="capitalize">
            password: <span className="text-red-600">*</span>
          </label>
          <Input.Password
            name="password"
            className="mt-1"
            size="large"
            id="password"
            defaultValue={password}
            onChange={handleRegisterInputChange}
            placeholder="****"
            visibilityToggle={{
              visible: showPassword.password,
              onVisibleChange: (visible) => setShowPassword({ ...showPassword, password: visible }),
            }}
          />
        </div>

        {/* confirm password */}
        <div className="w-full">
          <label htmlFor="confirmPassword" className="capitalize">
            konfirmasi password: <span className="text-red-600">*</span>
          </label>
          <Input.Password
            name="confirmPassword"
            className="mt-1"
            size="large"
            id="confirmPassword"
            defaultValue={confirmPassword}
            onChange={handleRegisterInputChange}
            placeholder="****"
            visibilityToggle={{
              visible: showPassword.confirmPassword,
              onVisibleChange: (visible) => setShowPassword({ ...showPassword, confirmPassword: visible }),
            }}
          />
        </div>

        {/* password validation check */}
        <div className="flex flex-col w-full gap-2">
          <Checkbox checked={validationCheckCondition.passwordIsMatch}>
            password harus sama
            <span className="text-red-500">*</span>
          </Checkbox>
          <Checkbox checked={validationCheckCondition.passwordIsMin8Char}>
            password harus memiliki setidaknya 8 karakter
            <span className="text-red-500">*</span>
          </Checkbox>
          <Checkbox checked={validationCheckCondition.passwordIsContain1Uppercase}>
            password harus memiliki setidaknya 1 huruf kapital
            <span className="text-red-500">*</span>
          </Checkbox>
          <Checkbox checked={validationCheckCondition.passwordIsContainNumber}>
            password harus memiliki setidaknya 1 angka
            <span className="text-red-500">*</span>
          </Checkbox>
        </div>

        {/* submit button */}
        <ButtonComponent htmlType="submit" className={"w-full"} type="primary" size="large">
          <span className="capitalize">daftar</span>
        </ButtonComponent>

        {/* help dropdown */}
        <div className="flex flex-wrap items-center justify-between w-full">
          <FormHelpDropdown />
          <Link to={"/login"} className="text-black">
            sudah punya akun? <span className="font-bold underline capitalize">masuk</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default FormAuthRegister;

FormAuthRegister.propTypes = {
  errorMessage: PropTypes.any,
  handleRegister: PropTypes.func.isRequired,
  validationCheckCondition: PropTypes.object.isRequired,
  handleRegisterInputChange: PropTypes.func.isRequired,
  registerData: PropTypes.object.isRequired,
};
