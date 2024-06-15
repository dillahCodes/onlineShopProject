import { useEffect, useState } from "react";
import { useSellerAddProductData } from "../../context/seller-add-product-value-data-context";

const SellerAddProductQtyField = () => {
  const { setAddProductData } = useSellerAddProductData();
  const [productStock, setProductStock] = useState("");

  useEffect(() => {
    setAddProductData((prev) => ({
      ...prev,
      productQty: productStock === "" ? 0 : parseInt(productStock, 10),
    }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productStock]);

  const handleSetProductStock = (event) => {
    const value = event.target.value;
    if (isNaN(value) || value < 0) return;
    setProductStock(value);
  };

  return (
    <div className="flex w-full justify-between gap-x-28">
      {/* description input field */}
      <div className="w-[350px]">
        <div className="flex w-full items-center gap-x-2 capitalize">
          <p className="font-space-grotesk font-bold text-gray-500">
            stok produk
          </p>
          <span className="rounded-sm bg-gray-200 p-0.5 text-xs font-bold capitalize text-slate-400">
            Wajib
          </span>
        </div>

        <p className="mt-3 font-space-grotesk leading-4 text-gray-700">
          masukan stok produk ini agar pembeli tau apakah produk ini masih
          tersedia
        </p>
      </div>

      {/* input field */}
      <div className="w-[750px]">
        <input
          value={productStock}
          onChange={handleSetProductStock}
          type="text"
          placeholder="masukan jumlah stok produk"
          className="w-full rounded-md border p-2 font-space-grotesk placeholder:text-sm placeholder:font-medium placeholder:capitalize focus:outline-[#00AA5B]"
        />
      </div>
    </div>
  );
};

export default SellerAddProductQtyField;
