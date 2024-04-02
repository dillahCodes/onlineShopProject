import { Progress } from "antd";
import PropTypes from "prop-types";
import { IoIosStar } from "react-icons/io";

const RatingStatistics = ({ currentProductData, className }) => {
  const stars = [5, 4, 3, 2, 1];

  return (
    <div className={className}>
      {stars.map((star) => (
        <RatingItem key={star} star={star} currentProductData={currentProductData} />
      ))}
    </div>
  );
};

RatingStatistics.propTypes = {
  currentProductData: PropTypes.object,
  className: PropTypes.string,
};

const RatingItem = ({ star, currentProductData }) => {
  const filteredReviews = currentProductData?.review.filter((review) => review.rating === star);

  const getPercentOfRatingsByStar = (star) => {
    if (!currentProductData) return 0;
    const filteredReviews = currentProductData?.review.filter((review) => {
      return review.rating === star;
    });
    return Math.round((filteredReviews.length / currentProductData?.review.length) * 100);
  };

  return (
    <div className="flex items-center w-full gap-x-4">
      <div className="flex items-center gap-x-1 ">
        <IoIosStar />
        <span>{star}</span>
      </div>
      <Progress percent={getPercentOfRatingsByStar(star)} strokeColor={"black"} showInfo={false} />
      <span>{filteredReviews?.length}</span>
    </div>
  );
};

RatingItem.propTypes = {
  star: PropTypes.number,
  getPercentOfRatingsByStar: PropTypes.func,
  currentProductData: PropTypes.object,
};

export default RatingStatistics;
