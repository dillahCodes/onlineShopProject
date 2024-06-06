import { GoSearch } from "react-icons/go";

const NavbarSellerInputComponent = () => {
  return (
    <div className="w-full max-w-[900px]">
      <div className="border w-full overflow-hidden rounded-md flex items-center gap-x-3 p-0.5">
        <span className="text-xl p-1 text-gray-400">
          <GoSearch />
        </span>
        <input
          type="text"
          className="focus:outline-none w-full placeholder:text-sm  placeholder:capitalize placeholder:font-space-grotesk"
          placeholder='Coba ketikan "pengaturan power merchant" '
        />
      </div>
    </div>
  );
};

export default NavbarSellerInputComponent;
