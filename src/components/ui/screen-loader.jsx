import { Layout, Spin } from "antd";

const ScreenLoader = () => {
  return (
    <Layout className="flex items-center justify-center w-screen h-screen">
      <Spin size="large" />
    </Layout>
  );
};

export default ScreenLoader;
