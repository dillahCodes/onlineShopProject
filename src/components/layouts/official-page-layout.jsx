import { Layout } from "antd";
import BottombarMobileNavHomePage from "../bottombar-navigation-components/bottombar-mobile-nav-home-page-component";
import NavbarMobileComponent from "../navbar-components/navbar-mobile-component";
import PropTypes from "prop-types";

const OfficialPageLayout = (props) => {
  const { children } = props;

  return (
    <Layout className={` min-h-screen relative max-w-[500px] mx-auto `}>
      <div className={`w-full border-b `}>
        <NavbarMobileComponent className={` max-w-[500px] bg-white`} />
      </div>
      <Layout className="relative  no-scrollbar ">
        {/* mobile greeting */}
        {children}
        <BottombarMobileNavHomePage active={"official store"} />
      </Layout>
    </Layout>
  );
};

export default OfficialPageLayout;

OfficialPageLayout.propTypes = {
  children: PropTypes.node,
};
