import { Tabs } from "antd";
import PropTypes from "prop-types";
import DetailsProductDekstopTitle from "./details-product-dekstop-title";
import DetailsProductDekstopOptionsProduct from "./details-product-dekstop-options-product";
import DetailsProductDekstopOwnerProductProfile from "./details-product-dekstop-owner-product-profile";
import DetailsProductDekstopShippingInfo from "./details-product-dekstop-shipping-info";
import DetailsProductDekstopReportThisProduct from "./details-product-desktop-report-this-product";

const items = [
  {
    key: "1",
    label: (
      <span className="relative text-lg font-medium capitalize cursor-pointer font-space-grotesk ">
        deksripsi produk
      </span>
    ),
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar elit eget elit condimentum egestas. Donec interdum urna vel urna ornare facilisis a sit amet nisi. Suspendisse posuere bibendum felis, non elementum ligula luctus a. Donec vel ante tempor, facilisis tortor quis, consectetur mi. Sed varius, felis vitae semper aliquet, nisi nibh volutpat velit, ut euismod urna nunc ut massa. Aliquam vel consequat leo, at pellentesque lacus. Nulla a aliquet dui. Integer ornare eros mollis sagittis mollis.",
  },
  {
    key: "2",
    label: (
      <span className="relative text-lg font-medium capitalize cursor-pointer font-space-grotesk">
        info penting
      </span>
    ),
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar elit eget elit condimentum egestas. Donec interdum urna vel urna ornare facilisis a sit amet nisi. Suspendisse posuere bibendum felis, non elementum ligula luctus a. Donec vel ante tempor, facilisis tortor quis, ",
  },
];

const DetailsProductDekstopInfo = ({ currentProductData }) => {
  return (
    <div className="border-b rounded-md ">
      {/* product name and price */}
      <DetailsProductDekstopTitle currentProductData={currentProductData} />
      {/* option product */}
      <DetailsProductDekstopOptionsProduct currentProductData={currentProductData} />
      {/* info and description product */}
      <Tabs className="py-3 mb-3 border-b" defaultActiveKey="1" items={items} />
      {/* owner product profile  */}
      <DetailsProductDekstopOwnerProductProfile currentProductData={currentProductData} />
      {/* shipping info */}
      <DetailsProductDekstopShippingInfo currentProductData={currentProductData} />
      {/* report this product */}
      <DetailsProductDekstopReportThisProduct currentProductData={currentProductData} />
    </div>
  );
};

export default DetailsProductDekstopInfo;

DetailsProductDekstopInfo.propTypes = {
  currentProductData: PropTypes.object,
};
