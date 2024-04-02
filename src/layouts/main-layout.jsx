import { Layout } from "antd";
import PropTypes from "prop-types";
import NavbarDekstopComponent from "../components/navbar/navbar-desktop-component";
import NavbarMobileComponent from "../components/navbar/navbar-mobile-component";
import NavbarMobileGreetingComponent from "../components/navbar/navbar-mobile-greeting-component";
import { isMobile } from "react-device-detect";

const MainLayout = (props) => {
  const { children } = props;

  return (
    <Layout className={`h-screen relative ${isMobile && "max-w-[900px] mx-auto"} `}>
      <div className={`w-full border-b `}>
        {!isMobile && <NavbarDekstopComponent />}
        {isMobile && <NavbarMobileComponent />}
      </div>
      <Layout className="relative overflow-y-scroll ">
        {/* mobile greeting */}
        {isMobile && <NavbarMobileGreetingComponent />}
        {children}
      </Layout>
    </Layout>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.node,
};
