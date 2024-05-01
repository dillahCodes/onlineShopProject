import { IoIosArrowRoundBack } from "react-icons/io";
import InputSearch from "../input-components/input-search";
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import ButtonComponent from "../ui-components/button-component";
import truncateString from "../../utils/truncate-string";
import { useSearchBar } from "../../context/search-bar-context";

const NavbarMobileSearchResultComponent = ({ onClick, recomendedSearch, onChange, onKeyDown }) => {
  const { setSearchBarIsFocused } = useSearchBar();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { productId } = useParams();

  const handleCloseSearchOverlay = () => {
    setSearchBarIsFocused(false);
  };

  const navigateSearchHandler = (to) => {
    setSearchBarIsFocused(false);
    if (location.pathname === `/product/${productId}`) {
      const queryString = `?q=${encodeURIComponent(to)}&st=product`;
      navigate(`/product/search${queryString}`, { replace: true });
    } else if (location.pathname === "/product/search") {
      setSearchParams({ q: to, st: "product" });
    } else {
      navigate(`product/search?q=${encodeURIComponent(to)}&st=product`, { replace: true });
    }
  };

  return (
    <div className="fixed inset-0 z-[99999] w-full h-full p-5 bg-white">
      <div className="flex items-center w-full gap-x-5">
        <div className="text-4xl" onClick={handleCloseSearchOverlay}>
          <IoIosArrowRoundBack onClick={onClick} />
        </div>
        <InputSearch autoFocus onChange={onChange} onKeyDown={onKeyDown} defaultValue={searchParams.get("q")} />
      </div>
      {/* suggestion and result */}
      <div className="w-full mt-5 flex flex-col gap-y-2">
        {recomendedSearch?.map((item, index) => (
          <span
            className="block p-1 rounded-md transition-all duration-300 cursor-pointer"
            key={index}
            onClick={() => navigateSearchHandler(item.to)}
          >
            <button className="flex items-center gap-x-1 focus:outline-none">
              <div className="text-xl">
                <CiSearch />
              </div>
              <span>{truncateString(item.title, 40)}</span>
            </button>
          </span>
        ))}
      </div>

      {/* help */}
      <section className="w-full border mt-5 flex items-center p-2 rounded-md">
        <div className="flex gap-x-5">
          <div className="text-xl">
            <HiOutlineLightBulb />
          </div>
          <span className="capitalize font-space-grotesk">tips & trik pencarian</span>
        </div>

        <ButtonComponent // Menggunakan ButtonComponent
          onClick={() => navigate("/coming-soon")}
          className="border-none ml-auto text-[#00AA5B] capitalize rounded-none shadow-none outline-none font-bold font-space-grotesk"
        >
          pelajari
        </ButtonComponent>
      </section>
    </div>
  );
};

export default NavbarMobileSearchResultComponent;
NavbarMobileSearchResultComponent.propTypes = {
  onClick: PropTypes.func,
  recomendedSearch: PropTypes.array,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
};
