import { Layout } from "antd";
import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";
import NavbarDekstopComponent from "../navbar-components/navbar-desktop-component";
import NavbarMobileComponent from "../navbar-components/navbar-mobile-component";
import NavbarMobileGreetingComponent from "../navbar-components/navbar-mobile-greeting-component";

const MainLayout = (props) => {
  const { children } = props;

  return (
    <Layout className={` min-h-screen relative ${isMobile && "max-w-[900px] mx-auto"} `}>
      <div className={`w-full border-b `}>
        {!isMobile && <NavbarDekstopComponent />}
        {isMobile && <NavbarMobileComponent />}
      </div>
      <Layout className="relative  no-scrollbar ">
        {/* mobile greeting */}
        {isMobile === true && <NavbarMobileGreetingComponent />}
        {children}
      </Layout>
    </Layout>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.node,
};
