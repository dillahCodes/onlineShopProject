import { CiYoutube } from "react-icons/ci";
import { IoLogoInstagram, IoPhonePortraitOutline } from "react-icons/io5";
import { SlSocialFacebook } from "react-icons/sl";

const NavbarSellerAppComponent = () => {
  return (
    <div className="w-full flex justify-between py-2 px-5 font-space-grotesk">
      <div className="flex items-center gap-x-2 text-gray-400 truncate ">
        <span>
          <IoPhonePortraitOutline />
        </span>
        <span className="text-xs hover:text-[#00aa5b] truncate">Download Tokopedia Seller Apps</span>
      </div>
      <div className="flex  items-center gap-x-3 capitalize text-xs text-gray-400 truncate">
        <span className="hover:text-[#00aa5b] truncate">pengaturan cookie</span>
        <span className="hover:text-[#00aa5b] truncate">pengaturan Privasi</span>
        <span className="hover:text-[#00aa5b] truncate">Hak Kekayaan Intelektual</span>
        <span className="hover:text-[#00aa5b] truncate">hak kekayaan intelektual</span>
        <span className="hover:text-[#00aa5b] truncate">mitra tokopedia</span>
        <span className="flex gap-x-1 items-center truncate">
          <span className="hover:text-[#00aa5b] truncate">media sosial</span>
          <span className="text-sm">
            <IoLogoInstagram />
          </span>
          <span className="text-sm">
            <CiYoutube />
          </span>
          <span className="text-sm">
            <SlSocialFacebook />
          </span>
        </span>
      </div>
    </div>
  );
};

export default NavbarSellerAppComponent;
