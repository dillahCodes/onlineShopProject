import { useNavigate } from "react-router-dom";
import MobileUserSecurityListComponent from "./mobile-user-security-list-component";

const securityListServices = [
  {
    title: "Kata Sandi",
    goto: "/user/settings/security/reset-password",
  },
  {
    title: "PIN tokopedia",
    goto: "/coming-soon",
  },
  {
    title: "Authenticator",
    goto: "/coming-soon",
  },
  {
    title: "Verifikasi Instan",
    goto: "/coming-soon",
  },
];

const MobileUserAccountSecurity = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full pl-4">
      {securityListServices.map((data, index) => {
        return <MobileUserSecurityListComponent key={index} title={data.title} onClick={() => navigate(data.goto)} className="border-b border-slate-200" />;
      })}
    </section>
  );
};

export default MobileUserAccountSecurity;
