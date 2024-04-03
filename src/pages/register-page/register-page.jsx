import { Layout } from "antd";
import FormAuthRegister from "../../components/form/form-auth-register";
import { useState } from "react";
import registerFunction from "../../features/auth/register-function";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    nama: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    registerFunction(registerData).then(() => navigate("/login"));
  };
  return (
    <Layout className="flex items-center justify-center h-screen p-5">
      <div className="w-full md:w-[50%] lg:w-[30%] mx-auto border-[2px] border-black p-5 rounded-md">
        <FormAuthRegister
          handleInputChange={handleInputChange}
          registerData={registerData}
          handleRegister={handleRegisterSubmit}
        />
      </div>
    </Layout>
  );
};

export default RegisterPage;
