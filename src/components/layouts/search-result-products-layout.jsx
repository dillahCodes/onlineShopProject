import { Layout } from "antd";
import TokopediaFooter from "../ui-components/tokopedia-footer";
import PropTypes from "prop-types";
import NavbarMobileSearchResultPageComponent from "../navbar-components/navbar-mobile-search-result-page-component";

const SearchResultProductsLayout = ({ children }) => {
  return (
    <Layout className={` min-h-screen relative max-w-[500px] mx-auto   bg-white`}>
      <div className={`w-full border-b`}>
        <NavbarMobileSearchResultPageComponent className={`bg-white max-w-[500px]`} />
      </div>
      <Layout className={`relative min-h-screen overflow-y-scroll no-scrollbar mt-[65px] bg-white `}>
        {children}
        <TokopediaFooter />
      </Layout>
    </Layout>
  );
};

export default SearchResultProductsLayout;

SearchResultProductsLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
