import { Layout } from "antd";
import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";
import NavbarDekstopComponent from "../navbar/navbar-desktop-component";
import NavbarMobileComponent from "../navbar/navbar-mobile-component";
import NavbarMobileGreetingComponent from "../navbar/navbar-mobile-greeting-component";
import { useAuth } from "../../context/user-auth-context";

const MainLayout = (props) => {
  const { children } = props;
  const { user } = useAuth();

  return (
    <Layout className={`h-screen relative ${isMobile && "max-w-[900px] mx-auto"} `}>
      <div className={`w-full border-b `}>
        {!isMobile && <NavbarDekstopComponent />}
        {isMobile && <NavbarMobileComponent />}
      </div>
      <Layout className="relative overflow-y-scroll">
        {/* mobile greeting */}
        {user === null && isMobile === true && <NavbarMobileGreetingComponent />}
        {children}
      </Layout>
    </Layout>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.node,
};
