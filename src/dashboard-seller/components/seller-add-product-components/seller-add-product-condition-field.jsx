import { Radio } from "antd";
import { useState } from "react";
import { useSellerAddProductData } from "../../context/seller-add-product-value-data-context";
import { useEffect } from "react";

const SellerAddProductConditionField = () => {
  const { setAddProductData } = useSellerAddProductData();
  const [value, setValue] = useState("baru");

  useEffect(() => {
    setAddProductData((prev) => {
      return {
        ...prev,
        productCondition: value === "baru" ? "new" : "second",
      };
    });
  }, [value, setAddProductData]);

  const onChange = (e) => setValue(e.target.value);

  return (
    <div className="flex w-full justify-between gap-x-28">
      {/* description input field */}
      <div className="w-[350px]">
        <div className="flex w-full items-center gap-x-2 capitalize">
          <p className="font-space-grotesk font-bold text-gray-500">
            kondisi produk
          </p>
          <span className="rounded-sm bg-gray-200 p-0.5 text-xs font-bold capitalize text-slate-400">
            Wajib
          </span>
        </div>
      </div>

      {/* input field */}
      <div className="w-[750px]">
        <Radio.Group size="large" onChange={onChange} value={value}>
          <Radio className="font-space-grotesk font-medium" value={"baru"}>
            Baru
          </Radio>
          <Radio className="font-space-grotesk font-medium" value={"bekas"}>
            Bekas
          </Radio>
        </Radio.Group>
      </div>
    </div>
  );
};

export default SellerAddProductConditionField;
