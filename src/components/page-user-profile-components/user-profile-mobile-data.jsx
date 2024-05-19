import { FiEdit2 } from "react-icons/fi";
import { useAuth } from "../../context/user-auth-context";
import { useNavigate } from "react-router-dom";

const UserProfileMobileData = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  return (
    <section className="w-full flex items-center gap-x-5">
      <div className="w-16 h-16 ">
        <img src={user?.avatar} alt="user default image" className="w-full h-full rounded-full object-cover" />
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-base">{user?.name}</span>
        <span onClick={() => navigate("/user/profile/phone?st=consequence-info")}>
          {user?.phone_number || "masukan nomor hp"}
        </span>
      </div>
      <div className="text-xl ml-auto" onClick={() => navigate("/user/settings")}>
        <FiEdit2 />
      </div>
    </section>
  );
};

export default UserProfileMobileData;
