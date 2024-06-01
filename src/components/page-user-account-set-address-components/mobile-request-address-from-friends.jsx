import { IoShareSocialOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

const MobileRequestAddressFromFriends = () => {
  return (
    <div className="w-full p-2 border rounded-md">
      <div className="w-full flex items-center gap-x-3">
        <span className="text-lg ml-auto text-[#00AA5B]">
          <IoShareSocialOutline />
        </span>
        <div className="flex flex-col w-full truncate">
          <span className="text-sm font-bold font-space-grotesk capitalize truncate">minta alamat keteman kamu</span>
          <span className="text-[10px] text-gray-500 font-space-grotesk capitalize truncate">Lebih mudah dan cepat mendapatkan alamat teman cukup klik di sini.</span>
        </div>
        <span className="text-lg ml-auto">
          <IoIosArrowForward />
        </span>
      </div>
    </div>
  );
};

export default MobileRequestAddressFromFriends;
