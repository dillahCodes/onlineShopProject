import { IoCheckmark, IoShareSocialOutline } from "react-icons/io5";
import truncateString from "../../utils/truncate-string";
import PropTypes from "prop-types";
import ButtonComponent from "../ui-components/button-component";
import { BsThreeDots } from "react-icons/bs";
import BottomDrawer from "../ui-components/bottom-drawer";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useAuth } from "../../context/user-auth-context";
import authServices from "../../features/auth/services/auth-services";
import ModalComponent from "../ui-components/modal-component";
import { mutate } from "swr";
import NavbarBackComponent from "../navbar-components/navbar-back-component";
import InputTextComponentWithLabel from "../input-components/input-text-component-with-label";
import { GoInfo } from "react-icons/go";
import { useSearchAddress } from "./context/search-address-context";
import useSelectUserAddress from "../../features/address/hooks/use-select-user-address";
import useEditUserAddress from "../../features/address/hooks/use-edit-user-address";

const MobileAddressCard = ({ addressId }) => {
  const { user } = useAuth();
  const [isDrawerOpen, setIsDrawerOpen] = useState({
    drawerAddressOptions: false,
    drawerEditAddress: false,
  });
  const [modalIsOpen, setModalIsOpen] = useState({
    modalDeleteAddress: false,
    modalSelectAddress: false,
  });
  const { handleSelectedUserAddress } = useSelectUserAddress();
  const { setSelectAddress, selectAddress } = useSearchAddress();
  const address = user?.address.find((data) => data.address_id === addressId);

  // address Data
  const label = address?.address_label;
  const onBehalfOf = address?.receiper_name;
  const tel = address?.phone_number;
  const addressComplete = address?.address_complete;
  const isSelected = address?.is_selected;

  // handle delete address
  const handleOpenAndCLoseModalDeleteAddress = () => setModalIsOpen((prev) => ({ ...prev, modalDeleteAddress: !prev.modalDeleteAddress }));
  const handleConfirmDeleteAddress = async () => {
    if (!addressId || !user) return;
    try {
      await authServices.deleteUserAddress(user?.user_id, addressId);
      handleOpenAndCLoseModalDeleteAddress();
      mutate(`/api/user/${user.user_id}`);
    } catch (error) {
      console.error("error while deleting address", error);
    }
  };

  // handle select address
  const handleOpenAndCLoseModalSelectAddress = () => setModalIsOpen((prev) => ({ ...prev, modalSelectAddress: !prev.modalSelectAddress }));
  const handleConfirmSelectAddress = async () => {
    handleSelectedUserAddress(addressId);
    handleOpenAndCLoseModalSelectAddress();
  };

  return (
    // card address
    <div
      onClick={() => setSelectAddress(addressId)}
      className={`w-full p-5 relative before:absolute ${
        selectAddress === addressId && "border-[#00AA5B]"
      } before:z-[1] before:w-1 before:left-0 before:h-6 before:rounded-r-md before:bg-[#00AA5B] border rounded-md ${isSelected && "bg-[#ECFEF4] border-[#00AA5B]"}`}
    >
      <LabelAddress label={label} isSelected={isSelected} />
      <OnBehalfOf name={onBehalfOf} tel={tel} />
      <Address address={addressComplete} isSelected={isSelected} />
      <div className="w-full flex gap-x-2 mt-3  ">
        <ButtonComponent
          className="w-full  bg-white shadow-none font-bold font-space-grotesk text-gray-500"
          onClick={() => setIsDrawerOpen((prev) => ({ ...prev, drawerEditAddress: !prev.drawerEditAddress }))}
        >
          Ubah Alamat
        </ButtonComponent>
        {!isSelected && (
          <>
            <AddressOptinsModal
              handleClose={handleOpenAndCLoseModalDeleteAddress}
              modalIsOpen={modalIsOpen.modalDeleteAddress}
              handleConfitm={handleConfirmDeleteAddress}
              ModalTitle="Hapus Aamat"
              content="Apakah anda yakin ingin menghapus Alamat ini? Anda Tidak Dapat Mengambalikan Alamat Yang Sudah Dihapus"
            />
            <AddressOptinsModal
              modalIsOpen={modalIsOpen.modalSelectAddress}
              handleClose={handleOpenAndCLoseModalSelectAddress}
              handleConfitm={handleConfirmSelectAddress}
              ModalTitle="Jadikan Alamat Utama"
              content="Apakah Anda yakin ingin menjadikan alamat ini sebagai alamat utama? Anda hanya dapat memilih satu alamat utama."
            />
            {/* address options button */}
            <ButtonComponent
              onClick={() => setIsDrawerOpen((prev) => ({ ...prev, drawerAddressOptions: !prev.drawerAddressOptions }))}
              className=" bg-white shadow-none font-bold font-space-grotesk flex items-center justify-center text-gray-500"
            >
              <BsThreeDots />
            </ButtonComponent>
          </>
        )}

        {/* address options drawer */}
        <BottomDrawer
          id="drawer-address-card-options"
          isOpen={isDrawerOpen.drawerAddressOptions}
          onClose={() => setIsDrawerOpen((prev) => ({ ...prev, drawerAddressOptions: !prev.drawerAddressOptions }))}
          className="w-full rounded-t-md"
          drawerHeight="auto"
          drawerTitle={<AddressDrawerOptionsTitle />}
        >
          <AddressDrawerOptionsContent
            handleOpenAndCLoseModalSelectAddress={handleOpenAndCLoseModalSelectAddress}
            handleOpenAndCLoseModalDeleteAddress={handleOpenAndCLoseModalDeleteAddress}
          />
        </BottomDrawer>

        {/* address edit drawer */}
        <BottomDrawer
          id="drawer-address-card-edit"
          isOpen={isDrawerOpen.drawerEditAddress}
          onClose={() => setIsDrawerOpen((prev) => ({ ...prev, drawerAddressEdit: !prev.drawerAddressEdit }))}
          className="w-full"
          drawerHeight="100%"
          drawerTitle={<EditAddressDrawerTitle onClick={() => setIsDrawerOpen((prev) => ({ ...prev, drawerEditAddress: !prev.drawerEditAddress }))} />}
        >
          <EditAddressDrawerContent addressData={address} />
        </BottomDrawer>
      </div>
    </div>
  );
};

export default MobileAddressCard;
MobileAddressCard.propTypes = {
  addressId: PropTypes.string.isRequired,
};

const EditAddressDrawerTitle = ({ onClick }) => {
  return (
    <div className="w-full flex items-center gap-x-2">
      <NavbarBackComponent onClick={onClick} size={25} />
      <p className="font-bold font-space-grotesk text-base">Ubah Alamat</p>
    </div>
  );
};
EditAddressDrawerTitle.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const EditAddressDrawerContent = ({ addressData }) => {
  const { user } = useAuth();
  const { handleEditUserAddress } = useEditUserAddress();
  const [formValue, setFormValue] = useState({
    name: addressData.receiper_name || "",
    tel: addressData.phone_number || "",
    addressLabel: addressData.address_label || "",
    regency: addressData.regency || "",
    addressDetail: addressData.address_complete || "",
    courierNote: addressData.note_to_courier || "",
  });

  const handleOnChange = (e, name) => setFormValue((prev) => ({ ...prev, [name]: e.target.value }));
  const isConfirmButtonDisabled = () => {
    const { name, tel, addressLabel, addressDetail, regency } = formValue;
    if (!name || !tel || !addressLabel || !addressDetail || !regency) return true;
    return false;
  };

  const handleSaveAddress = async () => {
    if (isConfirmButtonDisabled() || !user) return;
    handleEditUserAddress(addressData.address_id, formValue.addressLabel, formValue.addressDetail, formValue.courierNote, formValue.name, formValue.tel, formValue.regency);
  };

  return (
    <section className="w-full">
      <div className="w-full flex flex-col gap-y-3 p-3">
        <InputTextComponentWithLabel
          inputType="text"
          labelText="Label Alamat"
          size="small"
          inputValue={formValue.addressLabel}
          maxValue={30}
          handleOnChange={(e) => handleOnChange(e, "addressLabel")}
        />
        <InputTextComponentWithLabel
          inputType="text"
          labelText="Kabupaten/Kota"
          size="small"
          inputValue={formValue.regency}
          maxValue={40}
          handleOnChange={(e) => handleOnChange(e, "regency")}
        />
        <InputTextComponentWithLabel
          inputType="text"
          labelText="Alamat Lengkap"
          size="small"
          inputValue={formValue.addressDetail}
          maxValue={200}
          handleOnChange={(e) => handleOnChange(e, "addressDetail")}
        />
        <InputTextComponentWithLabel
          inputType="text"
          labelText="Catatan Untuk Kurir (Opsional)"
          message="Warna Rumah, Patokan, Pesan Khusus, dll."
          size="small"
          inputValue={formValue.courierNote}
          maxValue={45}
          handleOnChange={(e) => handleOnChange(e, "courierNote")}
        />
      </div>
      <div className="h-2 mt-3 mb-3 bg-[#E4EBF5] w-full" />
      <div className="w-full p-3 flex flex-col gap-y-3">
        <InputTextComponentWithLabel
          inputType="text"
          labelText="Nama Penerima"
          size="small"
          inputValue={formValue.name}
          maxValue={50}
          handleOnChange={(e) => handleOnChange(e, "name")}
        />
        <InputTextComponentWithLabel inputType="tel" labelText="Nomor HP" size="small" inputValue={formValue.tel} maxValue={15} handleOnChange={(e) => handleOnChange(e, "tel")} />
      </div>
      <div className="w-full p-3 overflow-hidden ">
        <div className="w-full flex items-center gap-x-2">
          <span className="text-lg">
            <GoInfo />
          </span>
          <p className="capitalize font-space-grotesk text-xs">
            dengan mengklik tombol simpan, anda menyetujui <span className="text-[#00AA5B] font-bold">syarat dan ketentuan </span>
            serta <span className="text-[#00AA5B] font-bold"> kebijakan privasi </span>pengaturan alamat di tokopedia
          </p>
        </div>

        <ButtonComponent onClick={handleSaveAddress} disabled={isConfirmButtonDisabled()} type="primary" size="large" className="w-full mt-6  font-bold font-space-grotesk">
          Simpan
        </ButtonComponent>
      </div>
    </section>
  );
};

EditAddressDrawerContent.propTypes = {
  addressData: PropTypes.object.isRequired,
};

const AddressDrawerOptionsTitle = () => {
  return (
    <div className="w-full flex items-center gap-x-2">
      <span className="text-lg">
        <AiOutlineClose />
      </span>
      <p className="font-bold font-space-grotesk text-base">Pilihan lainnya</p>
    </div>
  );
};

const AddressDrawerOptionsContent = ({ handleOpenAndCLoseModalSelectAddress, handleOpenAndCLoseModalDeleteAddress }) => {
  return (
    <div className="w-full flex flex-col text-sm font-bold capitalize font-space-grotesk">
      <div className="w-full p-3 border-b cursor-pointer" onClick={handleOpenAndCLoseModalSelectAddress}>
        <span>jadikan alamat Utama Dan pilih</span>
      </div>
      <div className="w-full p-3 cursor-pointer" onClick={handleOpenAndCLoseModalDeleteAddress}>
        <span>hapus alamat</span>
      </div>
    </div>
  );
};
AddressDrawerOptionsContent.propTypes = {
  handleOpenAndCLoseModalSelectAddress: PropTypes.func.isRequired,
  handleOpenAndCLoseModalDeleteAddress: PropTypes.func.isRequired,
};

const AddressOptinsModal = ({ modalIsOpen, handleClose, ModalTitle, content, handleConfitm }) => {
  return (
    <ModalComponent modalTitle={<h1 className="text-base font-bold font-space-grotesk">{ModalTitle}</h1>} modalFooter={null} isModalOpen={modalIsOpen}>
      <div className="w-full">
        <p className="capitalize text-sm font-space-grotesk">{content}</p>
        <div className="w-full flex flex-row-reverse gap-x-2 mt-3">
          <ButtonComponent type="primary" className=" font-space-grotesk capitalize" onClick={handleConfitm}>
            konfirmasi
          </ButtonComponent>
          <ButtonComponent className="font-space-grotesk capitalize" onClick={handleClose}>
            batal
          </ButtonComponent>
        </div>
      </div>
    </ModalComponent>
  );
};
AddressOptinsModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  ModalTitle: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  handleConfitm: PropTypes.func.isRequired,
};

const LabelAddress = ({ label, isSelected }) => {
  return (
    <div className="w-full flex items-center gap-x-1">
      <p className="text-xs font-space-grotesk font-bold capitalize">{label}</p>
      {isSelected && <span className="bg-gray-200 text-gray-600 p-0.5 px-1 rounded-[4px] font-medium text-xs capitalize">utama</span>}
      <span className="text-lg ml-auto">
        <IoShareSocialOutline />
      </span>
    </div>
  );
};

LabelAddress.propTypes = {
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
};

const OnBehalfOf = ({ name, tel }) => {
  return (
    <div className="w-full flex flex-col">
      <h1 className="font-bold text-sm font-space-grotesk  capitalize">{truncateString(name, 12)}</h1>
      <p className=" text-[12px]  text-gray-500">{tel}</p>
    </div>
  );
};
OnBehalfOf.propTypes = {
  name: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
};

const Address = ({ address, isSelected }) => {
  return (
    <div className="w-full mt-1 flex items-center">
      <span className="text-gray-600  font-space-grotesk font-medium">{truncateString(address, 70)}</span>
      {isSelected && (
        <span className="text-lg text-[#00AA5B] ml-auto">
          <IoCheckmark />
        </span>
      )}
    </div>
  );
};
Address.propTypes = {
  address: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
};
