import { mutate } from "swr";
import { useAuth } from "../../context/user-auth-context";
import authServices from "../../features/auth/services/auth-services";
import ButtonComponent from "../ui-components/button-component";
import { useSearchAddress } from "./context/search-address-context";

const BottomButtonSelectAddressComponent = ({ ...props }) => {
  const { user } = useAuth();
  const { selectAddress } = useSearchAddress();
  const currentSelectedAddress = user?.address.find((data) => data.is_selected === true)?.address_id;

  const handleSelectAddress = async () => {
    const addressIstSelected = user?.address.find((data) => data.is_selected === true)?.address_id;
    try {
      if (addressIstSelected) await authServices.updateUserAddress(user?.user_id, addressIstSelected, { isSelected: false });
      await authServices.updateUserAddress(user?.user_id, selectAddress, { isSelected: true });

      const dataAddressFromLocal = localStorage.getItem("shippingToData");
      if (dataAddressFromLocal) localStorage.removeItem("shippingToData");

      mutate(`/api/user/${user.user_id}`);
    } catch (error) {
      console.error("error while selecting address", error);
    }
  };

  return (
    <div className="fixed bg-white bottom-0 border-t p-2 w-full overflow-hidden z-[2] max-w-[500px]">
      <ButtonComponent
        onClick={handleSelectAddress}
        disabled={currentSelectedAddress === selectAddress}
        type="primary"
        className="w-full capitalize font-bold font-space-grotesk"
        {...props}
      >
        pilih alamat
      </ButtonComponent>
    </div>
  );
};

export default BottomButtonSelectAddressComponent;
