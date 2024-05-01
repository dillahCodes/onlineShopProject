import { IoSearchOutline } from "react-icons/io5";
import PropTypes from "prop-types";

const NavbarFakeSearchbarComponent = ({ fakeSearchbarText, className, ...props }) => {
  return (
    <div className={` w-full border flex items-center truncate  p-2 gap-x-1  ${className}`} {...props}>
      <div className="text-base text-gray-400">
        <IoSearchOutline />
      </div>
      <span className="truncate text-sm">{fakeSearchbarText}</span>
    </div>
  );
};

export default NavbarFakeSearchbarComponent;
NavbarFakeSearchbarComponent.propTypes = {
  fakeSearchbarText: PropTypes.string,
  className: PropTypes.string,
};
