import { Layout } from "antd";
import BottombarMobileNavHomePage from "../bottombar-navigation-components/bottombar-mobile-nav-home-page-component";
import PropTypes from "prop-types";
import NavbarMobileWishlistPageComponent from "../navbar-components/navbar-mobile-wishlist-page-component";

const WishListPageLayout = (props) => {
  const { children } = props;

  return (
    <Layout className={` min-h-screen relative max-w-[500px] mx-auto `}>
      <div className={`w-full border-b `}>
        <NavbarMobileWishlistPageComponent className={` capitalize max-w-[500px] bg-white`} />
      </div>
      <Layout className="relative  no-scrollbar ">
        {/* mobile greeting */}
        {children}
        <BottombarMobileNavHomePage active={"wishlist"} />
      </Layout>
    </Layout>
  );
};

export default WishListPageLayout;

WishListPageLayout.propTypes = {
  children: PropTypes.node,
};
