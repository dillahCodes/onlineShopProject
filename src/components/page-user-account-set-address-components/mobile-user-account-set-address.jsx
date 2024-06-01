import { useState } from "react";
import BottomButtonSelectAddressComponent from "./bottom-button-select-address-component";
import MobileAddressCard from "./mobile-address-card";
import MobileSetAddressHeaderComponent from "./mobile-set-address-header-component";
import MobileRequestAddressFromFriends from "./mobile-request-address-from-friends";
import { useAddress } from "../../context/add-address-context";
import { Drawer } from "antd";
import NavbarBackComponent from "../navbar-components/navbar-back-component";
import "./style/add-address-drawer.css";
import MobileAddAddressComponent from "./mobile-add-address-component";

const dataAddress = [
  {
    label: "rumah",
    address: "456 Elm Street, Apt 789",
    onBehalfOf: "John Doe",
    tel: "345-678-1234",
    isSelected: false,
  },
  {
    label: "office",
    address: "123 Main Street, Suite 101",
    onBehalfOf: "Jane Smith",
    tel: "012-345-6789",
    isSelected: true,
  },
  {
    label: "apartment",
    address: "567 Park Avenue, Floor 3",
    onBehalfOf: "Chris Johnson",
    tel: "987-654-3210",
    isSelected: false,
  },
  {
    label: "home",
    address: "789 Oak Street, Apt 456",
    onBehalfOf: "Katie Williams",
    tel: "654-321-0987",
    isSelected: false,
  },
  {
    label: "office",
    address: "101 Broadway, Suite 202",
    onBehalfOf: "Mike Brown",
    tel: "123-456-7890",
    isSelected: false,
  },
].sort((a, b) => (a.isSelected === b.isSelected ? 0 : a.isSelected ? -1 : 1));

const addressDataFrom = ["Semua Alamat", "Dari Teman"];
const MobileUserAccountSetAddress = () => {
  const [menuSelected, setMenuSelected] = useState(addressDataFrom[0]);
  const { isAddAdress, setIsAddAddress } = useAddress();

  return (
    <section className="w-full">
      <MobileSetAddressHeaderComponent addressDataFrom={addressDataFrom} selectedAddress={menuSelected} setSelectedAddress={setMenuSelected} />
      <div className="w-full p-3 flex flex-col gap-y-3 mb-12">
        {/* address data */}
        {menuSelected === addressDataFrom[0] &&
          dataAddress.map((data, index) => (
            <MobileAddressCard key={index} isSelected={data.isSelected} label={data.label} address={data.address} onBehalfOf={data.onBehalfOf} tel={data.tel} />
          ))}

        {/* request address */}
        {menuSelected === addressDataFrom[1] && <MobileRequestAddressFromFriends />}
      </div>
      <BottomButtonSelectAddressComponent />

      <Drawer
        push={false}
        id="drawer-add-address"
        title={
          <section className="w-full flex items-center gap-x-4">
            <NavbarBackComponent onClick={() => setIsAddAddress(!isAddAdress)} size={25} />
            <div className="capitalize">
              <p className="font-bold font-space-grotesk">Cari Alamat</p>
              <p className="text-sm font-normal font-space-grotesk">dimana lokasi tujuan pengirimanmu?</p>
            </div>
          </section>
        }
        placement="right"
        width="100%"
        closable={false}
        onClose={() => setIsAddAddress(!isAddAdress)}
        open={isAddAdress}
        key="right"
      >
        <MobileAddAddressComponent />
      </Drawer>
    </section>
  );
};

export default MobileUserAccountSetAddress;
