import { MdKeyboardArrowDown } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const NavbarShippingToComponent = () => {
  return (
    <div className="flex cursor-pointer gap-x-2">
      <span className="flex items-center gap-x-1">
        <FaLocationDot className="text-[#00AA5B]" />
        dikirim ke
      </span>
      <div className="flex items-center">
        <span className="font-bold "> rajeg, tangerang banten</span>
        <MdKeyboardArrowDown className="text-xl" />
      </div>
    </div>
  );
};

export default NavbarShippingToComponent;
