import { CiLocationOn } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";

const NavbarShippingToComponent = () => {
  return (
    <div className="flex cursor-pointer gap-x-2">
      <span className="flex items-center gap-x-1">
        <CiLocationOn />
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
