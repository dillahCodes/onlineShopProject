import { IoIosArrowForward } from "react-icons/io";
import formatCurrencyToIDR from "../../utils/format-currency";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const MobileTokopediaPlusOffer = ({ className }) => {
  const navigate = useNavigate();

  const goToComingSoonPage = () => navigate("/coming-soon");
  return (
    <section
      className={`w-full border p-1 rounded-lg flex gap-x-2 items-center ${className}`}
      onClick={goToComingSoonPage}
    >
      <img
        src="https://images.tokopedia.net/img/plus/logo/account/globalmenu/checkout/Logo%20Area%20Entrypoints@4x.png"
        alt="tokopedia plus"
        className="w-11 h-11"
      />
      <div className="flex flex-col">
        <p className="font-bold font-space-grotesk">Nikmatin Bebas Ongkir tanpa batas!</p>
        <p className="text-xs">min. belanja {formatCurrencyToIDR(0)}, bebas biaya aplikasi-</p>
      </div>
      <IoIosArrowForward className="ml-auto text-lg" />
    </section>
  );
};

export default MobileTokopediaPlusOffer;

MobileTokopediaPlusOffer.propTypes = {
  className: PropTypes.string,
};
