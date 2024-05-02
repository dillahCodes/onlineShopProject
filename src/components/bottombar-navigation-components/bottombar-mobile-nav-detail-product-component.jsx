import { BsChatLeftText } from "react-icons/bs";
import ButtonComponent from "../ui-components/button-component";
import { IoAddSharp } from "react-icons/io5";

const BottomBarMobileNavDetailProduct = () => {
  return (
    <section className="max-w-[500px] w-full flex items-center bg-white p-2 fixed bottom-0 gap-x-2">
      <div className="p-2.5 border text-xl border-black rounded-md">
        <BsChatLeftText />
      </div>
      <ButtonComponent
        className={
          "capitalize border-[#00AA5B] font-bold text-[#00AA5B] py-5 w-full m-0 flex items-center justify-center"
        }
      >
        beli langsung
      </ButtonComponent>
      <ButtonComponent
        type={"primary"}
        className={"capitalize font-bold py-5 w-full m-0 flex items-center justify-center"}
      >
        <div className="text-lg">
          <IoAddSharp />
        </div>
        <span>keranjang</span>
      </ButtonComponent>
    </section>
  );
};

export default BottomBarMobileNavDetailProduct;
