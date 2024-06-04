import { mutate } from "swr";
import { useAuth } from "../../../context/user-auth-context";
import authServices from "../../auth/services/auth-services";

const useAddUserAddress = () => {
  const { user } = useAuth();
  const handleAddAddress = async (addressLabel, receiperName, phoneNumber, regency, addressComplete, noteToCourier, isActiveAddress) => {
    if (!addressLabel || !receiperName || !phoneNumber || !addressComplete || !user) return;

    const payload = {
      address: [
        {
          addressLabel,
          receiperName,
          isSelected: user.address.length === 0 || (isActiveAddress && user.address.length >= 1) ? true : false,
          regency,
          phoneNumber,
          addressComplete,
          noteToCourier,
        },
      ],
    };

    try {
      await authServices.updateUserData(user.user_id, payload);

      if (isActiveAddress && user.address.length >= 1) {
        const addressIstSelected = user?.address.find((data) => data.is_selected === true)?.address_id;
        await authServices.updateUserAddress(user?.user_id, addressIstSelected, { isSelected: false });
      }

      mutate(`/api/user/${user.user_id}`);
    } catch (error) {
      console.error("error while add user address", error);
    }
  };

  return { handleAddAddress };
};

export default useAddUserAddress;
