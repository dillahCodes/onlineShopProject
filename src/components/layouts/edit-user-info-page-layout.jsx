import { Layout } from "antd";
import { useLocation } from "react-router-dom";
import NavbarBackComponent from "../navbar-components/navbar-back-component";
import PropTypes from "prop-types";

const getLocation = ({ pathname, search }) => {
  const state = new URLSearchParams(search);
  switch (pathname) {
    case "/user/profile/name":
      return "ubah nama";
    case "/user/profile/username":
      return "tambah username";
    case "/user/profile/email":
      return "ubah email";
    case "/user/profile/bio":
      return "ubah bio";
    case "/user/profile/phone":
      return state.get("st") === "consequence-info" ? "ubah nomor hp" : "verifikasi";
    case "/user/profile/gender":
      return "ubah jenis kelamin";
    case "/user/profile/birth":
      return "ubah tangal lahir";
    case "/user/settings/security":
      return "keamanan Akun";
    case "/user/settings/security/reset-password":
      return "reset password";
    default:
      return "ubah info";
  }
};

const EditUserInfoPageLayout = ({ children }) => {
  const location = useLocation();

  return (
    <Layout className={` min-h-screen relative max-w-[500px] mx-auto `}>
      <section className={`w-full py-3 px-2 border-b bg-white flex items-center gap-x-3  `}>
        <NavbarBackComponent size={25} className={"text-gray-400"} onClick={() => history.back()} />
        <h1 className="font-bold text-[18px] font-space-grotesk capitalize">{getLocation(location)}</h1>
      </section>
      <Layout className="relative  no-scrollbar  bg-white  z-10">{children}</Layout>
    </Layout>
  );
};

export default EditUserInfoPageLayout;

EditUserInfoPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
