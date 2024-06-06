import { Select } from "antd";
import ButtonComponent from "../../../components/ui-components/button-component";

const options = [
  {
    value: "Info",
    label: "Info",
  },
  {
    value: "Aktifitas",
    label: "Aktifitas",
  },
  {
    value: "Artikel",
    label: "Artikel",
  },
];
const SellerHomePageSellerNewsCard = () => {
  return (
    <div className="w-full p-3 bg-white rounded-md flex flex-col">
      <div className="w-full flex items-center gap-x-1">
        <span className="text-base font-bold font-space-grotesk">Bacaan Terkini</span>
        <span className="p-0.5 bg-red-400 rounded-sm text-white font-bold font-space-grotesk text-[8px]">BARU</span>
        <Select defaultValue="Artikel" dropdownStyle={{ width: "fit-content", fontFamily: "Space Grotesk" }} className="ml-auto font-space-grotesk" options={options} />
      </div>

      <div className="w-full mt-3">
        {newsList.map((item) => (
          <div className="w-full my-2 gap-x-2 flex font-space-grotesk" key={item.id}>
            <img src={item.image} alt="news image" className="w-36 rounded-md" />
            <div className="w-full flex flex-col">
              <h1 className="font-bold text-sm">{item.title}</h1>
              <div className="w-full flex gap-x-1 text-xs text-gray-400 ">
                <span>Materi Seller Baru</span>
                <span>&middot;</span>
                <span>{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ButtonComponent className="self-end p-0 shadow-none border-none text-sm font-bold font-space-grotesk text-[#00AA5B]">Baca Selengkapnya</ButtonComponent>
    </div>
  );
};

export default SellerHomePageSellerNewsCard;

const newsList = [
  {
    id: 1,
    image: "https://images.tokopedia.net/img/cache/350/kjjBfF/2021/8/30/7d19ad99-a28a-49fe-beb7-ee8f9ca292e6.jpg.webp?ect=4g",
    title: "[Buka Toko] Langkah Mudah Buka Toko DI...",
    date: "21 MAY 2024",
  },
  {
    id: 2,
    image: "https://images.tokopedia.net/img/cache/350/kjjBfF/2024/4/26/4b6c6bf9-4bea-4f09-8e96-d8452fb10ba7.png.webp?ect=4g",
    title: "Dapatkan Teman Diskusi Berjualan Dan Undangan...",
    date: "14 MAY 2024",
  },
  {
    id: 3,
    image: "https://images.tokopedia.net/img/kjjBfF/2021/1/28/d2ef0a8a-6f3b-41e5-92a7-dde5f310565c.png?ect=4g",
    title: "[Buka Toko] Verifikasi Toko Sekarang Maki...",
    date: "14 MAY 2024",
  },
];
