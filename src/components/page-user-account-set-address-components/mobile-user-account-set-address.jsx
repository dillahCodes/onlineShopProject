import { useState } from "react";
import BottomButtonSelectAddressComponent from "./bottom-button-select-address-component";
import MobileSetAddressHeaderComponent from "./mobile-set-address-header-component";
import MobileRequestAddressFromFriends from "./mobile-request-address-from-friends";
import { useAddress } from "./context/add-address-context";
import { Drawer } from "antd";
import NavbarBackComponent from "../navbar-components/navbar-back-component";
import "./style/add-address-drawer.css";
import MobileAddAddressComponent from "./mobile-add-address-component";
import MobileAddressList from "./mobile-address-list";

const addressDataFrom = ["Semua Alamat", "Dari Teman"];
const MobileUserAccountSetAddress = () => {
  const [menuSelected, setMenuSelected] = useState(addressDataFrom[0]);
  const { isAddAdress, handleOpenAddressDrawer } = useAddress();

  return (
    <section className="w-full">
      <MobileSetAddressHeaderComponent addressDataFrom={addressDataFrom} selectedAddress={menuSelected} setSelectedAddress={setMenuSelected} />
      <div className="w-full p-3 flex flex-col gap-y-3 mb-12">
        {/* address data */}
        {menuSelected === addressDataFrom[0] && <MobileAddressList />}
        {/* request address */}
        {menuSelected === addressDataFrom[1] && <MobileRequestAddressFromFriends />}
      </div>
      <BottomButtonSelectAddressComponent />

      <Drawer
        push={false}
        id="drawer-add-address"
        title={
          <section className="w-full flex items-center gap-x-4">
            <NavbarBackComponent onClick={() => handleOpenAddressDrawer()} size={25} />
            <div className="capitalize">
              <p className="font-bold font-space-grotesk">Cari Alamat</p>
              <p className="text-sm font-normal font-space-grotesk">dimana lokasi tujuan pengirimanmu?</p>
            </div>
          </section>
        }
        placement="right"
        width="100%"
        closable={false}
        onClose={() => handleOpenAddressDrawer()}
        open={isAddAdress}
        key="right"
      >
        <MobileAddAddressComponent />
      </Drawer>
    </section>
  );
};

export default MobileUserAccountSetAddress;
