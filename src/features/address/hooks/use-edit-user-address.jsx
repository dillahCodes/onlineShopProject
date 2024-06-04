import { mutate } from "swr";
import { useAuth } from "../../../context/user-auth-context";
import authServices from "../../auth/services/auth-services";

const useEditUserAddress = () => {
  const { user } = useAuth();
  const handleEditUserAddress = async (addressId, addressLabel, addressDetail, courierNote, name, tel, regency) => {
    if (!user || !addressId) return;

    const payload = {
      addressLabel: addressLabel,
      addressComplete: addressDetail,
      noteToCourier: courierNote,
      receiperName: name,
      phoneNumber: tel,
      regency: regency,
    };

    try {
      await authServices.updateUserAddress(user.user_id, addressId, payload);
      mutate(`/api/user/${user.user_id}`);
    } catch (error) {
      console.error("error while update user address", error);
    }
  };

  return { handleEditUserAddress };
};

export default useEditUserAddress;
