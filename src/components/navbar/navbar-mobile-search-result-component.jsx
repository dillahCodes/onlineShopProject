import { IoIosArrowRoundBack } from "react-icons/io";
import { CgArrowTopRight } from "react-icons/cg";
import InputSearch from "../input/input-search";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const NavbarMobileSearchResultComponent = ({ onClick, recomendedSearch }) => {
  const navigate = useNavigate();

  return (
    <div className="absolute inset-0 z-50 w-full h-full p-5 bg-[#f7f7f7]">
      <div className="flex items-center w-full gap-x-5">
        <IoIosArrowRoundBack className="text-5xl" onClick={onClick} />
        <InputSearch autoFocus />
      </div>
      <div className="w-full">
        {recomendedSearch.map((item) => (
          <span
            className={`
                block p-1 my-1 rounded-md hover:bg-[#0d0d0d] hover:text-white transition-all duration-300`}
            key={item.id}
          >
            <span className="flex items-center gap-x-1" onClick={() => navigate(item.to)}>
              <CgArrowTopRight className="text-3xl" /> {item.title}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default NavbarMobileSearchResultComponent;
NavbarMobileSearchResultComponent.propTypes = {
  onClick: PropTypes.func,
  recomendedSearch: PropTypes.array,
};
