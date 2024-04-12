import PropTypes from "prop-types";
import { Skeleton } from "antd";
import { isMobile } from "react-device-detect";

const DetailsProductProductCountAndMessageSkelekton = ({ active }) => {
  return (
    !isMobile && (
      <div className="w-full">
        <Skeleton.Input size="small" className="w-[90%] h-5" active={active} />
        <Skeleton.Input size="small" className="w-[60%] h-5 my-3" active={active} />
        <div className="flex items-center w-full my-3 gap-x-5">
          <Skeleton.Input size="small" className="" active={active} />
          <Skeleton.Input size="small" className="" active={active} />
        </div>
        <div className="flex flex-col w-full gap-y-3">
          <Skeleton.Button size="large" className="w-full" active={active} />
          <Skeleton.Button size="large" className="w-full" active={active} />
        </div>
      </div>
    )
  );
};

export default DetailsProductProductCountAndMessageSkelekton;

DetailsProductProductCountAndMessageSkelekton.propTypes = {
  active: PropTypes.bool,
};
