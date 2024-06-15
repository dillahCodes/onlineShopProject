import { useEffect, useState } from "react";
import { useSellerAddProductData } from "../../context/seller-add-product-value-data-context";
import formatCurrencyToIDR from "../../../utils/format-currency";
import parseIDRToNumeric from "../../../utils/format-idr-currency-to-nomeric";

const SellerAddProductPriceField = () => {
  const { setAddProductData } = useSellerAddProductData();
  const [productPriceIDR, setProductPriceIDR] = useState("");

  useEffect(() => {
    setAddProductData((prevData) => ({
      ...prevData,
      productPrice: parseIDRToNumeric(productPriceIDR) || 0,
    }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productPriceIDR]);

  const handleSetProductPrice = (event) => {
    let value = event.target.value;
    value = value.replace(/\D/g, ""); // Remove all non-digit characters

    if (value === "") {
      setProductPriceIDR("");
    } else {
      const numericValue = parseInt(value, 10);
      setProductPriceIDR(formatCurrencyToIDR(numericValue));
    }
  };

  return (
    <div className="flex w-full justify-between gap-x-28">
      {/* description input field */}
      <div className="w-[350px]">
        <div className="flex w-full items-center gap-x-2 capitalize">
          <p className="font-space-grotesk font-bold text-gray-500">
            harga produk
          </p>
          <span className="rounded-sm bg-gray-200 p-0.5 text-xs font-bold capitalize text-slate-400">
            Wajib
          </span>
        </div>

        <p className="mt-3 font-space-grotesk leading-4 text-gray-700">
          berikan harga terbaikmu agar membuat produkmu terlihat menarik.
        </p>
      </div>

      {/* input field */}
      <div className="w-[750px]">
        <input
          value={productPriceIDR}
          onChange={handleSetProductPrice}
          type="text"
          placeholder="masukan harga produk"
          className="w-full rounded-md border p-2 font-space-grotesk placeholder:text-sm placeholder:font-medium placeholder:capitalize focus:outline-[#00AA5B]"
        />
      </div>
    </div>
  );
};

export default SellerAddProductPriceField;
