import { useEffect, useState } from "react";
import { useSellerAddProductData } from "../../context/seller-add-product-value-data-context";

const SellerAddProcutBrand = () => {
  const { setAddProductData } = useSellerAddProductData();
  const [productBrand, setProductBrand] = useState("");

  useEffect(() => {
    setAddProductData((prev) => {
      return {
        ...prev,
        productBrand: productBrand,
      };
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productBrand]);

  const handleChange = (value) => setProductBrand(value);

  return (
    <div className="flex w-full justify-between gap-x-28">
      <div className="w-[350px]">
        <div className="flex w-full items-center gap-x-2 capitalize">
          <p className="font-space-grotesk font-bold text-gray-500">Merek</p>
          <span className="rounded-sm bg-gray-200 p-0.5 text-xs font-bold capitalize text-slate-400">
            Wajib
          </span>
        </div>
        <p className="mt-3 font-space-grotesk text-sm leading-4 text-gray-500">
          masukan merek produk agar pembeli mendapat informasi lebih lanjut
        </p>
      </div>

      {/* input field */}
      <div className="w-[750px]">
        <input
          value={productBrand}
          onChange={(e) => handleChange(e.target.value)}
          type="text"
          placeholder="contoh: adidas"
          className="w-full rounded-md border p-2 font-space-grotesk placeholder:text-sm placeholder:font-medium placeholder:capitalize focus:outline-[#00AA5B]"
        />
      </div>
    </div>
  );
};

export default SellerAddProcutBrand;
