import PropTypes from "prop-types";

const DetailsProductMobileDiscussHeader = ({ image, productName, className }) => {
  return (
    <section className={`w-full flex gap-x-3 items-center ${className}`}>
      <img src={image} alt={productName} width={65} className="object-contain rounded-lg" />
      <h1 className=" font-bold text-[14px] font-space-grotesk w-full overflow-hidden overflow-ellipsis whitespace-normal line-clamp-2">
        {productName}
      </h1>
    </section>
  );
};

export default DetailsProductMobileDiscussHeader;

DetailsProductMobileDiscussHeader.propTypes = {
  image: PropTypes.string,
  productName: PropTypes.string,
  className: PropTypes.string,
};
