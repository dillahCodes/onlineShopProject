import { Layout } from "antd";
import { useState } from "react";
import FormAuthLogin from "../components/form-auth-components/form-auth-login";
import useUserLogin from "../features/auth/hooks/use-user-login";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { loginUser, errorMessage } = useUserLogin();

  const handleLoginInputChange = (event) => {
    const { value, name } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    loginUser(loginData);
  };

  return (
    <Layout className="flex items-center justify-center h-screen p-5">
      <div className="w-full md:w-[50%] lg:w-[30%] mx-auto border-[2px] border-black p-5 rounded-md">
        <FormAuthLogin
          handleLoginInputChange={handleLoginInputChange}
          handleLoginSubmit={handleLoginSubmit}
          loginData={loginData}
          errorMessage={errorMessage}
        />
      </div>
    </Layout>
  );
};

export default LoginPage;
