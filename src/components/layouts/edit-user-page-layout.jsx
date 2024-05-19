import { Layout } from "antd";
import NavbarBackComponent from "../navbar-components/navbar-back-component";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const EditUserPageLayout = ({ children }) => {
  const navigate = useNavigate();
  return (
    <Layout className={` min-h-screen relative max-w-[500px] mx-auto `}>
      <section className={`w-full py-3 px-2 border-b bg-white flex items-center gap-x-3  `}>
        <NavbarBackComponent size={25} className={"text-gray-400"} onClick={() => navigate(-1)} />
        <h1 className="font-bold font-space-grotesk text-base capitalize">Ubah Profil</h1>
      </section>
      <Layout className="relative  no-scrollbar  bg-white  z-10">{children}</Layout>
    </Layout>
  );
};

export default EditUserPageLayout;

EditUserPageLayout.propTypes = {
  children: PropTypes.node,
};
