import { Input } from "antd";
import { useState } from "react";
import ButtonComponent from "../ui/button-component";
import FormHelpDropdown from "./form-help-dropdown";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const FormAuthRegister = ({ handleInputChange, handleRegister, registerData }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full">
      <h1 className="mb-5 text-2xl font-bold capitalize font-space-grotesk">register</h1>
      <form action="" onSubmit={handleRegister} className="flex flex-col w-full gap-y-5">
        {/* name */}
        <div className="w-full">
          <label htmlFor="name" className="capitalize">
            Name: <span className="text-red-600">*</span>
          </label>

          <Input
            id="name"
            name="nama"
            placeholder="jhon doe"
            type="text"
            size="large"
            className="mt-1"
            defaultValue={registerData.nama}
            onChange={handleInputChange}
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
            defaultValue={registerData.email}
            onChange={handleInputChange}
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
            defaultValue={registerData.password}
            onChange={handleInputChange}
            placeholder="****"
            visibilityToggle={{
              visible: showPassword,
              onVisibleChange: setShowPassword,
            }}
          />
        </div>
        {/* submit button */}
        <ButtonComponent htmlType="submit" className={"w-full"} type="primary" size="large">
          <span className="capitalize">Log in</span>
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
  handleInputChange: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired,
  registerData: PropTypes.object.isRequired,
};
