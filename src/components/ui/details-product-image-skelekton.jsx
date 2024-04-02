import { Skeleton } from "antd";
import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";

const DetailsProductImageSkeleton = ({ active }) => {
  return (
    !isMobile && (
      <div className="sticky top-0 w-[600px] h-fit flex flex-col gap-y-2">
        <Skeleton.Image className="w-full h-[300px]" active={active} />
        <div className="flex justify-between w-full gap-5">
          {[...Array(4)].map((_, index) => (
            <Skeleton.Image key={index} className="w-[70px] h-[70px]" active={active} />
          ))}
        </div>
      </div>
    )
  );
};

DetailsProductImageSkeleton.propTypes = {
  active: PropTypes.bool,
};

export default DetailsProductImageSkeleton;
