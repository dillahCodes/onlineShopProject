import { IoCheckmark, IoClose, IoLocationOutline } from "react-icons/io5";
import BottomDrawer from "../ui-components/bottom-drawer";
import "./style/navbar-shipping-to-drawer-component.css";
import truncateString from "../../utils/truncate-string";
import { IoIosArrowForward } from "react-icons/io";
import PropTypes from "prop-types";
import ButtonComponent from "../ui-components/button-component";
import { useAuth } from "../../context/user-auth-context";
import { useNavigate } from "react-router-dom";
import useSelectUserAddress from "../../features/address/hooks/use-select-user-address";

const NavbarShippingToDrawerComponent = ({ isOpen, onClose, onSecondDrawerOpen }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { handleSelectedUserAddress } = useSelectUserAddress();
  const userAddressData = user?.address.sort((a, b) => (a.is_selected === b.is_selected ? 0 : a.is_selected ? -1 : 1)) || [];

  const handleSelectedAddress = async (address_id) => handleSelectedUserAddress(address_id);

  return (
    <BottomDrawer
      id="Navbar-Shipping-To-Drawer-Component"
      isOpen={isOpen}
      className="rounded-t-md "
      drawerHeight="auto"
      onClose={onClose}
      drawerTitle={
        <section className="w-full flex items-center gap-x-2" onClick={onClose}>
          <span className="text-2xl">
            <IoClose />
          </span>
          <span className="capitalize text-base font-bold font-space-grotesk">mau kirim belanjaan kemana?</span>
        </section>
      }
    >
      <div className="w-full h-fit p-3 font-space-grotesk">
        <p className="text-gray-400 text-xs capitalize font-medium mb-3">Biar pengalaman belanjamu lebih baik, pilih alamat dulu.</p>
        <div className="w-full overflow-x-auto flex no-scrollbar pb-4 border-b gap-x-3">
          <div className="w-fit flex gap-x-3">
            {userAddressData.map((data) => (
              <CardAddressComponent
                key={data.address_id}
                isSelected={data.is_selected}
                address={data.address_complete}
                addressLabel={data.address_label}
                onBehalfOf={data.receiper_name}
                tlp={data.phone_number}
                onClick={() => handleSelectedAddress(data.address_id)}
              />
            ))}
          </div>
          <div className=" min-w-[180px] shadow-md rounded-md mr-1 p-3 flex flex-col justify-center items-center gap-y-2" onClick={() => navigate("/user/settings/address")}>
            <ButtonComponent className="w-fit h-fit p-2 items-center flex rounded-full m-0 border shadow-sm border-[#00AA5B] text-[#00AA5B] font-bold text-2xl">
              <IoIosArrowForward />
            </ButtonComponent>
            <p className="font-bold capitalize text-[#00AA5B]"> cek alamat lainnya</p>
          </div>
        </div>
        <AnyMethodComponent onSecondDrawerOpen={onSecondDrawerOpen} />
      </div>
    </BottomDrawer>
  );
};

export default NavbarShippingToDrawerComponent;
NavbarShippingToDrawerComponent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSecondDrawerOpen: PropTypes.func.isRequired,
};

const CardAddressComponent = ({ addressLabel, address, onBehalfOf, tlp, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`max-w-[230px]  min-w-[230px] py-3 px-5 font-space-grotesk  border rounded-md border-b shadow-md relative before:absolute before:w-[4px] before:h-[30px]  before:rounded-r-md before:left-0 before:bg-[#00AA5B] ${
        isSelected && "bg-[#ECFEF4] border-[#00AA5B]"
      }`}
    >
      {/* label */}
      <div className="w-full capitalize flex gap-x-1">
        <span className="font-bold capitalize">{addressLabel}</span>
        {isSelected && <span className="bg-gray-200 text-gray-600 p-0.5 px-1 rounded-[4px] font-medium text-xs">utama</span>}
      </div>
      {/* onBehalfOf */}
      <div className="w-full flex flex-col">
        <h1 className="font-bold text-base mt-1 capitalize">{truncateString(onBehalfOf, 12)}</h1>
        <div className="w-full flex items-center">
          <p className="mt-1 text-xs font-light text-gray-500">{tlp}</p>
          {isSelected && (
            <span className="text-lg ml-auto text-[#00AA5B]">
              <IoCheckmark />
            </span>
          )}
        </div>
      </div>
      <div className="w-full mt-1">
        <span className="text-gray-600 font-medium">{truncateString(address, 20)}</span>
      </div>
    </div>
  );
};

CardAddressComponent.propTypes = {
  addressLabel: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onBehalfOf: PropTypes.string.isRequired,
  tlp: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const AnyMethodComponent = ({ onSecondDrawerOpen }) => {
  return (
    <div className="w-full mt-2 font-space-grotesk" onClick={onSecondDrawerOpen}>
      <p className="font-bold capitalize text-base font-space-grotesk">mau pakai cara lain?</p>
      <div className="w-full my-4 flex items-center gap-x-2">
        <span className="text-3xl">
          <IoLocationOutline />
        </span>
        <div className="flex flex-col truncate">
          <span className="capitalize font-bold text-sm truncate">pilih kota & kecamatan</span>
          <span className="capitalize  text-sm text-gray-500 font-semibold truncate">sesuaikan tujuan pengirimanmu</span>
        </div>
        <span className="text-xl ml-auto">
          <IoIosArrowForward />
        </span>
      </div>
    </div>
  );
};

AnyMethodComponent.propTypes = {
  onSecondDrawerOpen: PropTypes.func.isRequired,
};
