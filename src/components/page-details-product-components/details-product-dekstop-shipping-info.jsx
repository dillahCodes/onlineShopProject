import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalShipping } from "react-icons/md";
import PropTypes from "prop-types";

const DetailsProductDekstopShippingInfo = ({ currentProductData }) => {
  return (
    <div className="w-full pb-3 mt-3 border-b">
      <h1 className="mb-2 text-lg font-bold capitalize font-space-grotesk">pengiriman</h1>
      <div className="flex flex-col w-full gap-y-1">
        <div className="flex items-center gap-x-2">
          <IoLocationOutline />
          <span className="capitalize">
            dikirm dari <span className="font-medium capitalize">kab.hatimu</span>
          </span>
        </div>
        <div className="flex gap-x-2">
          <MdOutlineLocalShipping />
          <div className="flex flex-col">
            <span className="capitalize">ongkir reguler 8 rb - 11,5rb</span>
            <span className="font-light capitalize">estimasi tiba 24 - 27 mar</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProductDekstopShippingInfo;

DetailsProductDekstopShippingInfo.propTypes = {
  currentProductData: PropTypes.object,
};
