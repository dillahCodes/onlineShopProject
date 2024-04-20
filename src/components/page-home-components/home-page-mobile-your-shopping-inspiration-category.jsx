import { useNavigate } from "react-router-dom";

const HomePageMobileYourShoppingInspirationCategory = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[360px] w-full">
      {/* title */}
      <div className="w-full p-4 pb-3 flex justify-between items-center">
        <div>
          <h1 className="font-bold font-space-grotesk text-lg capitalize">
            kategori inspirasi belanjamu
          </h1>
        </div>
      </div>

      <div className="box-border flex items-start no-scrollbar  w-full gap-2 flex-col  flex-wrap  justify-between leading-[16px] max-h-[320px] overflow-x-auto overflow-y-auto px-4 pb-3 pt-2">
        {/* card */}
        {cardDataList.map((cardData, index) => (
          <div
            className="block leading-[16px] w-[150px] min-h-[135px]  max-h-[140px] border rounded-md overflow-hidden"
            key={index}
            onClick={() => navigate(`coming-soon`)}
          >
            <div className="w-full">
              <img src={cardData.image} alt="" className="object-cover" />
            </div>
            <div className="px-2 py-1 w-full  font-bold flex justify-center items-center">
              <h1>{cardData.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageMobileYourShoppingInspirationCategory;

const cardDataList = [
  {
    image:
      "https://images.tokopedia.net/img/cache/200/zIWZzz/2023/9/5/fff534b0-54dc-42c3-a8ec-ef2787104dd8.jpg",
    title: "fashion pria",
  },
  {
    image:
      "https://images.tokopedia.net/img/cache/200/zIWZzz/2023/9/5/39990fac-e29a-4c77-880a-25a5b9dc11d1.jpg",
    title: "kesehatan",
  },
  {
    image:
      "https://images.tokopedia.net/img/cache/200/zIWZzz/2023/9/5/a357e32a-99bc-4d77-9851-cdb0ca2abb25.jpg",
    title: "fashion wanita",
  },
  {
    image:
      "https://images.tokopedia.net/img/cache/200/zIWZzz/2023/9/5/b502faea-34c8-4790-81b4-f172d7691cea.jpg",
    title: "perawatan tubuh",
  },
  {
    image:
      "https://images.tokopedia.net/img/cache/200/zIWZzz/2023/9/5/a3fafa8f-0db4-4930-b32e-6287c5b92eab.jpg",
    title: "ibu & bayi",
  },
  {
    image:
      "https://images.tokopedia.net/img/cache/200/zIWZzz/2023/9/5/8beef535-841d-4f59-a25d-e36c26464794.jpg",
    title: "pertukangan",
  },
  {
    image:
      "https://images.tokopedia.net/img/cache/200/zIWZzz/2023/9/5/17d1b2ff-9218-4e7f-8fda-63971b39c73a.jpg",
    title: "Ofice & Stationery",
  },
  {
    image:
      "https://images.tokopedia.net/img/cache/200/zIWZzz/2023/9/5/682d4413-edca-46d1-bc85-6889b6908382.jpg",
    title: "fashion anak & bayi",
  },
  {
    image:
      "https://images.tokopedia.net/img/cache/200/zIWZzz/2023/9/5/383ba35a-a2aa-4282-8fec-408c9ecc465b.jpg",
    title: "otomotif",
  },
  {
    image:
      "https://images.tokopedia.net/img/cache/200/zIWZzz/2023/9/5/b4165f21-3f81-45ed-a761-a46aaf9b7faa.jpg",
    title: "mainan & hobi",
  },
];
