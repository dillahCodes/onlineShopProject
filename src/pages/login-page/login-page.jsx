import FormAuthLogin from "../../components/form/form-auth-login";
import { Layout } from "antd";
import { useState } from "react";
import loginFunction from "../../features/auth/login-function";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    loginFunction(loginData).then(() => navigate("/"));
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
