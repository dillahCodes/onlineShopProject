import { IoIosInformationCircleOutline } from "react-icons/io";

const SellerHomePageCardProductView = () => {
  return (
    <div className="w-full bg-white rounded-md p-3 flex flex-col gap-y-3">
      <div className="w-full flex items-center gap-x-2">
        <span>Produk Dilihat</span>
        <span>
          <IoIosInformationCircleOutline />
        </span>
      </div>

      <p className=" font-bold font-space-grotesk text-[#00AA5B]">Tambah Produk</p>
      <p className="font-space-grotesk">
        <span className="font-bold">0% </span>
        dari 30 Hari terakhir
      </p>
    </div>
  );
};

export default SellerHomePageCardProductView;
