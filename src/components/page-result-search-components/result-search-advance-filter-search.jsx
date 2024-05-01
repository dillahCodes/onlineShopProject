import { HiOutlineAdjustmentsHorizontal, HiOutlineArrowsUpDown } from "react-icons/hi2";
import useNavbarChangeWhenScroll from "../../hooks/use-navbar-change-when-scroll";

const merchantProfileCaategory = [
  {
    category: "official store",
    badge: "https://ecs7.tokopedia.net/img/autocomplete/ic_os.png",
  },
  {
    category: "power merchant",
    badge: "https://ecs7.tokopedia.net/img/autocomplete/ic_pm.png",
  },
  {
    category: "power merchant pro",
    badge: "https://images.tokopedia.net/img/goldmerchant/pm_activation/badge/Power%20Merchant%20Pro.png",
  },
];

const offerCategory = [
  {
    title: "Cashback",
    info: "Dapatkan Uang Kembalian Untuk Bayar Belanja Berikutnya",
  },
  {
    title: "COD",
    info: "Bayar Melalui Kurir Saat Pesanan Tiba",
  },
  {
    title: "Harga Diskon",
    info: "Belanja Apa Saja Bisa Lebih Murah Dengan Diskon Spesial",
  },

  {
    title: "Paket Bundling",
    info: null,
  },
  {
    title: "Harga Grosir",
    info: "Beli Banyak Lebih Murah, Tersedia Layanan Pengiriman Beragam",
  },
  {
    title: "Tukar Tambah",
    info: "Ganti HP Lama Dengan Yang Baru, Cukup Tambah Sisa Biaya",
  },
  {
    title: "Bebas Ongkir",
    info: "Nikmati Potongan Ongkir Untuk Toko Bertanda Khusus",
  },
  {
    title: "Kupon Diskon",
    info: null,
  },
];

const ResultSearchAdvanceFilterSearch = () => {
  const [positionIsFixed] = useNavbarChangeWhenScroll(116);

  return (
    <section
      className={`w-full z-20 bg-white flex items-center gap-x-2  max-w-[500px] ${
        positionIsFixed ? "fixed top-[53px] bg-white" : ""
      } `}
    >
      <div className="w-full overflow-x-auto no-scrollbar">
        <div className="flex gap-x-2 p-2 w-fit ">
          {merchantProfileCaategory.map((item, index) => (
            <div className="flex min-w-fit items-center border p-1 gap-x-1 rounded-full font-space-grotesk" key={index}>
              <img src={item.badge} alt="" width={20} />
              <span>{item.category}</span>
            </div>
          ))}
          <div className="flex min-w-fit items-center border p-1 gap-x-1 rounded-full font-space-grotesk">
            <span className="truncate">{offerCategory[6].title}</span>
          </div>
          <div className="flex min-w-fit items-center border p-1 gap-x-1 rounded-full font-space-grotesk">
            <span className="truncate">{offerCategory[1].title}</span>
          </div>
        </div>
      </div>

      <section className="w-fit flex items-center gap-x-1 p-2">
        <div className="text-base p-2 border px-3 rounded-full">
          <HiOutlineArrowsUpDown />
        </div>
        <div className="text-base p-2 border px-3 rounded-full">
          <HiOutlineAdjustmentsHorizontal />
        </div>
      </section>
    </section>
  );
};

export default ResultSearchAdvanceFilterSearch;
