import { Layout } from "antd";
import { isMobile } from "react-device-detect";
import PropTypes from "prop-types";
import NavbarDekstopComponent from "../navbar/navbar-desktop-component";

const AllProductReviewsLayout = ({ children }) => {
  return (
    <Layout className={` h-screen relative `}>
      <div className={`w-full border-b `}>{!isMobile && <NavbarDekstopComponent />}</div>
      <Layout className={`relative overflow-y-scroll w-screen ${isMobile && "max-w-[900px] mx-auto"} `}>
        {children}
      </Layout>
    </Layout>
  );
};

export default AllProductReviewsLayout;

AllProductReviewsLayout.propTypes = {
  children: PropTypes.node,
};
