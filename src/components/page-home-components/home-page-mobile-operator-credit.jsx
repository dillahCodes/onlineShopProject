import operatorCreditImg from "../../assets/home-page/home-page-operator-credit-top-up.jpg";
import xlIcon from "../../assets/home-page/xl-icon.png";
import telkomselIcon from "../../assets/home-page/telkomsel-icon.png";
import indosatIcon from "../../assets/home-page/indosat-icon.png";
import axisIcon from "../../assets/home-page/axis-icon.png";
import triIcon from "../../assets/home-page/tri-icon.png";
import smartfrenIcon from "../../assets/home-page/smartfren-icon.png";
import { useNavigate } from "react-router-dom";

const operatorNameList = [
  {
    name: "XL",
    image: xlIcon,
  },
  {
    name: "Telkomsel",
    image: telkomselIcon,
  },
  {
    name: "indosat",
    image: indosatIcon,
  },
  {
    name: "Axis",
    image: axisIcon,
  },
  {
    name: "Tri",
    image: triIcon,
  },
  {
    name: "Smartfren",
    image: smartfrenIcon,
  },
];
const HomePageMobileOperatorCredit = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="p-[16px] text-lg pb-[12px] font-bold font-space-grotesk capitalize">
        <h1>isi pulsa, yuk!</h1>
      </div>
      <div className="w-full bg-[#00AA5B] h-fit  ">
        <img
          loading="lazy"
          src={operatorCreditImg}
          alt="baneroperatorcredit"
          className="w-full"
        />
        <div
          className="box-border flex  no-scrollbar  p-2
          w-full gap-2  flex-col  flex-wrap  justify-between  max-h-[310px] overflow-x-auto overflow-y-auto "
        >
          {operatorNameList.map((operator, index) => (
            <div
              onClick={() => navigate(`/coming-soon`)}
              key={index}
              className=" min-w-[130px] min-h-[100px] rounded-lg bg-white p-2 flex flex-col gap-y-2 items-center"
            >
              <div className="w-14 h-14 flex justify-center items-center rounded-xl shadow-md">
                <img
                  src={operator.image}
                  loading="lazy"
                  className="w-11"
                  alt={operator.name}
                />
              </div>
              <p>{operator.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePageMobileOperatorCredit;
