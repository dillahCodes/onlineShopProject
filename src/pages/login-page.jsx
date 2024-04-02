import { Layout } from "antd";
import FormAuthLogin from "../components/form/form-auth-login";

const LoginPage = () => {
  return (
    <Layout className="flex items-center justify-center h-screen p-5">
      <div className="w-full md:w-[50%] lg:w-[30%] mx-auto border-[2px] border-black p-5 rounded-md">
        <FormAuthLogin />
      </div>
    </Layout>
  );
};

export default LoginPage;
