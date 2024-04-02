import { Skeleton } from "antd";
import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";

const DetailsProudctRatingThisProductSkelekton = ({ active }) => {
  return (
    !isMobile && (
      <div className="w-full h-[900px] mt-10  flex gap-x-5 justify-between ">
        <div className="min-w-[300px]">
          <Skeleton.Input size="small" className="w-[90%] h-7" active={active} />
          {[...Array(2)].map((_, index) => (
            <Skeleton.Input key={index} className="w-full h-[300px] my-5" active={active} />
          ))}
        </div>
        <div className="flex flex-col w-full mt-10 h-fit">
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col gap-y-2">
              <Skeleton.Input size="small" className="w-[90%] h-7" active={active} />
            </div>
            <div className="flex items-center gap-x-2">
              {[...Array(2)].map((_, index) => (
                <Skeleton.Input size="small" key={index} className="w-[90%] h-7" active={active} />
              ))}
            </div>
          </div>
          <div className="w-full">
            <Skeleton.Input className="w-[70%] my-3 " active={active} />
          </div>
          <div className="flex flex-col w-full mt-10 gap-y-3">
            {[...Array(5)].map((_, index) => (
              <div className="w-full my-5" key={index}>
                <Skeleton.Input className="w-[50%] h-5" active={active} />
                <div className="flex items-center my-3 gap-x-5">
                  <Skeleton.Avatar size={50} active={active} />
                  <Skeleton.Input className="w-[50%] h-6" active={active} />
                </div>
                <div className="flex flex-col w-full gap-y-3">
                  {[...Array(2)].map((_, index) => (
                    <Skeleton.Input key={index} className="w-full h-5 " active={active} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default DetailsProudctRatingThisProductSkelekton;

DetailsProudctRatingThisProductSkelekton.propTypes = {
  active: PropTypes.bool,
};
