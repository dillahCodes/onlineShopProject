import { mutate } from "swr";
import { useAuth } from "../../context/user-auth-context";
import authServices from "../../features/auth/services/auth-services";
import { useEffect, useState } from "react";

const MobilePhotoProfile = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { user } = useAuth();
  const [userAvatar, setUserAvatar] = useState(user?.avatar === "default_avatar.png" ? "/" + user?.avatar : user?.avatar);

  useEffect(() => {
    setUserAvatar(user?.avatar);
  }, [user]);

  const handleResetErrorMessage = () => setTimeout(() => setErrorMessage(""), 5000);

  const handleChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile || !user) return;

    // validation image
    const validImageTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!validImageTypes.includes(selectedFile.type)) {
      setErrorMessage("File harus berupa gambar");
      return handleResetErrorMessage();
    }

    // validation max size
    const maxSizeInMB = 4;
    if (selectedFile.size > maxSizeInMB * 1024 * 1024) {
      setErrorMessage("File harus kurang dari 4 MB");
      return handleResetErrorMessage();
    }

    // create FormData for upload image
    const formData = new FormData();
    formData.append("imageUrl", selectedFile);

    // configuration header for upload image
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      await authServices.uploadUserImage(user.user_id, formData, config);
      mutate(`/api/user/${user.user_id}`); // revalidate user profile
    } catch (error) {
      console.error("Error while uploading image", error);
    }
  };

  return (
    <section className="w-full py-5 border-b" key={userAvatar}>
      <label htmlFor="photo" role="button" className="text-center flex flex-col gap-y-3 w-fit mx-auto">
        <div className="w-16 h-16 mx-auto">
          <img src={userAvatar} alt="user default image" className="w-full h-full rounded-full object-cover" />
        </div>
        <h1 className="font-bold text-base capitalize text-[rgb(0,_170,_91)]">ubah foto profil</h1>
        {errorMessage && <p className="text-red-500 text-xs font-bold">{errorMessage}</p>}
        <input type="file" name="photo" id="photo" className="hidden" onChange={handleChange} />
      </label>
    </section>
  );
};

export default MobilePhotoProfile;
