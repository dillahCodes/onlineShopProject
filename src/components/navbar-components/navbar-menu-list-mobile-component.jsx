import { IoSettingsOutline } from "react-icons/io5";
import { RiFileList3Line } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShop } from "react-icons/ai";
import { TbUserExclamation } from "react-icons/tb";
import { LiaUserAstronautSolid } from "react-icons/lia";
import { BsQrCodeScan } from "react-icons/bs";
import { Layout } from "antd";
import { useAuth } from "../../context/user-auth-context";
import ButtonComponent from "../ui-components/button-component";
import { useNavigate } from "react-router-dom";
import formatCurrencyToIDR from "../../utils/format-currency";
import { IoIosArrowForward } from "react-icons/io";
import MobileTokopediaPlusOffer from "../ui-components/mobile-tokopedia-plus-offer";

const NavbarMenuListMobileComponent = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const goToComingSoonPage = () => navigate("/coming-soon");
  const goToUserProfile = () => navigate("/user");

  return (
    <Layout className="w-full h-full ">
      {/* login and register button if user is not login */}
      {!user && (
        <div className="flex w-full p-5 bg-white gap-x-5">
          <ButtonComponent
            onClick={() => navigate("/login")}
            className={"bg-transparent  border-black capitalize w-full"}
          >
            masuk
          </ButtonComponent>
          <ButtonComponent type="primary" onClick={() => navigate("/signup")} className={"capitalize w-full"}>
            daftar
          </ButtonComponent>
        </div>
      )}

      {/* user profile preview */}
      {user && (
        <section className="bg-white p-5 flex flex-col gap-y-2 ">
          <div className="flex items-center w-full gap-x-5 ">
            <div className="w-16 h-16 ">
              <img src={user?.avatar} alt="user default image" className="w-full h-full rounded-full object-cover" />
            </div>
            <div className="">
              {/* username */}
              <div className="flex items-center gap-x-1">
                <img
                  src="https://images.tokopedia.net/img/img/HThbdi/2023/01/13/pakai_promo_member_silver.png"
                  alt="user badge"
                  className="w-4 h-4"
                />
                <h1 className="text-base font-bold font-space-grotesk">{user?.name}</h1>
              </div>
              {/* gopay */}
              <div className="flex items-center gap-x-1" onClick={goToComingSoonPage}>
                <img
                  src="https://assets.tokopedia.net/asts/navigation-v2/global-menu/icon/gopay.svg"
                  alt="user badge"
                  className="w-4 h-4"
                />
                <span className="text-xs font-semibold text-gray-500 font-space-grotesk">
                  {formatCurrencyToIDR(0)} • Top-Up GoPay
                </span>
              </div>
              {/* saldo */}
              <div className="flex items-center gap-x-1 mt-1" onClick={goToComingSoonPage}>
                <img
                  src="https://assets.tokopedia.net/asts/navigation-v2/global-menu/icon/saldo_icon.svg"
                  alt="user badge"
                  className="w-4 h-4"
                />
                <span className="text-xs font-semibold text-gray-500 font-space-grotesk">
                  Saldo {formatCurrencyToIDR(0)}
                </span>
              </div>
            </div>
            <div className="ml-auto text-2xl" onClick={goToUserProfile}>
              <IoSettingsOutline />
            </div>
          </div>
          {/* tokopedia plus */}
          <MobileTokopediaPlusOffer />
          <section className="w-full flex gap-x-2">
            {/* toko saya */}
            <div className="w-full p-2 border rounded-lg flex items-center gap-x-0.5" onClick={goToComingSoonPage}>
              {!user?.username && <span className="font-bold capitalize">toko saya</span>}
              <span className="text-xs font-bold">{user?.username}</span>
              <IoIosArrowForward className="ml-auto text-lg" />
            </div>
            {/* daftar afiliate */}
            <div className="w-full p-2 border flex rounded-lg" onClick={goToComingSoonPage}>
              <span className=" font-semibold capitalize">daftar afiliate</span>
              <IoIosArrowForward className="ml-auto text-lg" />
            </div>
          </section>
        </section>
      )}

      {/* menu list */}
      <div className="flex flex-col w-full p-5 mt-3 bg-white gap-y-5">
        <div
          onClick={goToComingSoonPage}
          className="flex items-center w-full text-xl capitalize font-space-grotesk gap-x-5"
        >
          <RiFileList3Line className="text-xl" />
          <span className="text-base">daftar transaksi</span>
        </div>
        <div
          onClick={goToComingSoonPage}
          className="flex items-center w-full text-xl capitalize font-space-grotesk gap-x-5"
        >
          <FaRegStar className="text-xl" />
          <span className="text-base">ulasan</span>
        </div>
        <div
          onClick={goToComingSoonPage}
          className="flex items-center w-full text-xl capitalize font-space-grotesk gap-x-5"
        >
          <FaRegHeart className="text-xl" />
          <span className="text-base">whishlist</span>
        </div>
        <div
          onClick={goToComingSoonPage}
          className="flex items-center w-full text-xl capitalize font-space-grotesk gap-x-5"
        >
          <AiOutlineShop className="text-xl" />
          <span className="text-base">toko yang di-follow</span>
        </div>
      </div>

      {/* help list */}
      <div className="flex flex-col w-full h-full p-5 mt-3 bg-white gap-y-5">
        <div
          onClick={goToComingSoonPage}
          className="flex items-center w-full text-xl capitalize font-space-grotesk gap-x-5"
        >
          <TbUserExclamation className="text-xl" />
          <span className="text-base">pesanan dikomplain</span>
        </div>
        <div
          onClick={goToComingSoonPage}
          className="flex items-center w-full text-xl capitalize font-space-grotesk gap-x-5"
        >
          <LiaUserAstronautSolid className="text-xl" />
          <span className="text-base">bantuan</span>
        </div>
        <div
          onClick={goToComingSoonPage}
          className="flex items-center w-full text-xl capitalize font-space-grotesk gap-x-5"
        >
          <BsQrCodeScan className="text-xl" />
          <span className="text-base">scan kode qr</span>
        </div>
      </div>
    </Layout>
  );
};

export default NavbarMenuListMobileComponent;
