import { Layout } from "antd";
import PropTypes from "prop-types";
import NavbarUserPage from "../navbar-components/navbar-mobile-user-page";

const UserPageLayout = ({ children }) => {
  return (
    <Layout className={` min-h-screen relative max-w-[500px] mx-auto `}>
      <div className={`w-full border-b `}>
        <NavbarUserPage className={` max-w-[500px]`} />
      </div>
      <Layout className="relative  no-scrollbar mt-12 z-10">{children}</Layout>
    </Layout>
  );
};

export default UserPageLayout;

UserPageLayout.propTypes = {
  children: PropTypes.node,
};
