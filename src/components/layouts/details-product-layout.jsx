import { Layout } from "antd";
import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";
import NavbarDekstopComponent from "../navbar-components/navbar-desktop-component";
import NavbarMobileComponent from "../navbar-components/navbar-mobile-component";

const DetailsProductLayout = ({ children }) => {
  return (
    <Layout className={` h-screen relative ${isMobile && "max-w-[900px] mx-auto"}`}>
      <div className={`w-full border-b`}>
        {!isMobile && <NavbarDekstopComponent />}
        {isMobile && <NavbarMobileComponent className={`bg-white`} />}
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
