import { useState } from "react";

const SellerAddProductDescriptionField = () => {
  const [description, setDescription] = useState("");
  const maxLength = 5000;

  const handleOnchange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= maxLength) setDescription(inputValue);
  };
  return (
    <div className="flex w-full justify-between gap-x-28">
      {/* description input field */}
      <div className="w-[350px]">
        <div className="flex w-full items-center gap-x-2 capitalize">
          <p className="font-space-grotesk font-bold text-gray-500">
            Deskripsi Produk
          </p>
        </div>

        <p className="mt-3 font-space-grotesk leading-4 text-gray-700">
          Pastikan deskripsi produk memuat penjelasan detail terkait produkmu
          agar pembeli mudah mengerti dan menemukan produkmu.
        </p>

        <p className="mt-3 font-space-grotesk leading-4 text-gray-700">
          Disarankan untuk{" "}
          <span className="font-bold text-gray-700">tidak memasukkan</span> info
          nomor HP, e-mail, dsb. ke dalam deskripsi produk untuk melindungi data
          pribadimu.
        </p>
      </div>

      {/* input field */}
      <div className="w-[750px]">
        <textarea
          rows={9}
          value={description}
          onChange={handleOnchange}
          className="w-full resize-none rounded-md border p-2 scrollbar-custom focus:outline-green-500"
          placeholder="Sepatu Sneakers Pria Tokostore Kanvas Hitam Seri C28B 
- Model simple
- Nyaman Digunakan
- Tersedia warna hitam
- Sole PVC (injection shoes) yang nyaman dan awet untuk digunakan sehari - hari

Bahan:
Upper: Semi Leather (kulit tidak pecah-pecah)
Sole: Premium Rubber Sole

Ukuran:
9 : 25,5 cm
40 : 26 cm
41 : 26.5 cm
42 : 27 cm
43 : 27.5 - 28 cm

Edisi terbatas dari Tokostore dengan model baru dan trendy untukmu. Didesain untuk bisa dipakai dalam berbagai acara. Sangat nyaman saat dipakai sehingga dapat menunjang penampilan dan kepercayaan dirimu. Beli sekarang sebelum kehabisan!"
        ></textarea>
        <div className="flex w-full items-center justify-between font-space-grotesk text-xs text-gray-400">
          <p>
            Tulis deskripsi produkmu min. 260 karakter agar pembeli semakin
            mudah mengerti.
          </p>
          <p>
            {description.length}/{maxLength}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SellerAddProductDescriptionField;
