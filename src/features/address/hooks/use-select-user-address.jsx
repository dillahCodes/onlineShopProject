import { mutate } from "swr";
import { useAuth } from "../../../context/user-auth-context";
import authServices from "../../auth/services/auth-services";

const useSelectUserAddress = () => {
  const { user } = useAuth();
  const handleSelectedUserAddress = async (addressId) => {
    if (!user || !addressId) return;

    const currentAddressSelected = user?.address.find((data) => data.is_selected === true)?.address_id;
    const dataAddressFromLocal = localStorage.getItem("shippingToData");
    try {
      if (currentAddressSelected) await authServices.updateUserAddress(user?.user_id, currentAddressSelected, { isSelected: false });
      if (dataAddressFromLocal) localStorage.removeItem("shippingToData");
      await authServices.updateUserAddress(user?.user_id, addressId, { isSelected: true });

      mutate(`/api/user/${user.user_id}`);
    } catch (error) {
      console.error("error while selecting address", error);
    }
  };

  return { handleSelectedUserAddress };
};

export default useSelectUserAddress;
