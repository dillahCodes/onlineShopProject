import { Input } from "antd";
import ButtonComponent from "../ui-components/button-component";
import { useState } from "react";
import { useAuth } from "../../context/user-auth-context";
import { mutate } from "swr";
import authServices from "../../features/auth/services/auth-services";
const { TextArea } = Input;

const ChangeUserBioMobilePage = () => {
  const { user } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const [bio, setBio] = useState(user?.bio || "");
  const bioMaxLength = 150;

  const handleOnchange = (e) => {
    if (bio.length > bioMaxLength) setErrorMessage(`maksimal ${bioMaxLength} karakter`);
    else if (bio.trim() === "") setErrorMessage("bio wajib diisi");
    else setErrorMessage("");

    setBio(e.target.value);
  };

  const handleChangeUserBio = async () => {
    if (errorMessage) return;
    if (bio === user?.bio) return setErrorMessage("bio tidak boleh sama");

    try {
      await authServices.updateUserData(user?.user_id, { bio });
      mutate(`/api/user/${user?.user_id}`);
    } catch (error) {
      console.error("Error changing user bio:", error);
    }
  };

  return (
    <section className="w-full p-5">
      <p className="capitalize text-gray-600 font-medium">tulis tentangmu, ini akan tampil di profilmu</p>
      <div className="w-full flex flex-col">
        <TextArea maxLength={bioMaxLength} value={bio} allowClear onChange={handleOnchange} placeholder="Tuliskan tentangmu" autoSize={{ minRows: 5 }} className="mt-3" />
        <div className="w-full justify-between font-space-grotesk text-xs mt-1  flex">
          {errorMessage && <p className="text-red-500 text-[12px] font-medium  font-space-grotesk capitalize">{errorMessage}</p>}
          <span className={`text-gray-400 ${!errorMessage && "ml-auto"}`}>
            {bio?.length}/{bioMaxLength}
          </span>
        </div>
      </div>

      <ButtonComponent onClick={handleChangeUserBio} className="capitalize w-full font-bold mt-3 font-space-grotesk" size={"large"} type="primary" disabled={!bio || errorMessage}>
        simpan
      </ButtonComponent>
    </section>
  );
};

export default ChangeUserBioMobilePage;
