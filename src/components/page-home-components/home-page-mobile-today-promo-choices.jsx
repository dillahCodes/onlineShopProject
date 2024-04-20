import { Skeleton } from "antd";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const HomePageMobileTodayPromoChoices = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      {/* title */}
      <div className="w-full p-4 pb-3 flex justify-between items-center">
        <div>
          <h1 className="font-bold font-space-grotesk text-lg capitalize">
            pilihan promo hari ini
          </h1>
        </div>
        <div className="p-2 border rounded-full text-lg">
          <IoIosArrowForward />
        </div>
      </div>
      {/* slider content */}
      <div className="   w-full h-[247px] overflow-x-scroll no-scrollbar">
        <div className="flex w-fit gap-x-3 px-4">
          {/* card */}
          {cardDataaList.map((cardData, index) => (
            <div
              className=" w-[140px] h-[231px] overflow-hidden rounded-md shadow-md cursor-pointer"
              key={index}
              onClick={() => navigate(`/coming-soon`)}
            >
              {cardData.image ? (
                <img src={cardData.image} alt={`promo ${index}`} className="object-cover" />
              ) : (
                <Skeleton.Image className="w-full h-full" active />
              )}
            </div>
          ))}
          {/* last card */}
          <div
            onClick={() => navigate(`/coming-soon`)}
            className=" w-[140px] cursor-pointer h-[231px] flex justify-center items-center overflow-hidden rounded-md shadow-md  relative"
            style={{
              background:
                "url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/phoenix/kratos/e65f5df7.svg) no-repeat right top,var(--NN0,#FFFFFF)",
            }}
          >
            <div className="w-full text-center capitalize">
              <p className="font-bold">Cek juga deals lainnya di sini</p>
            </div>
            <div className="w-full absolute bottom-0  px-2 py-1 font-bold capitalize font-space-grotesk text-[#00AA5B]  flex items-center justify-between">
              <span>lihat semua</span>
              <span>
                <IoIosArrowForward />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageMobileTodayPromoChoices;

const cardDataaList = [
  {
    image:
      "https://images.tokopedia.net/img/cache/300/SuMXtx/2024/3/28/a5573323-93f3-4b1b-b96c-91145fb437a0.jpg",
  },
  {
    image:
      "https://images.tokopedia.net/img/cache/300/SuMXtx/2024/4/19/be6aa62e-6897-4e2b-8626-0b4c40b7b51b.jpg",
  },
  {
    image:
      "https://images.tokopedia.net/img/cache/300/SuMXtx/2024/4/17/1e7ed3ee-05af-4257-b482-83491c90d08c.jpg",
  },
  {
    image:
      "https://images.tokopedia.net/img/cache/300/SuMXtx/2024/4/1/7f9d7ffb-6ae5-490a-9870-95982f0a27f6.jpg",
  },
  {
    image:
      "https://images.tokopedia.net/img/cache/300/SuMXtx/2024/4/12/f7934270-2193-4d65-b3ef-0f25bd1fceee.jpg",
  },
  {
    image:
      "https://images.tokopedia.net/img/cache/300/SuMXtx/2024/4/18/ebe902c5-0c16-42fd-8b10-10a7d7495a67.jpg",
  },
  {
    image:
      "https://images.tokopedia.net/img/cache/300/SuMXtx/2024/4/17/fd29bd94-4f81-4761-8058-053b9b03fc5d.jpg",
  },
];
