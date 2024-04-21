import { Layout } from "antd";
import PropTypes from "prop-types";

const AllProductReviewsLayout = ({ children }) => {
  return (
    <Layout className={` h-screen relative max-w-[500px] mx-auto `}>
      <Layout className={`relative overflow-y-scroll no-scrollbar`}>{children}</Layout>
    </Layout>
  );
};

export default AllProductReviewsLayout;

AllProductReviewsLayout.propTypes = {
  children: PropTypes.node,
};
