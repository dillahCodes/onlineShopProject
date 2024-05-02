import { Layout } from "antd";
import BottombarMobileNavHomePage from "../bottombar-navigation-components/bottombar-mobile-nav-home-page-component";
import PropTypes from "prop-types";

const FeedPageLayout = ({ children }) => {
  return (
    <Layout className={` min-h-screen relative max-w-[500px] mx-auto `}>
      <div className={`w-full border-b `}></div>
      <Layout className="relative  no-scrollbar ">
        {/* mobile greeting */}
        {children}
        <BottombarMobileNavHomePage active={"feed"} />
      </Layout>
    </Layout>
  );
};

export default FeedPageLayout;

FeedPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
