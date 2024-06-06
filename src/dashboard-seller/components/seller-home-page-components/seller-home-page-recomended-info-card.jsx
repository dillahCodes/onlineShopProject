import { BsThreeDots } from "react-icons/bs";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoWarningOutline } from "react-icons/io5";

const SellerHomePageRecomendedInfoCard = () => {
  return (
    <div className="w-full bg-white rounded-md p-3">
      <div className="w-full flex items-center gap-x-1 font-bold capitalize text-base">
        <span className="text-base">Rekomendasi</span>
        <span className="text-lg">
          <IoIosInformationCircleOutline />
        </span>
        <span className="text-lg ml-auto">
          <BsThreeDots />
        </span>
      </div>

      <div className="w-full mt-5">
        <div className="w-full flex gap-x-2 items-center">
          <span className="text-base text-yellow-600">
            <IoWarningOutline />
          </span>
          <span className="font-space-grotesk capitalize text-gray-500 font-medium">belum tau mau jualan apa?</span>
        </div>
        <div className="w-full flex items-center gap-x-3 mt-2">
          <h1 className="text-sm font-bold capitalize font-space-grotesk">Cek Wawasan Pasar buat cari tahu produk yang lagi laku</h1>
          <span>
            <img src="https://images.tokopedia.net/img/wawasan_pasar@3x.png?ect=4g" alt="icon market" className="w-[50px]" />
          </span>
        </div>
        <span className="font-space-grotesk text-gray-500 text-xs">Rekomendasi Fitur</span>
      </div>
    </div>
  );
};

export default SellerHomePageRecomendedInfoCard;
