import { Layout } from "antd";
import BottombarMobileNavHomePage from "../bottombar-navigation-components/bottombar-mobile-nav-home-page-component";
import NavbarMobileReceiptPageComponent from "../navbar-components/navbar-mobile-receipt-page-component";
import PropTypes from "prop-types";

const ReceiptPageLayout = ({ children }) => {
  return (
    <Layout className={` min-h-screen relative max-w-[500px] mx-auto `}>
      <div className={`w-full border-b `}>
        <NavbarMobileReceiptPageComponent className={` max-w-[500px] bg-white`} />
      </div>
      <Layout className="relative  no-scrollbar ">
        {/* mobile greeting */}
        {children}
        <BottombarMobileNavHomePage active={"transaksi"} />
      </Layout>
    </Layout>
  );
};

export default ReceiptPageLayout;

ReceiptPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
