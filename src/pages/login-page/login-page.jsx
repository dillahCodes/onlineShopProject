import axios from "axios";
import FormAuthLogin from "../../components/form/form-auth-login";

import { Layout } from "antd";
import { useState } from "react";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    console.log("dijalankan");

    try {
      const response = await axios.post(import.meta.env.VITE_API_URL + "users/login", loginData);
      console.log("Login Successful:", response.data);
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return (
    <Layout className="flex items-center justify-center h-screen p-5">
      <div className="w-full md:w-[50%] lg:w-[30%] mx-auto border-[2px] border-black p-5 rounded-md">
        <FormAuthLogin
          handleInputChange={handleInputChange}
          handleLoginSubmit={handleLoginSubmit}
          loginData={loginData}
        />
      </div>
    </Layout>
  );
};

export default LoginPage;
