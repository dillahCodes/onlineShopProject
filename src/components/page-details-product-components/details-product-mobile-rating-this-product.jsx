import PropTypes from "prop-types";
import "./style/details-product-mobile-rating-this-product.css";
import ButtonComponent from "../ui-components/button-component";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { motion } from "framer-motion";
import { Avatar } from "antd";
import { FaRegUser } from "react-icons/fa6";
import PhotoCommnentsSlider from "../ui-components/photo-comment-slider";
import { useNavigate } from "react-router-dom";
import noComent from "../../assets/no_comment.png";

const DetailsProductMobileRatingThisProduct = ({ productData }) => {
  const navigate = useNavigate();
  const reviewData = productData?.review;

  const getAverageRating = () => {
    return (
      productData.review.reduce((acc, curr) => acc + curr.rating, 0) /
      productData.review.length
    ).toFixed(1);
  };

  const getProductRatingLength = () => {
    return productData.review?.filter((review) => review.rating !== 0).length;
  };

  const getReviewLength = () => {
    return productData.review?.filter((review) => review.comment, 0).length;
  };

  const handleAllReview = () => navigate(`/product/${productData.product_id}/reviews`);

  return (
    <>
      <div className="w-full p-3 mt-2 bg-white">
        {/* review title */}
        <div className="flex items-center justify-between w-full">
          <h1 className="text-lg font-bold capitalize font-space-grotesk ">ulasan pembeli</h1>
          <ButtonComponent
            onClick={handleAllReview}
            className={
              "capitalize border-none shadow-none p-0 text-[#00AA5B] font-medium font-space-grotesk"
            }
          >
            lihat semua
          </ButtonComponent>
        </div>
        {/* star and rating */}
        {reviewData.length !== 0 && (
          <div className="flex w-full mt-3 gap-x-2 font-space-grotesk">
            <div className="flex items-center text-lg font-bold gap-x-1">
              <div>
                <IoIosStar />
              </div>
              <span>{getAverageRating()}</span>
            </div>
            <div className="flex items-center gap-x-1">
              <span>{getProductRatingLength()} rating</span>
              <span>•</span>
              <span>{getReviewLength()} ulasan</span>
            </div>
          </div>
        )}
        {/* user review image */}
        {reviewData.length !== 0 && <PhotoCommnentsSlider />}
        {/* only 1 best review  for display */}
        {reviewData.length !== 0 && (
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            key={reviewData[0].review_id}
            className="w-full py-5"
          >
            <div className="flex w-full mb-3 gap-x-1">
              {[...Array(reviewData[0]?.rating)].map((_, index) => {
                return <IoIosStar className="text-xl" key={index} />;
              })}
              {[...Array(5 - reviewData[0]?.rating)].map((_, index) => {
                return <IoIosStarOutline className="text-xl" key={index} />;
              })}
            </div>
            <div className="w-full">
              <div className="flex items-center w-full gap-x-2">
                <Avatar size={35} icon={<FaRegUser />} />
                <span className="font-bold font-space-grotesk">{reviewData[0].user.name}</span>
              </div>
              <div className="flex font-light gap-x-1 font-space-grotesk">
                <span className="capitalize">variant:</span>
                <span>null</span>
              </div>
            </div>
            <p className="mt-5 font-space-grotesk">{reviewData[0].comment}</p>
          </motion.div>
        )}
        {reviewData.length === 0 && (
          <div className="flex flex-wrap justify-center w-full p-5 mt-10 border border-black rounded-md gap-x-20">
            <img src={noComent} width={170} alt="" />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold capitalize font-space-grotesk">sorry...</h1>
              <span className="mt-2 text-sm font-space-grotesk">
                tidak ada ulasan untuk di tampilkan
              </span>
              <ButtonComponent
                onClick={() => history.back()}
                className={"mt-10 capitalize font-space-grotesk font-medium"}
                type="primary"
              >
                kembali
              </ButtonComponent>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DetailsProductMobileRatingThisProduct;

DetailsProductMobileRatingThisProduct.propTypes = {
  productData: PropTypes.object,
};
