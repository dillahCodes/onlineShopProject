import { Layout } from "antd";
import PropTypes from "prop-types";
import TokopediaFooter from "../ui-components/tokopedia-footer";
import NavbarMobileDetailsProductPageComponent from "../navbar-components/navbar-mobile-details-product-page-component";

const DetailsProductLayout = ({ children }) => {
  return (
    <Layout className={` min-h-screen relative max-w-[500px] mx-auto `}>
      <div className={`w-full border-b`}>
        <NavbarMobileDetailsProductPageComponent className={`bg-white max-w-[500px]`} />
      </div>
      <Layout className={`relative overflow-y-scroll no-scrollbar mt-[65px]`}>
        {children}
        <TokopediaFooter />
      </Layout>
    </Layout>
  );
};

export default DetailsProductLayout;

DetailsProductLayout.propTypes = {
  children: PropTypes.node,
};
