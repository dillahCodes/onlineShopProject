import PropTypes from "prop-types";
import { IoIosStar } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";
import { Select, Tooltip } from "antd";
import { useEffect, useState } from "react";
import CommnetsComponent from "../ui-components/comments-component";
import PhotoCommnentsSlider from "../ui-components/photo-comment-slider";
import RatingStatistics from "../ui-components/rating-statistics";

const selectItems = [
  {
    id: 1,
    value: "terbaru",
  },
  {
    id: 2,
    value: "rating tertinggi",
  },
  {
    id: 3,
    value: "rating terendah",
  },
];

const DetailsProductDekstopRatingThisProduct = ({ currentProductData }) => {
  const [comentSortedBy, setComentSortedBy] = useState("terbaru");
  const [comentData, setComentData] = useState({
    reviewShow: 0,
    reviewTotal: 0,
  });
  const handleChange = (value) => {
    setComentSortedBy(value);
  };

  useEffect(() => {
    if (currentProductData) {
      setComentData({
        reviewShow: currentProductData?.review.length,
        reviewTotal: currentProductData?.review.length,
      });
    }
  }, [currentProductData]);

  return (
    <div className="w-full h-[900px] mt-10  flex gap-x-5 justify-between ">
      {/* buyer rating chart */}
      <div className="min-w-[300px]">
        <h1 className="text-xl font-bold capitalize font-space-grotesk">ulasan pembeli</h1>
        <BuyerRatingChart currentProductData={currentProductData} />
        <div className="max-w-[300px] h-[300px] text-lg bg-red-400 sticky top-5 mt-5 flex items-center justify-center ">
          advance sort comment (belum jadi)
        </div>
      </div>
      <div className="flex flex-col w-full mt-10 h-fit">
        {/* title and select */}
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-base font-bold capitalize font-space-grotesk">
              ulasan pilihan
            </h1>
            <span className="text-sm font-space-grotesk">
              menampilkan {comentData.reviewShow} dari {comentData.reviewTotal} ulasan
            </span>
          </div>
          <div className="flex items-center gap-x-2">
            <span className="text-sm font-bold capitalize font-space-grotesk">ururan</span>
            <Select
              size="large"
              className="w-[150px] font-space-grotesk"
              defaultValue={selectItems[0].value}
              onChange={handleChange}
              options={selectItems}
            />
          </div>
        </div>

        {/* product review photo */}
        <div className="max-w-[800px]">
          <PhotoCommnentsSlider />
        </div>

        {/* coment component */}
        <CommnetsComponent comentData={currentProductData?.review} sortTo={comentSortedBy} />
      </div>
    </div>
  );
};

export default DetailsProductDekstopRatingThisProduct;

DetailsProductDekstopRatingThisProduct.propTypes = {
  currentProductData: PropTypes.object,
};

const BuyerRatingChart = ({ currentProductData }) => {
  const getPercentOfRatings = () => {
    if (currentProductData?.review.length === 0 || !currentProductData) return 0;
    const filteredReviews = currentProductData?.review.filter((review) => {
      return review.rating === 5 || review.rating === 4;
    });
    return Math.round((filteredReviews.length / currentProductData?.review.length) * 100);
  };

  const getAverageRating = () => {
    if (currentProductData?.review.length === 0 || !currentProductData) return 0;
    return (
      currentProductData?.review.reduce((acc, curr) => acc + curr.rating, 0) /
      currentProductData.review.length
    ).toFixed(1);
  };

  return (
    <div className="w-full h-[300px] flex flex-col  mt-5">
      {/* average rating  */}
      <div className="flex items-center justify-center gap-x-2 font-space-grotesk">
        <IoIosStar className="text-4xl" />
        <div className="">
          <span className="text-5xl">{getAverageRating()}</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-400">5.0</span>
        </div>
      </div>
      {/* rating stat  */}
      <div className="flex items-center justify-center w-full mx-auto mt-3 font-medium gap-x-2 font-space-grotes">
        <span>{getPercentOfRatings()} % pembeli merasa puas</span>
        <Tooltip
          placement="bottom"
          title={
            <span className="text-xs capitalize font-space-grotesk">
              Dihitung dari jumlah rating positif (bintang 4 dan 5) dibagi dengan total rating.
            </span>
          }
        >
          <span>
            <CiCircleInfo />
          </span>
        </Tooltip>
      </div>
      <div className="flex items-center justify-center w-full font-medium gap-x-2 font-space-grotesk">
        <span>
          {currentProductData?.review.filter((review) => review.rating).length} rating
        </span>
        <span>•</span>
        <span>
          {currentProductData?.review.filter((review) => review.comment).length} ulasan
        </span>
      </div>
      {/* rating chart */}
      <RatingStatistics className={"w-full p-5"} currentProductData={currentProductData} />
    </div>
  );
};

BuyerRatingChart.propTypes = {
  currentProductData: PropTypes.object,
};
