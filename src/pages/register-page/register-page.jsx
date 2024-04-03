import { Layout } from "antd";
import FormAuthRegister from "../../components/form/form-auth-register";
import { useState } from "react";
import axios from "axios";

const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    nama: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(import.meta.env.VITE_API_URL + "users/register", registerData);
      console.log("Login Successful:", response.data);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return (
    <Layout className="flex items-center justify-center h-screen p-5">
      <div className="w-full md:w-[50%] lg:w-[30%] mx-auto border-[2px] border-black p-5 rounded-md">
        <FormAuthRegister
          handleInputChange={handleInputChange}
          registerData={registerData}
          handleLoginSubmit={handleLoginSubmit}
        />
      </div>
    </Layout>
  );
};

export default RegisterPage;
