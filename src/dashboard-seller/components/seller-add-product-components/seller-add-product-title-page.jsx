import { IoIosInformationCircleOutline } from "react-icons/io";
import { useAuth } from "../../../context/user-auth-context";
import { useState } from "react";
import { useEffect } from "react";

const SellerAddProductTitlePage = () => {
  const { user } = useAuth();
  const limitProduct = 200;
  const [totalProductAvailable, setTotalProductAvailable] = useState(
    limitProduct - user?.products?.length || 0,
  );

  useEffect(() => {
    setTotalProductAvailable(limitProduct - user?.products?.length || 0);
  }, [user?.products?.length]);

  return (
    <div className="mx-auto flex w-[1168px] items-center justify-between">
      {/* title */}
      <div className="font-space-grotesk">
        <p className="text-xl font-bold">Tambah Produk</p>
        <p className="text-sm">
          Pastikan produk tidak melanggar Hak Kekayaan Intelektual supaya
          produkmu tidak diturunkan. Pelajari{" "}
          <span className="font-bold text-[#00AA5B]">S&K</span>
        </p>
      </div>
      {/* info */}
      <div className="flex h-[40px] items-center gap-x-3 rounded-full border p-3 font-space-grotesk font-[490] capitalize">
        <span className="text-lg">
          <IoIosInformationCircleOutline />
        </span>
        <span className="flex gap-x-1">
          <span>sisa kuota produk:</span>
          <span>
            <span className="font-bold"> {totalProductAvailable}</span>
            <span className="text-gray-400">/200</span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default SellerAddProductTitlePage;
