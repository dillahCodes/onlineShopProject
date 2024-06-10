import { GoSearch } from "react-icons/go";
import { useSellerOverlay } from "../../context/seller-overlay-context";
import ButtonComponent from "../../../components/ui-components/button-component";
import notFoundImage from "../../../assets/not-found-image.png";
import classNames from "classnames";
import { useState } from "react";
import { useEffect } from "react";

const recomendedSearch = [
  "Gunakan Bebas Ongkir",
  "Apa Itu Toko Saya",
  "Apa itu fitur Produk Unggulan?",
  "Wawasan Toko",
  "Manfaatkan Pinjaman untuk Tingkatkan Penjualan",
  "Dapatkan Gratis Broadcast Chat Disini",
  "TopAds",
];
const NavbarSellerInputComponent = () => {
  const [isFloatingOpen, setIsFloatingOpen] = useState(false);
  const { setIsOperlayOpen, isOperlayOpen } = useSellerOverlay();

  useEffect(() => {
    if (isOperlayOpen === false) setIsFloatingOpen(false);
  }, [isOperlayOpen]);

  const handleClickInput = () => {
    setIsOperlayOpen(true);
    setIsFloatingOpen(true);
  };

  return (
    <div className={` w-full max-w-[900px] relative cursor-pointer `}>
      <div className="border w-full overflow-hidden rounded-md flex items-center gap-x-3 p-0.5">
        <span className="text-xl p-1 text-gray-400">
          <GoSearch />
        </span>
        <input
          onClick={handleClickInput}
          type="text"
          className="focus:outline-none w-full placeholder:text-sm  placeholder:capitalize placeholder:font-space-grotesk"
          placeholder='Coba ketikan "pengaturan power merchant" '
        />
      </div>

      {/* floating items navbar */}
      <div
        className={classNames("w-full absolute bg-white z-[5]  shadow-md rounded-b-md duration-300 overflow-hidden", {
          "h-[320px] opacity-100": isFloatingOpen,
          "h-0 opacity-0": !isFloatingOpen,
        })}
      >
        <div className="p-3">
          <h1 className="text-base mb-3 font-bold font-space-grotesk">Rekomendasi Pencarian</h1>

          <div className="w-full flex gap-2 flex-wrap">
            {recomendedSearch.map((item, index) => (
              <ButtonComponent type="default" className="border-[#00AA5B] text-[#00AA5B]" key={index}>
                {item}
              </ButtonComponent>
            ))}

            <div className="w-full flex items-center gap-x-5 justify-evenly ">
              <div className="w-60">
                <img src={notFoundImage} alt="not found image" className="object-cover" />
              </div>
              <div className="flex flex-col">
                <p className="font-bold font-space-grotesk text-xl">Kamu Belum Pernah Melakukan Pencarian, Nih</p>
                <p className="text-base font-space-grotesk">Yuk, cari segala hal seputar Seller Dashboard tokomu di sini.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSellerInputComponent;
