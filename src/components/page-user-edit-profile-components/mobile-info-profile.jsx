import { IoIosArrowForward, IoIosInformationCircleOutline } from "react-icons/io";
import { useAuth } from "../../context/user-auth-context";

const MobileInfoProfile = () => {
  const { user } = useAuth();
  return (
    <section className="w-full p-3 border-b">
      <div className="w-full py-3 capitalize text-lg flex items-center gap-x-3">
        <h1 className=" font-medium">Info Profil</h1>
        <div>
          <IoIosInformationCircleOutline />
        </div>
      </div>

      <div className="w-full py-3 flex  flex-col gap-y-5">
        <div className="w-full flex items-center gap-x-2">
          <span className="min-w-[25%] text-base capitalize text-gray-500 truncate">nama</span>
          <span className="w-full text-lg truncate">{user.name}</span>
          <span className="text-lg">
            <IoIosArrowForward />
          </span>
        </div>
        <div className="w-full flex items-center gap-x-2">
          <span className="min-w-[25%] text-base capitalize text-gray-500 truncate">username</span>
          <span className="w-full text-lg text-gray-400 truncate">buat username yang unik</span>
          <span className="text-lg">
            <IoIosArrowForward />
          </span>
        </div>
        <div className="w-full flex items-center gap-x-2">
          <span className="min-w-[25%] text-base capitalize text-gray-500 truncate">bio</span>
          <span className="w-full text-lg text-gray-400 truncate">tulis bio tentangmu</span>
          <span className="text-lg">
            <IoIosArrowForward />
          </span>
        </div>
      </div>
    </section>
  );
};

export default MobileInfoProfile;
