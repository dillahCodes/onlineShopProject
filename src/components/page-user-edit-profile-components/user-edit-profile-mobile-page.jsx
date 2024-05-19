import ButtonComponent from "../ui-components/button-component";
import MobileInfoProfile from "./mobile-info-profile";
import MobilePersonalInfoProfile from "./mobile-personal-info-profile";
import MobilePhotoProfile from "./mobile-photo-profile";

const UserEditProfileMobilePage = () => {
  return (
    <section className="w-full flex flex-col ">
      <MobilePhotoProfile />
      <MobileInfoProfile />
      <MobilePersonalInfoProfile />
      <ButtonComponent
        className={"text-[#00AA5B] shadow-none font-bold text-[14px] my-2 p-0 bg-transparent border-none capitalize"}
      >
        tutup akun
      </ButtonComponent>
    </section>
  );
};

export default UserEditProfileMobilePage;
