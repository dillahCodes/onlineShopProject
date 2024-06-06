import { useState } from "react";
import formatCurrencyToIDR from "../../../utils/format-currency";
import { Switch } from "antd";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import PropTypes from "prop-types";

const SidebarUserInfo = ({ isCollapsed }) => {
  const [isCurrencyVisible, setIsCurrencyVisible] = useState(false);
  const [isInfoCollapsed, setIsInfoCollapsed] = useState(false);

  const onChange = () => setIsCurrencyVisible(!isCurrencyVisible);

  return (
    <>
      <div className={`w-full ${isCollapsed ? "" : "flex items-center p-2 gap-x-3"}  py-2.5 border-b border-t`}>
        <img src="https://images.tokopedia.net/img/seller_no_logo_1.png" alt="seller info icon" className={`w-9  ${isCollapsed && "mx-auto"}  rounded-full shadow-md`} />
        <div className={` flex flex-col ${isCollapsed ? "hidden" : "flex"}`}>
          <p className="font-bold font-space-grotesk text-base">Dillah Codes</p>
          <p className="text-xs font-space-grotesk">regular Merchant</p>
        </div>
      </div>
      <div className={`w-full relative mb-7  p-3 pt-0 ${isCollapsed && "hidden"}`}>
        <div className={`w-full ${isInfoCollapsed ? "h-[85px] overflow-hidden" : "h-[189px]"} transition-all duration-300`}>
          <div className="w-full border-b  py-2 flex flex-col gap-y-2">
            <span className="w-full flex items-center justify-between">
              <span className="capitalize font-space-grotesk text-xs">saldo</span>
              <span className="font-bold font-space-grotesk text-xs">{!isCurrencyVisible ? formatCurrencyToIDR(0) : "***"}</span>
            </span>
            <span className="w-full flex items-center justify-between">
              <span className="capitalize font-space-grotesk text-xs">kredit TopAds</span>
              <span className="font-bold font-space-grotesk text-xs">{!isCurrencyVisible ? formatCurrencyToIDR(0) : "***"}</span>
            </span>
            <span className="w-full flex items-center justify-between">
              <span className="capitalize font-space-grotesk text-xs">sembunyilan nominal</span>
              <span className="font-bold font-space-grotesk text-xs">
                <Switch defaultChecked size="small" onChange={onChange} checked={isCurrencyVisible} />
              </span>
            </span>
          </div>
          <div className={`w-full border-b border-t py-2 flex flex-col gap-y-2 ${isInfoCollapsed ? "opacity-0" : "opacity-100"} transition-all duration-300`}>
            <span className="w-full flex items-center justify-between">
              <span className="capitalize font-space-grotesk text-xs">jadwal buka</span>
              <span className="font-bold font-space-grotesk text-xs">24 jam</span>
            </span>
            <span className="w-full flex items-center justify-between">
              <span className="capitalize font-space-grotesk text-xs">total transaksi</span>
              <span className="font-bold font-space-grotesk text-xs">0/50</span>
            </span>
            <span className="w-full flex items-center justify-between">
              <span className="capitalize font-space-grotesk text-xs">badge</span>
              <span className="font-bold font-space-grotesk text-xs">
                <img src="https://images.tokopedia.net/img/repsys/badges-off.jpg" alt="user badge" />
              </span>
            </span>
            <span className="w-full flex items-center justify-between">
              <span className="capitalize font-space-grotesk text-xs">followers</span>
              <span className="font-bold font-space-grotesk text-xs">0</span>
            </span>
          </div>
        </div>
        <div
          className="w-fit absolute right-1/2 translate-x-1/2  border px-4 py-0.5 border-t-0 rounded-b-md shadow-md mx-auto"
          onClick={() => setIsInfoCollapsed(!isInfoCollapsed)}
        >
          <span className="text-xl">{isInfoCollapsed ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>
        </div>
      </div>
    </>
  );
};

export default SidebarUserInfo;

SidebarUserInfo.propTypes = {
  isCollapsed: PropTypes.bool,
};
