import ButtonComponent from "../ui-components/button-component";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import PropTypes from "prop-types";

const DetailsProductMobileButtonSortDiscuss = ({
  discussSortCategories,
  sortCategory,
  setSelectedOtherSortCategory,
  handleOpenAndCloseDrawer,
  isOpen,
}) => {
  return (
    <section className="w-full  overflow-x-auto no-scrollbar">
      <section className="w-fit flex gap-x-3">
        {/* discuss sort by date button */}
        <ButtonComponent
          className={`capitalize rounded-lg flex items-center gap-x-2 ${
            discussSortCategories[0] !== sortCategory.date && "border-[#00AA5B] bg-[#ECFEF4] "
          } `}
          onClick={handleOpenAndCloseDrawer}
        >
          <span className={` ${discussSortCategories[0] !== sortCategory.date ? "text-[#00AA5B]" : "text-gray-500"}`}>
            {sortCategory.date}
          </span>
          <div className="text-gray-500 text-base">{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
        </ButtonComponent>

        {/* discuss sort by other */}
        {discussSortCategories.slice(2).map((item, index) => (
          <ButtonComponent
            onClick={() => setSelectedOtherSortCategory(item)}
            className={`capitalize ${
              sortCategory.other.includes(item) ? "text-[#00AA5B] border-[#00AA5B] bg-[#ECFEF4]" : "text-gray-500"
            }`}
            key={index}
          >
            {item}
          </ButtonComponent>
        ))}
      </section>
    </section>
  );
};

export default DetailsProductMobileButtonSortDiscuss;

DetailsProductMobileButtonSortDiscuss.propTypes = {
  discussSortCategories: PropTypes.array,
  sortCategory: PropTypes.object,
  setSelectedOtherSortCategory: PropTypes.func,
  handleReseAllButtonSelected: PropTypes.func,
  handleOpenAndCloseDrawer: PropTypes.func,
  isOpen: PropTypes.bool,
};
