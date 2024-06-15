import { Select } from "antd";
import { useSellerAddProductData } from "../../context/seller-add-product-value-data-context";

const optios = [
  {
    value: "Rumah Tangga",
    label: "Rumah Tangga",
  },
  {
    value: "Audio, Kamera & Elektronik Lainnya",
    label: "Audio, Kamera & Elektronik Lainnya",
  },
  {
    value: "Buku",
    label: "Buku",
  },
  {
    value: "Dapur",
    label: "Dapur",
  },
  {
    value: "Elektronik",
    label: "Elektronik",
  },
  {
    value: "Fashion Anak & Bayi",
    label: "Fashion Anak & Bayi",
  },
  {
    value: "Fashion Muslim",
    label: "Fashion Muslim",
  },
  {
    value: "Fashion Pria",
    label: "Fashion Pria",
  },
  {
    value: "Fashion Wanita",
    label: "Fashion Wanita",
  },
];

const SellerAddProductCategory = () => {
  const { handleSetProductCategory } = useSellerAddProductData();

  const handleChange = (value) => handleSetProductCategory(value);

  return (
    <div className="flex w-full justify-between gap-x-28">
      <div className="w-[350px]">
        <div className="flex w-full items-center gap-x-2 capitalize">
          <p className="font-space-grotesk font-bold text-gray-500">Kategori</p>
          <span className="rounded-sm bg-gray-200 p-0.5 text-xs font-bold capitalize text-slate-400">
            Wajib
          </span>
        </div>
        <p className="mt-3 font-space-grotesk text-sm leading-4 text-gray-500">
          Pilih kategori yang sesuai karena{" "}
          <span className="font-bold">
            biaya layanan akan tergantung pada kategori.
          </span>{" "}
          Jika pemilihan kategori kurang sesuai, maka kategori akan diubah oleh{" "}
          <span className="font-bold text-[#00AA5B]">
            Tokopedia. Pelajari Selengkapnya
          </span>
        </p>
      </div>

      {/* input field */}
      <div className="w-[750px]">
        <Select
          defaultValue="Pilih Kategori"
          style={{
            width: 120,
          }}
          onChange={handleChange}
          className="w-full font-space-grotesk"
          size="large"
          options={optios}
        />
      </div>
    </div>
  );
};

export default SellerAddProductCategory;
