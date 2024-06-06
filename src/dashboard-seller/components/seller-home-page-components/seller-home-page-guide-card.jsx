import { IoIosArrowForward } from "react-icons/io";
import ButtonComponent from "../../../components/ui-components/button-component";

const SellerHomePageGuideCard = () => {
  return (
    <div className="w-full bg-[#ECFEF4] rounded-md">
      <div className="w-full flex bg-white items-center p-3 gap-x-2 justify-between rounded-md">
        <img src="https://images.tokopedia.net/img/ns_handbook.png" alt="guide book icon" className="w-[64px]" />
        <div className="flex  flex-col">
          <span className="font-bold text-base font-space-grotesk">Sudah siap berjualan?</span>
          <span className="font-space-grotesk text-xs text-gray-500">Baca Panduan Memulai Usaha di Tokopedia, yuk!</span>
        </div>
        <span className="text-xl">
          <IoIosArrowForward />
        </span>
      </div>

      <div className="w-full  justify-between flex items-center gap-x-2 py-2 p-3">
        <span className="text-xs font-space-grotesk">Apakah Kamu Masih Membutuhkan Info Ini?</span>
        <div className="flex gap-x-2">
          <ButtonComponent className="bg-white border rounded-lg text-xs font-space-grotesk" size="small">
            Ya
          </ButtonComponent>
          <ButtonComponent className="bg-white border rounded-lg text-xs font-space-grotesk" size="small">
            Tidak
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default SellerHomePageGuideCard;
