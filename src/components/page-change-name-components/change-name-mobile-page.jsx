import { useState } from "react";
import InputComponent from "../input-components/input-component";
import ButtonComponent from "../ui-components/button-component";
import { useAuth } from "../../context/user-auth-context";
import authServices from "../../features/auth/services/auth-services";
import { mutate } from "swr";

const ChangeNameMobilePage = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const { user } = useAuth();
  const [name, setName] = useState(user?.name);

  const handleValidation = (inputValue) => {
    const regex = /^[a-zA-Z\s]*$/;
    const cleanedInput = inputValue.replace(/[^a-zA-Z\s]/g, "").replace(/\s+/g, " ");

    if (cleanedInput === "") {
      setErrorMessage("nama harus di isi");
      setIsInputEmpty(true);
    } else if (!regex.test(cleanedInput)) {
      setErrorMessage("nama hanya boleh mengandung huruf dan spasi");
    } else {
      setErrorMessage("");
      setIsInputEmpty(false);
    }

    return cleanedInput;
  };

  const handleOnChange = (e) => {
    const inputValue = e.target.value;
    const result = handleValidation(inputValue);

    if (result === user.name) setErrorMessage("nama tidak boleh sama");
    setName(result);
  };

  const handleChangeUserName = async () => {
    if (errorMessage || !name) return;
    if (name === user?.name) return setErrorMessage("nama tidak boleh sama");

    const payload = { name };
    try {
      await authServices.updateUserData(user?.user_id, payload);
      mutate(`/api/user/${user?.user_id}`);
    } catch (error) {
      console.error("Error changing user name:", error);
    }
  };

  const handleOnFocus = () => setIsFocused(true);
  const handleOnBlur = () => setIsFocused(false);

  return (
    <section className="w-full p-5">
      <p className="capitalize text-gray-600 font-medium">
        Pakai nama asli untuk memudahkan verifikasi. Nama ini akan tampil di beberapa halaman.
      </p>
      <div className="relative mt-5 transition-all duration-300">
        <label
          htmlFor="input-change-name"
          className={` block transition-all duration-300 ${
            isFocused || !isInputEmpty || name ? "-translate-y-1/2 text-xs " : "translate-y-1/2 text-base"
          } z-10 capitalize left-2 absolute font-medium bg-white px-2 text-gray-400 `}
        >
          nama
        </label>
        <InputComponent
          allowClear
          status={errorMessage ? "error" : "default"}
          className={`px-2 py-3 font-space-grotesk text-gray-700 `}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          value={name}
          id="input-change-name"
        />
        {<p className="text-red-500 text-[12px] font-medium pl-2 font-space-grotesk capitalize">{errorMessage}</p>}
        <ButtonComponent
          onClick={handleChangeUserName}
          className="capitalize w-full font-bold mt-3 font-space-grotesk"
          size={"large"}
          type="primary"
          disabled={isInputEmpty || errorMessage}
        >
          simpan
        </ButtonComponent>
      </div>
    </section>
  );
};

export default ChangeNameMobilePage;
