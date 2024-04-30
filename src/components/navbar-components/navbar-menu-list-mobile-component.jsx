import { IoSettingsOutline } from "react-icons/io5";
import { RiFileList3Line } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShop } from "react-icons/ai";
import { TbUserExclamation } from "react-icons/tb";
import { LiaUserAstronautSolid } from "react-icons/lia";
import { BsQrCodeScan } from "react-icons/bs";
import { Avatar, Layout } from "antd";
import { useAuth } from "../../context/user-auth-context";
import ButtonComponent from "../ui-components/button-component";
import { useNavigate } from "react-router-dom";

const NavbarMenuListMobileComponent = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const goToComingSoonPage = () => {
    navigate("/coming-soon");
  };

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
        <div className="flex items-center w-full p-5 bg-white gap-x-5 ">
          <div>
            <Avatar className="text-xl capitalize bg-black" size={55}>
              {user?.name[0]}
            </Avatar>
          </div>
          <div>
            <h1 className="text-xl font-bold font-space-grotesk">{user?.name}</h1>
            <p className="text-base font-space-grotesk">{user?.email}</p>
          </div>
          <div className="ml-auto text-2xl">
            <IoSettingsOutline />
          </div>
        </div>
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
