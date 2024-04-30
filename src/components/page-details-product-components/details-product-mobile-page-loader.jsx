import { Skeleton } from "antd";
import PropTypes from "prop-types";
import SliderProductComponent from "../ui-components/slider-product-component";

const DetailsProductMobilePageLoader = ({ active }) => {
  return (
    <div className="w-full">
      {/* details image skelekton */}
      <Skeleton.Image size="large" className="w-full h-[300px]" active={active} />
      {/* title and price skelekton */}
      <div className="flex flex-col w-full p-5 bg-white gap-y-5">
        <Skeleton.Input size="small" className="w-[60%] h-7" active={active} />
        <div className="flex w-full">
          <Skeleton.Input size="small" className="w-[80%] h-7" active={active} />
          <Skeleton.Input size="small" className=" h-7" active={active} />
        </div>
      </div>
      {/* buttons info skelekton */}
      <div className="flex flex-wrap justify-between w-full p-5 mt-3 bg-white gap-y-5">
        <Skeleton.Input size="small" className="w-[50%] h-7" active={active} />
        <div className="flex w-full gap-3 overflow-x-scroll">
          {[...Array(3)].map((_, index) => (
            <Skeleton.Input
              key={index}
              size="small"
              className={` max-w-sm h-7`}
              active={active}
            />
          ))}
        </div>
      </div>
      {/* description skelekton */}
      <div className="w-full p-5 mt-3 bg-white">
        <Skeleton.Input size="small" className="w-[70%] h-7" active={active} />
        <div className="flex justify-between w-full mt-3 gap-x-5 ">
          <Skeleton.Input size="small" className="w-full h-7" active={active} />
          <Skeleton.Input size="small" className="w-full h-7" active={active} />
        </div>
        <div className="flex justify-between w-full mt-3 gap-x-5 ">
          <Skeleton.Input size="small" className="w-full h-7" active={active} />
          <Skeleton.Input size="small" className="w-full h-7" active={active} />
        </div>
      </div>
      {/* owner profile skelekton */}
      <div className="w-full p-5 mt-3 bg-white">
        <div className="flex items-center justify-between w-full gap-5">
          <div className="flex items-center gap-x-5">
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
        <div className="w-full mt-3 bg-white">
          <div className="flex flex-col w-full mt-10 gap-y-3">
            {[...Array(1)].map((_, index) => (
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

      {/* slider skelekton */}
      {Array.from({ length: 3 }).map((_, index) => (
        <SliderProductComponent className={"mt-2  bg-white p-3"} key={index} />
      ))}
    </div>
  );
};

export default DetailsProductMobilePageLoader;

DetailsProductMobilePageLoader.propTypes = {
  active: PropTypes.bool,
};
