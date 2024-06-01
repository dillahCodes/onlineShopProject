import { IoIosSearch } from "react-icons/io";
import ButtonComponent from "../ui-components/button-component";
import PropTypes from "prop-types";

const MobileSetAddressHeaderComponent = ({ addressDataFrom, selectedAddress, setSelectedAddress }) => {
  return (
    <header className="w-full border-b border-t sticky top-0 bg-white z-10">
      <div className="w-full p-3">
        <div className=" rounded-md overflow-hidden border-[2px] flex items-center">
          <span className="text-lg p-1 text-gray-300">
            <IoIosSearch />
          </span>
          <input type="text" className="w-full px-1 py-1.5 focus:outline-none flex items-center" placeholder="Cari Alamat" />
        </div>
      </div>
      {/* address from */}
      <div
        className={`w-full flex items-center overflow-hidden relative before:absolute ${
          selectedAddress === addressDataFrom[1] ? "before:translate-x-full" : "before:translate-x-0"
        } before:h-[2px] before:rounded-full before:w-1/2 before:z-[1] before:bg-[#00AA5B] before:bottom-0 before:transition-transform before:duration-300`}
      >
        {addressDataFrom.map((data, index) => (
          <ButtonComponent
            onClick={() => setSelectedAddress(data)}
            className={`w-full rounded-none shadow-none border-none py-6 font-bold capitalize ${
              selectedAddress === data ? "text-[#00AA5B]" : "text-gray-400"
            } flex items-center justify-center`}
            key={index}
          >
            {data}
          </ButtonComponent>
        ))}
      </div>
    </header>
  );
};

export default MobileSetAddressHeaderComponent;
MobileSetAddressHeaderComponent.propTypes = {
  addressDataFrom: PropTypes.array,
  selectedAddress: PropTypes.string,
  setSelectedAddress: PropTypes.func,
};
