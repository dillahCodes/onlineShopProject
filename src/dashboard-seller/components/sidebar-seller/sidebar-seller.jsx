import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { BsChatRightText, BsShop } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { LiaBoxSolid, LiaBrushSolid } from "react-icons/lia";
import { PiChatsLight, PiHandHeart, PiUsersThree } from "react-icons/pi";
import SidebarUserInfo from "./sidebar-user-info";
import { useState } from "react";
import arrowright from "../../../assets/seller-dashboard/right_arrow.png";
import { GrLineChart } from "react-icons/gr";
import { MdSpeed } from "react-icons/md";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { TfiHeadphoneAlt, TfiReceipt } from "react-icons/tfi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const sidebarItems = [
  {
    key: "1",
    icon: <IoHomeOutline />,
    label: <span className="font-bold font-space-grotesk">Home</span>,
  },
  {
    key: "2",
    icon: <BsChatRightText />,
    label: <span className="font-bold font-space-grotesk">Chat</span>,
  },
  {
    key: "3",
    icon: <PiChatsLight />,
    label: <span className="font-bold font-space-grotesk">Diskusi</span>,
  },
  {
    key: "4",
    icon: <LiaBoxSolid />,
    label: <span className="font-bold font-space-grotesk">Produk</span>,
    group: "produk",
    children: [
      {
        key: "sub4-1",
        label: <span className="capitalize font-space-grotesk">Tambah Produk</span>,
      },
      {
        key: "sub4-2",
        label: <span className="capitalize font-space-grotesk">Daftar Produk</span>,
      },
    ],
  },
  {
    key: "5",
    icon: <CgNotes />,
    label: <span className="font-bold font-space-grotesk">Pesanan</span>,
  },
  {
    key: "6",
    group: "statistik",
    icon: <GrLineChart />,
    label: <span className="font-bold font-space-grotesk">Statistik</span>,
    children: [
      {
        key: "sub6-1",
        label: <span className="capitalize font-space-grotesk">Wawasan Toko</span>,
      },
      {
        key: "sub6-2",
        label: <span className="capitalize font-space-grotesk">Wawasan Produk</span>,
      },
      {
        key: "sub6-3",
        label: <span className="capitalize font-space-grotesk">Wawasan Kunjungan</span>,
      },
      {
        key: "sub6-4",
        label: <span className="capitalize font-space-grotesk">Wawasan Pembeli</span>,
      },
      {
        key: "sub6-5",
        label: <span className="capitalize font-space-grotesk">Wawasan Operasional</span>,
      },
    ],
  },
  {
    key: "7",
    icon: <MdSpeed />,
    label: <span className="font-bold font-space-grotesk">Peforma Toko</span>,
  },
  {
    key: "8",
    group: "iklan",
    icon: <HiOutlineSpeakerphone />,
    label: <span className="font-bold font-space-grotesk">Iklan Dan Promosi</span>,
    children: [
      {
        key: "sub8-1",
        label: <span className="capitalize font-space-grotesk">Promosi Dan Optimisasi</span>,
      },
      {
        key: "sub8-2",
        label: <span className="capitalize font-space-grotesk">Iklan TopAds</span>,
      },
    ],
  },
  {
    key: "9",
    icon: <LiaBrushSolid />,
    label: <span className="font-bold font-space-grotesk">Dekorasi Toko</span>,
  },
  {
    key: "10",
    group: "kata-pembeli",
    icon: <PiUsersThree />,
    label: <span className="font-bold font-space-grotesk">Kata Pembeli</span>,
    children: [
      {
        key: "sub10-1",
        label: <span className="capitalize font-space-grotesk">Ulasan</span>,
      },
      {
        key: "sub10-2",
        label: <span className="capitalize font-space-grotesk">Pesanan Dikomplain</span>,
      },
    ],
  },
  {
    key: "11",
    icon: <TfiReceipt />,
    label: <span className="font-bold font-space-grotesk">Faktur Toko</span>,
  },
  {
    key: "12",
    icon: <PiHandHeart />,
    group: "layanan-tambahan",
    label: <span className="font-bold font-space-grotesk">Layanan Tambahan</span>,
    children: [
      {
        key: "sub12-1",
        label: <span className="capitalize font-space-grotesk">Bayar Tagihan</span>,
      },
    ],
  },
  {
    key: "13",
    icon: <BsShop />,
    label: (
      <span className="font-space-grotesk flex items-center justify-between">
        <span className="font-bold capitalize">pusat edukasi seller</span>
        <span>
          <FaArrowUpRightFromSquare />
        </span>
      </span>
    ),
  },
  {
    key: "14",
    icon: <TfiHeadphoneAlt />,
    label: (
      <span className="font-space-grotesk flex items-center justify-between truncate">
        <span className="font-bold capitalize truncate">Bantuan Tokopedia Care</span>
        <span>
          <FaArrowUpRightFromSquare />
        </span>
      </span>
    ),
  },
  {
    key: "15",
    group: "pengaturan",
    icon: <IoSettingsOutline />,
    label: <span className="font-bold font-space-grotesk">Pengaturan Toko</span>,
    children: [
      {
        key: "sub15-1",
        label: <span className="capitalize font-space-grotesk">Pengaturan Toko</span>,
      },
      {
        key: "sub15-2",
        label: <span className="capitalize font-space-grotesk">Pengaturan Admin</span>,
      },
    ],
  },
];

const SidebarSeller = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider collapsed={collapsed} className={`${!collapsed && "min-w-fit"} bg-white   overflow-y-auto scrollbar-custom`}>
      <div className={`w-full ${collapsed ? "" : "flex items-center p-2 gap-x-3"}  py-4`} onClick={() => setCollapsed(!collapsed)}>
        <img src={arrowright} alt="seller info icon" className={`w-5   ${collapsed && "mx-auto rotate-180"} transition-all duration-300  `} />
        {!collapsed && <p className="font-bold font-space-grotesk text-gray-400 text-sm">sembunyikan menu</p>}
      </div>
      <SidebarUserInfo isCollapsed={collapsed} />
      <Menu mode="inline" className="border-b" defaultSelectedKeys={["1"]} defaultOpenKeys={["6", "8", "9", "10", "12", "13", "14", "15"]} items={sidebarItems} />
    </Sider>
  );
};

export default SidebarSeller;
