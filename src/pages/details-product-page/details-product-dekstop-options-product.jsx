import PropTypes from "prop-types";
const DetailsProductDekstopOptionsProduct = ({ currentProductData }) => {
  return (
    <div className="w-full py-2 mt-3 border-t border-b">
      <div className="w-full">
        <h1 className="text-lg font-medium capitalize font-space-grotesk ">pilih warna:</h1>
        <div className="flex w-full my-2 gap-x-2">
          <div className="px-4 py-2 border rounded-md cursor-pointer w-fit hover:border-black hover:border-[2px] transition-all duration-300">
            warna 1
          </div>
          <div className="px-4 py-2 border rounded-md cursor-pointer w-fit hover:border-black hover:border-[2px] transition-all duration-300">
            warna 2
          </div>
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-lg font-medium capitalize font-space-grotesk ">pilih ukuran:</h1>
        <div className="flex w-full my-2 gap-x-2">
          <div className="px-4 py-2 border rounded-md cursor-pointer w-fit hover:border-black hover:border-[2px] transition-all duration-300">
            ukuran 1
          </div>
          <div className="px-4 py-2 border rounded-md cursor-pointer w-fit hover:border-black hover:border-[2px] transition-all duration-300">
            ukuran 2
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProductDekstopOptionsProduct;

DetailsProductDekstopOptionsProduct.propTypes = {
  currentProductData: PropTypes.object,
};
