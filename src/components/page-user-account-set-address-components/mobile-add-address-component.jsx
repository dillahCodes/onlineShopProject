import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineMyLocation } from "react-icons/md";
import NavbarBackComponent from "../navbar-components/navbar-back-component";
import { Checkbox, Drawer } from "antd";
import InputTextComponentWithLabel from "../input-components/input-text-component-with-label";
import { useAuth } from "../../context/user-auth-context";
import ButtonComponent from "../ui-components/button-component";

const MobileAddAddressComponent = () => {
  return (
    <section className="w-full">
      <div className="w-full p-3">
        <InputSection />
      </div>
      <UseCurrLocation />
      <UseAnyMethod />
    </section>
  );
};

export default MobileAddAddressComponent;

const InputSection = () => {
  return (
    <div className="group rounded-md  overflow-hidden border-[1px] flex items-center focus-within:border-[#00AA5B]">
      <span className="text-lg p-1 text-gray-300">
        <IoIosSearch />
      </span>
      <input type="text" className="w-full px-1 py-3 focus:outline-none flex items-center" placeholder="Tulis Nama Jalan / Gedung / Perumahan" />
    </div>
  );
};

const UseCurrLocation = () => {
  return (
    <div className="w-full p-5 flex items-center gap-x-3 border-b cursor-pointer">
      <span className="text-lg">
        <MdOutlineMyLocation />
      </span>
      <span className="font-space-grotesk text-base">Gunakan Lokasi Saat Ini</span>
    </div>
  );
};

const UseAnyMethod = () => {
  const { user } = useAuth();
  const [isDrawerFormActive, setIsDrawerFormActive] = useState(false);
  const [formValue, setFormValue] = useState({
    name: user?.name || "",
    tel: user?.phone_number || "",
    addressLabel: "Rumah",
    districtOrCity: "",
    fullAddress: "",
    courierNote: "",
  });
  const [CheckboxValue, setCheckboxValue] = useState({
    isActiveAddress: false,
    privacePolicy: false,
  });

  const handleOnChange = (e, name) => setFormValue((prev) => ({ ...prev, [name]: e.target.value }));
  const onChangeCheckbox = (e, name) => setCheckboxValue((prev) => ({ ...prev, [name]: e.target.checked }));

  const isConfirmButtonDisabled = () => {
    const { ...otherFields } = formValue;
    return Object.values(otherFields).some((value) => !value) || !CheckboxValue.privacePolicy;
  };

  return (
    <div className="w-full p-5  border-b cursor-pointer">
      <span className="font-space-grotesk text-base capitalize" onClick={() => setIsDrawerFormActive(!isDrawerFormActive)}>
        mau cara lain? isi alamat secara manual
      </span>

      {/* from drawer */}
      <Drawer
        id="drawer-add-address-form"
        title={
          <section className="w-full flex items-center gap-x-4">
            <NavbarBackComponent onClick={() => setIsDrawerFormActive(!isDrawerFormActive)} size={25} />
            <div className="capitalize">
              <p className="text-base font-space-grotesk font-bold">Detail Alamat</p>
            </div>
          </section>
        }
        placement="right"
        push={false}
        width="100%"
        closable={false}
        onClose={() => setIsDrawerFormActive(!isDrawerFormActive)}
        open={isDrawerFormActive}
        key="right"
      >
        <div className="w-full p-3">
          <div className="w-full bg-white flex flex-col gap-y-1">
            <InputTextComponentWithLabel
              inputType="text"
              labelText="Nama Penerima"
              size="small"
              inputValue={formValue.name}
              maxValue={50}
              handleOnChange={(e) => handleOnChange(e, "name")}
            />
            <InputTextComponentWithLabel
              inputType="tel"
              labelText="Nomor HP"
              size="small"
              inputValue={formValue.tel}
              maxValue={15}
              handleOnChange={(e) => handleOnChange(e, "tel")}
            />
          </div>
        </div>
        <div className="h-2 mt-7 mb-5 bg-[#E4EBF5] w-full" />
        <div className="w-full p-3">
          <div className="w-full bg-white flex flex-col gap-y-1">
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
              labelText="Kota/Kabupaten"
              size="small"
              inputValue={formValue.districtOrCity}
              handleOnChange={(e) => handleOnChange(e, "districtOrCity")}
            />
            <InputTextComponentWithLabel
              inputType="text"
              labelText="Alamat Lengkap"
              size="small"
              inputValue={formValue.fullAddress}
              maxValue={200}
              handleOnChange={(e) => handleOnChange(e, "fullAddress")}
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
        </div>

        {/* confirm section */}
        <div className="w-full p-3 overflow-hidden">
          <Checkbox onChange={(e) => onChangeCheckbox(e, "isActiveAddress")} className="capitalize font-space-grotesk py-3">
            Jadikan Alamat Utama
          </Checkbox>
          <Checkbox onChange={(e) => onChangeCheckbox(e, "privacePolicy")} className="capitalize font-space-grotesk py-3">
            <p className="capitalize font-space-grotesk">
              saya menyetujui <span className="text-[#00AA5B]">syarat dan ketentuan </span>
              serta <span className="text-[#00AA5B]"> kebijakan privasi </span>pengaturan alamat di tokopedia
            </p>
          </Checkbox>
          <ButtonComponent disabled={isConfirmButtonDisabled()} type="primary" size="large" className="w-full font-bold font-space-grotesk">
            Simpan
          </ButtonComponent>
        </div>
      </Drawer>
    </div>
  );
};
