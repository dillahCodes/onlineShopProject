import { FiEdit2 } from "react-icons/fi";
import { useAuth } from "../../context/user-auth-context";

const UserProfileMobileData = () => {
  const { user } = useAuth();
  return (
    <section className="w-full flex items-center gap-x-5">
      <div className="max-w-16 max-h-16">
        <img
          src="https://images.tokopedia.net/img/cache/300/tPxBYm/2023/1/20/757f728e-d320-4f75-91ac-cedc5f1edc42.jpg"
          alt="user default image"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col">
        <span className="font-bold">{user?.name}</span>
        <span>62xxxxxxxxxxx</span>
      </div>
      <div className="text-xl ml-auto">
        <FiEdit2 />
      </div>
    </section>
  );
};

export default UserProfileMobileData;
