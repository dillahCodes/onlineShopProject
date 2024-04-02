import { Empty } from "antd";
import PropTypes from "prop-types";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { CgArrowTopRight } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const NavbarDeskstopSearchResult = (props) => {
  const { selectedItemIndex, resultsValue, onFocus, onBlur, searchValue, ...rest } = props;
  const navigate = useNavigate();

  return (
    <div
      {...rest}
      className="z-10 p-5 overflow-y-auto text-base rounded-md"
      onBlur={onBlur}
      onFocus={onFocus}
    >
      <p className="capitalize">{searchValue}</p>
      {resultsValue?.map((item, index) => (
        <span
          className={` ${
            index === selectedItemIndex ? "bg-[#0d0d0d] text-white" : null
          } block p-1 my-1 rounded-md hover:bg-[#0d0d0d] hover:text-white transition-all duration-300`}
          key={item.id}
        >
          <span className="flex items-center gap-x-1" onClick={() => navigate(item.to)}>
            <CgArrowTopRight /> {item.title}
          </span>
        </span>
      ))}
      {resultsValue.length === 0 && (
        <Empty
          className="flex flex-col items-center w-full mx-auto text-center"
          image={<MdOutlineRemoveShoppingCart className="text-5xl" />}
          description={<span>{`no result found for ${searchValue}`}</span>}
        />
      )}
    </div>
  );
};

export default NavbarDeskstopSearchResult;

NavbarDeskstopSearchResult.propTypes = {
  searchValue: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  resultsValue: PropTypes.array,
  selectedItemIndex: PropTypes.number,
};
