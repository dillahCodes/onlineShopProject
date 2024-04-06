import { Layout } from "antd";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import NavbarDekstopComponent from "../navbar/navbar-desktop-component";
import NavbarMobileComponent from "../navbar/navbar-mobile-component";

const DetailsProductLayout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // navbar position change when scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout className={`h-screen relative ${isMobile && "max-w-[900px] mx-auto"}`}>
      <div className={`w-full border-b ${isScrolled ? "bg-white shadow-md fixed border-none" : ""}`}>
        {!isMobile && <NavbarDekstopComponent />}
        {isMobile && <NavbarMobileComponent />}
      </div>
      <Layout className={`relative overflow-y-scroll`}>{children}</Layout>
    </Layout>
  );
};

export default DetailsProductLayout;

DetailsProductLayout.propTypes = {
  children: PropTypes.node,
};
