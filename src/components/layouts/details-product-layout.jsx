import { Layout } from "antd";
import PropTypes from "prop-types";
import NavbarMobileComponent from "../navbar-components/navbar-mobile-component";

const DetailsProductLayout = ({ children }) => {
  return (
    <Layout className={` h-screen relative max-w-[500px] mx-auto `}>
      <div className={`w-full border-b`}>
        <NavbarMobileComponent className={`bg-white max-w-[500px]`} />
      </div>
      <Layout
        className={`relative overflow-y-scroll no-scrollbar mt-[65px] border border-red-600`}
      >
        {children}
      </Layout>
    </Layout>
  );
};

export default DetailsProductLayout;

DetailsProductLayout.propTypes = {
  children: PropTypes.node,
};
