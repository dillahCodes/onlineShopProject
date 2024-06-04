import { useSearchAddress } from "./context/search-address-context";
import MobileAddressCard from "./mobile-address-card";

const MobileAddressList = () => {
  const { addressFiltered } = useSearchAddress();
  // .sort((a, b) => (a.is_selected === b.is_selected ? 0 : a.is_selected ? -1 : 1)) || [];

  //   map data
  return (
    <div className="w-full flex  flex-col gap-y-3">
      {addressFiltered.map((data) => (
        <MobileAddressCard key={data.address_id} addressId={data.address_id} />
      ))}
    </div>
  );
};

export default MobileAddressList;
