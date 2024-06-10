import { BsChatRightText } from "react-icons/bs";
import { IoHappyOutline } from "react-icons/io5";
import { RiCustomerService2Line } from "react-icons/ri";

const SellerHomePageHelpFloatingButtons = () => {
  return (
    <section className="absolute bottom-0 border-b-2 border-[#00AA5B] rounded-t-xl shadow-md    flex   bg-white right-28 p-2 px-3">
      <div className="flex items-center  px-2 gap-x-2 text-gray-400 border-r  hover:text-[#00AA5B] transition-all duration-300 ">
        <span className="text-xl">
          <BsChatRightText />
        </span>
        <span className="text-base font-bold font-space-grotesk">Chat</span>
      </div>

      <div className=" group text-xl px-2 border-r flex items-center   text-gray-400 ">
        <RiCustomerService2Line className="group-hover:text-[#00AA5B] transition-all duration-300" />
      </div>

      <div className=" group text-xl px-2   flex items-center   text-gray-400  ">
        <IoHappyOutline className="group-hover:text-[#00AA5B] transition-all duration-300" />
      </div>
    </section>
  );
};

export default SellerHomePageHelpFloatingButtons;
