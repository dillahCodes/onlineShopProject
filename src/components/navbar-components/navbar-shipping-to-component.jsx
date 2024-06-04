import { MdKeyboardArrowDown } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import NavbarShippingToDrawerComponent from "./navbar-shipping-to-drawer-component";
import useToggle from "../../hooks/use-toggle";
import NavbarShippingToSelectLocation from "./navbar-shipping-to-select-location";
import { useShippingToContext } from "../../context/address-shipping-to-context";
import truncateString from "../../utils/truncate-string";

const NavbarShippingToComponent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useToggle();
  const [isSecondDrawerOpen, setIsSecondDrawerOpen] = useToggle();
  const { displayValue } = useShippingToContext();

  return (
    <>
      <div className="flex cursor-pointer gap-x-2" onClick={setIsDrawerOpen}>
        <span className="flex items-center gap-x-1 capitalize">
          <FaLocationDot className="text-[#00AA5B]" />
          dikirim ke
        </span>
        <div className="flex items-center">
          <span className="font-bold">{truncateString(displayValue, 40)}</span>
          <MdKeyboardArrowDown className="text-xl" />
        </div>
      </div>
      <NavbarShippingToDrawerComponent isOpen={isDrawerOpen} onClose={setIsDrawerOpen} onSecondDrawerOpen={setIsSecondDrawerOpen} />
      <NavbarShippingToSelectLocation isOpen={isSecondDrawerOpen} onClose={setIsSecondDrawerOpen} />
    </>
  );
};

export default NavbarShippingToComponent;
