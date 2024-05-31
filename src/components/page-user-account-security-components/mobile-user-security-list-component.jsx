import { IoIosArrowForward } from "react-icons/io";
import PropTypes from "prop-types";

const MobileUserSecurityListComponent = ({ title, onClick, className }) => {
  return (
    <div className={` shadow-none  ${className} py-4 text-base capitalize  font-bold font-space-grotesk flex items-center`} onClick={onClick}>
      <p>{title}</p>
      <span className="text-lg ml-auto pr-4">
        <IoIosArrowForward />
      </span>
    </div>
  );
};

export default MobileUserSecurityListComponent;
MobileUserSecurityListComponent.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};
