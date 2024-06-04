import { useEffect } from "react";
import MobileTokopediaPlusOffer from "../ui-components/mobile-tokopedia-plus-offer";
import UserProfileMobileBalance from "./user-profile-mobile-balance";
import UserProfileMobileData from "./user-profile-mobile-data";
import UserProfileMobileMemberInfo from "./user-profile-mobile-member-info";
import UserProfileMobileSettingsMenu from "./user-profile-mobile-settings-menu";
import UserProfileMobileLogout from "./user-profile-mobile-logout";

const UserProfileMobilePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full relative min-h-screen bg-white">
      <div className="bg-gradient-to-b from-transparent to-slate-100 relative p-4">
        <img src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/8942437a.png" alt="vector-top-right" className="w-36 h-36 right-0 absolute top-0" />
        <img src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/b0a67285.png" alt="vector-top-right" className="w-16 h-16 right-0 absolute bottom-20" />
        <img src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/2f2577b0.png" alt="vector-top-right" className="w-30 h-30 left-0 absolute bottom-0" />
        <div className="w-full relative flex flex-col gap-y-6">
          <UserProfileMobileData />
          <MobileTokopediaPlusOffer className="bg-white p-2" />
          <UserProfileMobileBalance />
          <UserProfileMobileMemberInfo />
        </div>
      </div>
      <UserProfileMobileSettingsMenu className="p-4" />
      <UserProfileMobileLogout />
    </section>
  );
};

export default UserProfileMobilePage;
