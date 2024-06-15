import classNames from "classnames";
import { useState } from "react";

const SellerAddProductEtalaseField = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="flex w-full justify-between gap-x-28">
      <div className="w-[350px]">
        <div className="flex w-full items-center gap-x-2 capitalize">
          <p className="font-space-grotesk font-bold text-gray-500">Etalase</p>
        </div>
        <p className="mt-3 text-clip font-space-grotesk text-sm leading-4 text-gray-500">
          Kamu dapat menambah etalase baru atau memilih dari daftar etalase yang
          ada
        </p>
      </div>

      {/* input field */}
      <div className="w-[750px]">
        <div className="relative w-fit">
          <input
            type="text"
            value={inputValue}
            disabled
            className={classNames(
              "w-80 rounded-md border p-2 font-space-grotesk placeholder:capitalize focus:outline-[#00AA5B]",
              {
                "border-[#00AA5B] outline-[#00AA5B]": inputValue,
              },
            )}
            // placeholder="ketik nama etalasae yang sesuai"
            placeholder="coming soon feature"
            onChange={(e) => setInputValue(e.target.value)}
          />
          {inputValue && (
            <div className="mt-1 w-full rounded-md bg-white p-2 py-2 font-space-grotesk shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <span>Tambah</span> <span>&quot;{inputValue}&quot;</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SellerAddProductEtalaseField;
