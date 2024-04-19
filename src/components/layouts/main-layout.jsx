import { Layout } from "antd";
import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";
import NavbarDekstopComponent from "../navbar-components/navbar-desktop-component";
import NavbarMobileComponent from "../navbar-components/navbar-mobile-component";
import NavbarMobileGreetingComponent from "../navbar-components/navbar-mobile-greeting-component";
import { useEffect, useState } from "react";

const MainLayout = (props) => {
  const [navBgBlur, setNavBgBlur] = useState(true);
  const { children } = props;

  useEffect(() => {
    const changeNavBg = () => {
      const initialPosition = 0;
      Math.round(window.scrollY) > initialPosition ? setNavBgBlur(false) : setNavBgBlur(true);
    };
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  return (
    <Layout className={` min-h-screen relative ${isMobile && "max-w-[500px] mx-auto"} `}>
      <div className={`w-full border-b `}>
        {!isMobile && <NavbarDekstopComponent />}
        {isMobile && (
          <NavbarMobileComponent
            className={`${
              navBgBlur ? "backdrop-filter bg-transparent backdrop-blur-sm " : "bg-white"
            } max-w-[500px]`}
          />
        )}
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
