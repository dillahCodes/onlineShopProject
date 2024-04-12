import { Skeleton } from "antd";
import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";

const DetailsProductSkelekton = ({ active }) => {

  return (
    // desktop skelekton
    !isMobile && (
      <div className="flex flex-col gap-y-5">
        <Skeleton.Input size="small" className="w-full h-4" active={active} />
        <div className="flex w-full gap-x-1">
          {[...Array(3)].map((_, index) => (
            <Skeleton.Input key={index} size="small" className="w-full h-4" active={active} />
          ))}
        </div>
        <div className="w-[50%] flex gap-x-5">
          {[...Array(2)].map((_, index) => (
            <Skeleton.Input key={index} size="small" className="w-full h-4" active={active} />
          ))}
        </div>
        <div className="flex justify-between w-full gap-x-5">
          {[...Array(3)].map((_, index) => (
            <Skeleton.Input key={index} size="small" className="w-full h-10" active={active} />
          ))}
        </div>
        {[...Array(4)].map((_, index) => (
          <Skeleton.Input
            key={index}
            size="small"
            className={`${index === 0 ? "w-[50%]" : "w-full"} h-4`}
            active={active}
          />
        ))}
        <div className="w-full">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center w-full gap-x-5">
              <Skeleton.Avatar size={50} active={active} />
              <div className="flex flex-col gap-y-2">
                <Skeleton.Input className="w-[10%] h-4" active={active} />
                <Skeleton.Input className="w-[10%] h-4" active={active} />
              </div>
            </div>
            <Skeleton.Button className="w-[100px]" active={active} />
          </div>
          <div className="flex w-full my-2 justify-evenly gap-x-5">
            {[...Array(2)].map((_, index) => (
              <Skeleton.Input key={index} size="small" className="w-full h-4" active={active} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default DetailsProductSkelekton;

DetailsProductSkelekton.propTypes = {
  active: PropTypes.bool,
};
