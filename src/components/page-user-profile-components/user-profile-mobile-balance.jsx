import { useNavigate } from "react-router-dom";
import formatCurrencyToIDR from "../../utils/format-currency";
import ButtonComponent from "../ui-components/button-component";

const listMenu = [
  {
    title: formatCurrencyToIDR(0),
    name: "top-up gopay",
    image: "https://images.tokopedia.net/img/walletapp/v1/pemuda-logo-short.png",
  },
  {
    title: "daftar sekarang",
    name: "tokopedia card",
    image: "https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/5ca9b45d.png",
  },
  {
    title: formatCurrencyToIDR(0),
    name: "saldo tokopedia",
    image: "https://images.tokopedia.net/img/payment/saldo/widget/icons/saldo.png",
  },
];

const UserProfileMobileBalance = () => {
  const navigate = useNavigate();
  const goToComingSoonPage = () => navigate("/coming-soon");
  return (
    <section className="w-full">
      {/* header */}
      <div className="w-full flex items-center justify-between capitalize">
        <h1 className="text-base text-gray-500 font-bold font-space-grotesk cappitalize">saldo & points</h1>
        <ButtonComponent
          className={"text-[#00AA5B] bg-transparent p-0 border-none shadow-none font-semibold"}
          onClick={goToComingSoonPage}
        >
          lihat semua
        </ButtonComponent>
      </div>
      <div className="w-full px-1 py-3 bg-white shadow-md flex rounded-md box-border">
        {listMenu.map((item, index) => (
          <div
            className={`w-full relative ${
              index !== listMenu.length - 1 &&
              "before:absolute before:w-[1px] before:h-3/4 before:right-0 before:rounded-md before:bg-gray-200 before:top-1/2 before:-translate-y-1/2"
            }`}
            key={index}
          >
            <img src={item.image} alt={item.name} className="w-10 mx-auto" />
            <div className="w-full flex flex-col text-center">
              <span className={`font-bold text-sm capitalize ${index === 1 ? "text-[#00AA5B]" : ""}`}>
                {item.title}
              </span>
              <span className="text-xs">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserProfileMobileBalance;
