import { IoCheckmark, IoShareSocialOutline } from "react-icons/io5";
import truncateString from "../../utils/truncate-string";
import PropTypes from "prop-types";
import ButtonComponent from "../ui-components/button-component";

const MobileAddressCard = ({ isSelected, label, onBehalfOf, tel, address }) => {
  return (
    <div
      className={`w-full p-5 relative before:absolute before:z-[1] before:w-1 before:left-0 before:h-6 before:rounded-r-md before:bg-[#00AA5B] border rounded-md ${
        isSelected && "bg-[#ECFEF4] border-[#00AA5B]"
      }`}
    >
      <LabelAddress label={label} isSelected={isSelected} />
      <OnBehalfOf name={onBehalfOf} tel={tel} />
      <Address address={address} isSelected={isSelected} />
      <ButtonComponent className="w-full mt-3 bg-white shadow-none font-bold font-space-grotesk text-gray-500">Ubah Alamat</ButtonComponent>
    </div>
  );
};

export default MobileAddressCard;

const LabelAddress = ({ label, isSelected }) => {
  return (
    <div className="w-full flex items-center gap-x-1">
      <p className="text-xs font-space-grotesk font-bold capitalize">{label}</p>
      {isSelected && <span className="bg-gray-200 text-gray-600 p-0.5 px-1 rounded-[4px] font-medium text-xs capitalize">utama</span>}
      <span className="text-lg ml-auto">
        <IoShareSocialOutline />
      </span>
    </div>
  );
};

const OnBehalfOf = ({ name, tel }) => {
  return (
    <div className="w-full flex flex-col">
      <h1 className="font-bold text-sm font-space-grotesk  capitalize">{truncateString(name, 12)}</h1>
      <p className=" text-[12px]  text-gray-500">{tel}</p>
    </div>
  );
};

const Address = ({ address, isSelected }) => {
  return (
    <div className="w-full mt-1 flex items-center">
      <span className="text-gray-600  font-space-grotesk font-medium">{truncateString(address, 70)}</span>
      {isSelected && (
        <span className="text-lg text-[#00AA5B] ml-auto">
          <IoCheckmark />
        </span>
      )}
    </div>
  );
};

Address.propTypes = {
  address: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
};

LabelAddress.propTypes = {
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
};

OnBehalfOf.propTypes = {
  name: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
};

MobileAddressCard.propTypes = {
  tel: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  address: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onBehalfOf: PropTypes.string.isRequired,
};
