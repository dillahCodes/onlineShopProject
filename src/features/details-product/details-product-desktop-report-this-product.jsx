import { MdOutlineReportProblem } from "react-icons/md";
import PropTypes from "prop-types";

const DetailsProductDekstopReportThisProduct = ({ currentProductData }) => {
  return (
    <div className="flex items-center justify-between w-full pb-3 mt-3 capitalize">
      <span>ada masalah dengan produk ini?</span>
      <div className="flex items-center font-bold cursor-pointer">
        <MdOutlineReportProblem />
        <span className="ml-2">laporkan</span>
      </div>
    </div>
  );
};

export default DetailsProductDekstopReportThisProduct;

DetailsProductDekstopReportThisProduct.propTypes = {
  currentProductData: PropTypes.object,
};
