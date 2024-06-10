import classNames from "classnames";
import { useState } from "react";
import ButtonComponent from "../../../components/ui-components/button-component";
import PropTypes from "prop-types";
import confirmShippingIcon from "../../../assets/seller-dashboard/confirm-shipping-seller.svg";
import packageInProcess from "../../../assets/seller-dashboard/package-in-process.svg";
import packageInShipping from "../../../assets/seller-dashboard/package-in-shipping.svg";
import packageAlreadyShipped from "../../../assets/seller-dashboard/package-already-shipped.svg";
import notNotificationsImage from "../../../assets/no-notifications.jpg";

const notificationSection = ["Transaksi", "Update"];
const notificationsStatusList = [
  {
    icon: confirmShippingIcon,
    title: "Menunggu Konfirmasi",
  },
  {
    icon: packageInProcess,
    title: "Pesanan  DiProses",
  },
  {
    icon: packageInShipping,
    title: "Sedang Dikirim",
  },
  {
    icon: packageAlreadyShipped,
    title: "Smpai Tujuan",
  },
];

const NavbarSellerNotificationComponent = ({ isOpen, ...rest }) => {
  const [selectedSection, setSelectedSection] = useState(notificationSection[0]);

  return (
    <section
      {...rest}
      className={classNames(
        "w-[300px] transition-all duration-300 font-bold font-space-grotesk absolute overflow-hidden rounded-b-md shadow-md  -left-36 z-[3] bg-white   text-base top-[48px]",
        {
          "h-0": isOpen === false,
          "h-[420px]": isOpen === true,
        }
      )}
    >
      <SellerNotificationSectionHeader selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
      {selectedSection === notificationSection[0] ? (
        <div className="w-full h-[400px] overflow-y-auto scrollbar-custom">
          <NotificationsStatusPackage />
          <YourTransactionNotification />
          <NavbarSellerNotificationBottomButtonsComponent />
        </div>
      ) : (
        <div className="w-full h-[400px] overflow-y-auto scrollbar-custom">
          <ProductNotificationsUpdate />
          <NavbarSellerNotificationBottomButtonsComponent />
        </div>
      )}
    </section>
  );
};

export default NavbarSellerNotificationComponent;
NavbarSellerNotificationComponent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

const ProductNotificationsUpdate = () => {
  return (
    <div className="w-full p-3 font-normal flex justify-center items-center h-full">
      <div className="w-full flex justify-center items-center flex-col ">
        <img src={notNotificationsImage} alt="no notifications" className="w-36" />
        <p className="text-sm font-bold font-space-grotesk mb-3 mt-3">Belum Ada Notifikasi</p>
        <p className=" text-center text-xs">Notifikasi terkait transaksi kamu bakal muncul di sini</p>
        <ButtonComponent className="my-4 font-space-grotesk text-xs" type="primary">
          Mulai Belanja
        </ButtonComponent>
      </div>
    </div>
  );
};

const YourTransactionNotification = () => {
  return (
    <div className="w-full   font-normal text-base px-3  mb-14">
      <h1 className="w-full font-bold capitalize font-space-grotesk mb-3">Untuk Kamu</h1>
      <div className="w-full flex justify-center items-center flex-col ">
        <img src={notNotificationsImage} alt="no notifications" className="w-36" />
        <p className="text-sm font-bold font-space-grotesk mb-3 mt-3">Belum Ada Notifikasi</p>
        <p className=" text-center text-xs">Notifikasi terkait transaksi kamu bakal muncul di sini</p>
        <ButtonComponent className="my-4 font-space-grotesk text-xs" type="primary">
          Mulai Belanja
        </ButtonComponent>
      </div>
    </div>
  );
};

const NotificationsStatusPackage = () => {
  return (
    <div className="w-full p-3 border-b-4 border-[#f0f3f7] mb-3">
      <div className="w-full flex justify-between my-2 items-center font-space-grotesk">
        <span className="text-base">Penjualan</span>
        <span className="text-sm font-normal text-[#00AA5B]">Lihat Semua</span>
      </div>

      <div className=" flex w-full leading-3 items-center justify-between gap-x-1">
        {notificationsStatusList.map((item, index) => (
          <div key={index} className="flex flex-col items-center max-w-[60px] gap-y-2 font-space-grotesk">
            <img src={item.icon} alt="notification icon" className="w-10" />
            <p className="text-[10px] font-normal text-center">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const SellerNotificationSectionHeader = ({ selectedSection, setSelectedSection }) => {
  return (
    <div
      className={classNames(
        "w-full flex justify-center border-b before:absolute before:transition-all before:duration-300 relative before:w-1/2 before:left-0 before:bottom-0 before:h-0.5 before:bg-[#00AA5B]",
        {
          "before:translate-x-full": selectedSection === notificationSection[1],
        }
      )}
    >
      {notificationSection.map((item, index) => (
        <div key={index} onClick={() => setSelectedSection(item)} className="w-full flex items-center cursor-pointer">
          <span
            className={classNames("mx-auto py-2 transition-all text-base duration-300", {
              "text-[#00AA5B]": selectedSection === item,
            })}
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  );
};

SellerNotificationSectionHeader.propTypes = {
  selectedSection: PropTypes.string.isRequired,
  setSelectedSection: PropTypes.func.isRequired,
};

const NavbarSellerNotificationBottomButtonsComponent = () => {
  return (
    <div className="w-full absolute bottom-0 font-normal p-2 text-sm bg-white ">
      <div className="w-full flex justify-between">
        <ButtonComponent size="small" className="rounded-none text-xs border-none shadow-none text-[#00AA5B] font-medium ">
          Tandai Semua Dibaca
        </ButtonComponent>
        <ButtonComponent size="small" className="rounded-none text-xs shadow-none border-none text-[#00AA5B] font-medium">
          Lihat Selengkapnya
        </ButtonComponent>
      </div>
    </div>
  );
};
