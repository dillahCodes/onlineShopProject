import { MdLogout } from "react-icons/md";
import useLogout from "../../features/auth/hooks/use-logout";

const UserProfileMobileLogout = () => {
  const { logout } = useLogout();
  return (
    <section className="w-full py-2 bg-zinc-100" onClick={logout}>
      <div className="w-full bg-white p-4 flex items-center gap-x-3">
        <div className="text-lg">
          <MdLogout />
        </div>
        <span className="capitalize font-bold font-space-grotesk">keluar akun</span>
      </div>
    </section>
  );
};

export default UserProfileMobileLogout;
