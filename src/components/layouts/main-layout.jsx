import { Layout } from "antd";
import PropTypes from "prop-types";
import NavbarMobileComponent from "../navbar-components/navbar-mobile-component";
import NavbarMobileGreetingComponent from "../navbar-components/navbar-mobile-greeting-component";
import useNavbarChangeWhenScroll from "../../hooks/use-navbar-change-when-scroll";
import BottombarMobileNavHomePage from "../bottombar-navigation-components/bottombar-mobile-nav-home-page-component";

const MainLayout = (props) => {
  const [navBgBlur] = useNavbarChangeWhenScroll(0);
  const { children } = props;

  return (
    <Layout className={` min-h-screen relative max-w-[500px] mx-auto `}>
      <div className={`w-full border-b `}>
        <NavbarMobileComponent
          className={`${!navBgBlur ? "backdrop-filter bg-transparent backdrop-blur-sm " : "bg-white"} max-w-[500px]`}
        />
      </div>
      <Layout className="relative  no-scrollbar  ">
        {/* mobile greeting */}
        <NavbarMobileGreetingComponent />
        {children}
        <BottombarMobileNavHomePage active={"home"} />
      </Layout>
    </Layout>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.node,
};
