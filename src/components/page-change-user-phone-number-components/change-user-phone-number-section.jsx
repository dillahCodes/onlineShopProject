import { useState } from "react";
import { useAuth } from "../../context/user-auth-context";
import InputComponent from "../input-components/input-component";
import ButtonComponent from "../ui-components/button-component";
import authServices from "../../features/auth/services/auth-services";
import { mutate } from "swr";

const ChangeUserPhoneNuberSection = () => {
  const { user } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState(user?.phone_number);
  const [isFocused, setIsFocused] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleOnFocus = () => setIsFocused(true);
  const handleOnBlur = () => setIsFocused(false);

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^08\d{8,11}$/;

    if (!phoneNumber) {
      setErrorMessage("nomor telepon tidak boleh kosong");
    } else if (!phoneNumberRegex.test(phoneNumber)) {
      setErrorMessage("Nomor telepon harus di awali 08 dan berisi 10 - 13 angka");
    } else {
      setErrorMessage("");
    }
  };

  const handleOnChange = (e) => {
    const inputValue = e.target.value;

    if (isNaN(inputValue)) return;

    validatePhoneNumber(inputValue);
    setPhoneNumber(inputValue);
  };

  const handleChangeUserPhoneNumber = async () => {
    if (errorMessage || !phoneNumber) return;
    if (phoneNumber === user?.phone_number) return setErrorMessage("nomor hp tidak boleh sama");

    const payload = { phoneNumber };

    try {
      await authServices.updateUserData(user?.user_id, payload);
      mutate(`/api/user/${user?.user_id}`);
    } catch (error) {
      console.error("Error changing user phone number:", error);
    }
  };

  return (
    <section className="w-full p-5">
      <p className="capitalize text-gray-600 font-medium font-space-grotesk">
        pastikan nomor hp baru anda aktif dan terdaftar di whatsapp.
      </p>
      <p className="capitalize text-gray-600 font-medium font-space-grotesk">
        contoh: <span className="text-gray-900">08123456789</span>
      </p>
      <div className="relative mt-10 transition-all duration-300">
        <label
          htmlFor="input-change-phone-number"
          className={` block transition-all duration-300 ${
            isFocused || (!phoneNumber && isFocused) || phoneNumber
              ? "-translate-y-1/2 text-xs "
              : "translate-y-1/2 text-base"
          } z-10 capitalize left-2 absolute font-medium bg-white px-2 text-gray-400 `}
        >
          nomor hp
        </label>
        <InputComponent
          allowClear
          status={errorMessage ? "error" : "default"}
          className={`px-2 py-3 font-space-grotesk text-gray-700 input-no-arrow `}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          value={phoneNumber}
          type="tel"
          id="input-change-phone-number"
        />
        {<p className="text-red-500 text-[12px] font-medium pl-2 font-space-grotesk capitalize">{errorMessage}</p>}
        <ButtonComponent
          onClick={handleChangeUserPhoneNumber}
          className="capitalize w-full font-bold mt-3 font-space-grotesk"
          size={"large"}
          type="primary"
          disabled={!phoneNumber || errorMessage}
        >
          simpan
        </ButtonComponent>
      </div>
    </section>
  );
};

export default ChangeUserPhoneNuberSection;
