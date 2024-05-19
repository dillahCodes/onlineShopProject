import { IoIosArrowForward, IoIosInformationCircleOutline } from "react-icons/io";
import { useAuth } from "../../context/user-auth-context";
import { useNavigate } from "react-router-dom";

const MobileInfoProfile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <section className="w-full p-3 border-b">
      <div className="w-full py-3 capitalize text-lg flex items-center gap-x-3">
        <h1 className=" font-medium text-base">Info Profil</h1>
        <div>
          <IoIosInformationCircleOutline />
        </div>
      </div>

      <div className="w-full py-3 flex  flex-col gap-y-5 font-space-grotesk">
        <div className="w-full flex items-center gap-x-2">
          <span className="min-w-[25%] text-[14px] capitalize text-gray-500 truncate">nama</span>
          <span className="w-full text-[14px] truncate">{user?.name}</span>
          <span className="text-lg" onClick={() => navigate("/user/profile/name")}>
            <IoIosArrowForward />
          </span>
        </div>
        <div className="w-full flex items-center gap-x-2">
          <span className="min-w-[25%] text-[14px] capitalize text-gray-500 truncate">username</span>
          <span className={`w-full text-[14px] ${!user.username && "text-gray-400"} truncate`}>
            {user.username || "buat username yang unik"}
          </span>
          <span className="text-lg" onClick={() => navigate("/user/profile/username")}>
            <IoIosArrowForward />
          </span>
        </div>
        <div className="w-full flex items-center gap-x-2">
          <span className="min-w-[25%] text-[14px] capitalize text-gray-500 truncate">bio</span>
          <span className={`w-full text-[14px] ${!user.bio && "text-gray-400"} truncate`}>
            {user.bio || "tulis bio tentangmu"}
          </span>
          <span className="text-lg" onClick={() => navigate("/user/profile/bio")}>
            <IoIosArrowForward />
          </span>
        </div>
      </div>
    </section>
  );
};

export default MobileInfoProfile;
