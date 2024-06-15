import { useState } from "react";
import { useSellerAddProductData } from "../../context/seller-add-product-value-data-context";

const SellerAddProductNameField = () => {
  const { handleSetProcutName } = useSellerAddProductData();
  const [productName, setProductName] = useState("");
  const maxChar = 250;

  const handlesetProductName = (productName) => {
    if (productName.length > maxChar) return;
    setProductName(productName);
    handleSetProcutName(productName);
  };

  return (
    <div className="flex w-full justify-between gap-x-28">
      {/* description input field */}
      <div className="w-[350px]">
        <div className="flex w-full items-center gap-x-2 capitalize">
          <p className="font-space-grotesk font-bold text-gray-500">
            Nama Produk
          </p>
          <span className="rounded-sm bg-gray-200 p-0.5 text-xs font-bold capitalize text-slate-400">
            Wajib
          </span>
        </div>

        <p className="mt-3 font-space-grotesk leading-4 text-gray-700">
          Nama produk min. 40 karakter dengan memasukkan merek, jenis produk,
          warna, bahan, atau tipe.
        </p>

        <p className="mt-3 font-space-grotesk leading-4 text-gray-700">
          Disarankan untuk tidak menggunakan huruf kapital berlebih, memasukkan
          lebih dari 1 merek, dan kata-kata promosi.
        </p>

        <p className="mt-3 font-space-grotesk leading-4 text-gray-700">
          Nama{" "}
          <span className="font-bold text-gray-500">tidak bisa diubah</span>{" "}
          setelah produk terjual, ya.
        </p>
      </div>

      {/* input field */}
      <div className="w-[750px]">
        <input
          value={productName}
          onChange={(e) => handlesetProductName(e.target.value)}
          type="text"
          placeholder="contoh: sepatu pria(jenis/kategori produk) + tokostore (merek) + kanvas hitam (keterangan)"
          className="w-full rounded-md border p-2 font-space-grotesk placeholder:text-sm placeholder:font-medium placeholder:capitalize focus:outline-[#00AA5B]"
        />
        <div className="mt-1 flex w-full items-center justify-between font-space-grotesk text-xs text-gray-500">
          <span>Tips: Jenis Produk + Merek Produk + Keterangan Tambahan</span>
          <span>
            {productName.length}/{maxChar}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SellerAddProductNameField;
