import { useNavigate } from "react-router-dom";
import ButtonComponent from "../ui-components/button-component";
import { IoIosArrowForward } from "react-icons/io";

const listMenu = [
  {
    name: "toko member",
    info: "0 toko",
    image: "https://images.tokopedia.net/img/rewardspage/widget/tokomember.png",
  },
  {
    name: "misi seru",
    info: "0 tantangan",
    image: "https://images.tokopedia.net/img/rewardspage/widget/TopQuest.png",
  },
  {
    name: "kupon saya",
    info: "0 kupon",
    image: "https://images.tokopedia.net/img/rewardspage/widget/MyCoupons.png",
  },
];

const UserProfileMobileMemberInfo = () => {
  const navigate = useNavigate();
  const goToComingSoonPage = () => navigate("/coming-soon");
  return (
    <section className="w-full">
      {/* header */}
      <div className="w-full flex items-center justify-between capitalize">
        <div className="flex items-center gap-x-2 mb-2">
          <img
            src="https://images.tokopedia.net/img/img/HThbdi/2023/01/13/pakai_promo_member_silver.png"
            alt="silver member"
            className="w-6"
          />
          <h1 className="text-base text-gray-500 font-bold font-space-grotesk cappitalize">member silver</h1>
        </div>
        <ButtonComponent
          onClick={goToComingSoonPage}
          className={" bg-transparent p-0 border-none shadow-none font-semibold"}
        >
          <IoIosArrowForward />
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
              <span className={`font-semibold text-[10px] capitalize`}>{item.name}</span>
              <span className="text-xs font-bold">{item.info}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserProfileMobileMemberInfo;
