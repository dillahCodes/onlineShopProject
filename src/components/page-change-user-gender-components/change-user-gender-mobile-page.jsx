import { useState } from "react";
import { useAuth } from "../../context/user-auth-context";
import ButtonComponent from "../ui-components/button-component";
import authServices from "../../features/auth/services/auth-services";
import { mutate } from "swr";

const imageGenderList = [
  {
    id: "pria",
    imageURL: "https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/abb61d0e.svg",
    imageActiveURL: "https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/d6e5b4c4.svg",
  },
  {
    id: "wanita",
    imageURL: "https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/01a29f90.svg",
    imageActiveURL: "https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/ae8abac3.svg",
  },
];

const ChangeUserGenderMobilePage = () => {
  const { user } = useAuth();
  const [gender, setGender] = useState(user?.gender);

  const updateGender = async () => {
    if (user?.gender) return;
    try {
      await authServices.updateUserData(user?.user_id, { gender });
      mutate(`/api/user/${user?.user_id}`);
    } catch (error) {
      console.error("Error updating gender:", error);
    }
  };

  const setImageGender = (id) => {
    if (user?.gender) return;
    setGender(id);
  };

  return (
    <section className="w-full p-3">
      <div className="w-full">
        <div className="w-full text-center">
          <h1 className="font-bold font-space-grotesk capitalize text-lg">pilih jenis kelamin</h1>
          <p className="text-gray-400 capitalize font-space-grotesk">jenis kelamin hanya dapat diatur sekali</p>
        </div>

        <div className="w-full flex   items-center justify-center gap-x-16 flex-wrap mt-10">
          {imageGenderList.map(({ id, imageURL, imageActiveURL }) => (
            <div
              key={id}
              className={` flex flex-col ${user?.gender && "cursor-not-allowed"}`}
              onClick={() => setImageGender(id)}
            >
              <img src={gender === id ? imageActiveURL : imageURL} alt={id} className="w-24 h-24 mx-auto" />
              <span className="mx-auto">{id}</span>
            </div>
          ))}
        </div>

        <ButtonComponent
          onClick={updateGender}
          className="w-full capitalize font-bold font-space-grotesk mt-10 truncate"
          type={"primary"}
          size="large"
          disabled={user?.gender}
        >
          <span className="truncate">{!user?.gender ? "simpan" : "hanya bisa diubah sekali"}</span>
        </ButtonComponent>
      </div>
    </section>
  );
};

export default ChangeUserGenderMobilePage;
