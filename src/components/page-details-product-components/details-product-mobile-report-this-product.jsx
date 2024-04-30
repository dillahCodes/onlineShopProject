import { CiWarning } from "react-icons/ci";
import ButtonComponent from "../ui-components/button-component";
import { useNavigate } from "react-router-dom";

const DetailsProductMobileReportThisProduct = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-white mt-2 p-3 flex items-center gap-x-1">
      <div>
        <CiWarning />
      </div>
      <div className="w-full flex items-center gap-x-1 font-space-grotesk">
        <span>produk bermasalah?</span>
        <ButtonComponent
          onClick={() => navigate("/coming-soon")}
          className="border-none shadow-none font-bold  p-0 text-[#00AA5B]"
        >
          laporkan
        </ButtonComponent>
      </div>
    </section>
  );
};

export default DetailsProductMobileReportThisProduct;
