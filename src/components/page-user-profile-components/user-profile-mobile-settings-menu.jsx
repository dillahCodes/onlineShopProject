import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const userProfileSettingsMenuList = [
  {
    icon: "https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/d6d41119.svg",
    title: "daftar alamat",
    detail: "atur alamat pengiriman belanjaan",
    to: "/user/settings/address",
  },
  {
    icon: "https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/d9e7bae6.svg",
    title: "rekening bank",
    detail: "Tarik Saldo Tokopedia ke rekening tujuan",
    to: "/coming-soon",
  },
  {
    icon: "https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/fd0d9f53.svg",
    title: "pembayaran instan",
    detail: "W-Wallet, kartu kredit, & debit instan terdaftar",
    to: "/coming-soon",
  },
  {
    icon: "https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/501e63db.svg",
    title: "keamanan akun",
    detail: "kata sandi, PIN , & Verifikasi diri",
    to: "/user/settings/security",
  },
  {
    icon: "https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/d2063cbe.svg",
    title: "notifikasi",
    detail: "Atur segala jenis pesan notifikasi",
    to: "/coming-soon",
  },
  {
    icon: "https://assets.tokopedia.net/asts/mode-screen-icon.svg",
    title: "mode tampilan",
    detail: "Aktifkan tampilan buta warna di Tokopedia",
    to: "/coming-soon",
  },
  {
    icon: "https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/6358dc1e.svg",
    title: "akun yang tersambung",
    detail: "Atur akun yang tersambung ke Tokopedia",
    to: "/coming-soon",
  },
];

const UserProfileMobileSettingsMenu = ({ className }) => {
  const navigate = useNavigate();
  return (
    <section className={`w-full ${className}`}>
      <h1 className="text-base text-gray-500 mb-5 font-bold font-space-grotesk capitalize">pengaturan akun</h1>
      <div className="w-full flex flex-col gap-y-4">
        {userProfileSettingsMenuList.map((item, index) => (
          <div key={index} className="flex items-center gap-x-3" onClick={() => navigate(item.to, { replace: true })}>
            <img src={item.icon} className="w-6 h-6" alt={item.title} />
            <div className="flex flex-col">
              <span className="font-bold capitalize text-base">{item.title}</span>
              <span>{item.detail}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserProfileMobileSettingsMenu;

UserProfileMobileSettingsMenu.propTypes = {
  className: PropTypes.string,
};
