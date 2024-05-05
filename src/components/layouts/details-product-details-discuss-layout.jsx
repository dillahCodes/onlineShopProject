import { Layout } from "antd";
import { Header } from "antd/es/layout/layout";
import NavbarBackComponent from "../navbar-components/navbar-back-component";
import PropTypes from "prop-types";

const DetailsProductDetailsDiscussLayout = ({ children }) => {
  return (
    <Layout className={` min-h-screen relative max-w-[500px] mx-auto `}>
      <Header
        className={` w-full gap-x-2   px-3 py-6 shadow-sm  fixed z-40   flex items-center max-w-[500px] bg-white  `}
      >
        <NavbarBackComponent size={25} className={"text-gray-400"} onClick={() => history.back()} />
        <h1 className="capitalize font-bold">balas diskusi</h1>
      </Header>
      <Layout className={`relative  no-scrollbar mt-[65px] bg-white  `}>{children}</Layout>
    </Layout>
  );
};

export default DetailsProductDetailsDiscussLayout;

DetailsProductDetailsDiscussLayout.propTypes = {
  children: PropTypes.node,
};
