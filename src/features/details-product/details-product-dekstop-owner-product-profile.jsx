import { Avatar } from "antd";
import { FaRegUser } from "react-icons/fa6";
import ButtonComponent from "../../components/ui/button-component";
import { IoIosStarOutline } from "react-icons/io";
import { IoTimeOutline } from "react-icons/io5";
import PropTypes from "prop-types";

const DetailsProductDekstopOwnerProductProfile = ({ currentProductData }) => {
  return (
    <div className="w-full pb-3 mt-3 border-b">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-x-3">
          <Avatar size={40} icon={<FaRegUser className="text-base" />} />
          <div className="flex flex-col">
            <span className="font-bold font-space-grotesk">{currentProductData.owner.name}</span>
            <span>
              online <span className="font-medium font-space-grotesk">0 jam lalu</span>
            </span>
          </div>
        </div>
        <ButtonComponent
          className={"capitalize text-black border-black font-bold font-space-grotesk"}
          ghost
        >
          follow
        </ButtonComponent>
      </div>
      <div className="flex items-center justify-center w-full mt-3 font-space-grotesk gap-x-5">
        <div className="flex items-center gap-x-1">
          <IoIosStarOutline className="text-base" />
          <span className="truncate">
            <span className="font-medium">0.0</span> rata-rata ulasan
          </span>
        </div>
        <div className="inline-block rounded-full  w-[1px] h-[15px] bg-black" />
        <div className="flex items-center gap-x-1">
          <IoTimeOutline className="text-base" />
          <span className="truncate">
            ± <span className="font-medium">0 jam</span> pesanan di proses
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetailsProductDekstopOwnerProductProfile;

DetailsProductDekstopOwnerProductProfile.propTypes = {
  currentProductData: PropTypes.object,
};
