import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { BsChatRightText, BsShop } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { LiaBoxSolid, LiaBrushSolid } from "react-icons/lia";
import { PiChatsLight, PiHandHeart, PiUsersThree } from "react-icons/pi";
import { useState } from "react";
import arrowright from "../../../assets/seller-dashboard/right_arrow.png";
import { GrLineChart } from "react-icons/gr";
import { MdSpeed } from "react-icons/md";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { TfiHeadphoneAlt, TfiReceipt } from "react-icons/tfi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import SeideBarSellerInfo from "./sidebar-seller-info";
import { useLocation, useNavigate } from "react-router-dom";

const sidebarItems = [
  {
    key: "/seller/home",
    icon: <IoHomeOutline />,
    label: <span className="font-space-grotesk font-bold">Home</span>,
  },
  {
    key: "2",
    icon: <BsChatRightText />,
    label: <span className="font-space-grotesk font-bold">Chat</span>,
  },
  {
    key: "3",
    icon: <PiChatsLight />,
    label: <span className="font-space-grotesk font-bold">Diskusi</span>,
  },
  {
    key: "4",
    icon: <LiaBoxSolid />,
    label: <span className="font-space-grotesk font-bold">Produk</span>,
    group: "produk",
    children: [
      {
        key: "/seller/add-product",
        label: (
          <span className="font-space-grotesk capitalize">Tambah Produk</span>
        ),
      },
      {
        key: "sub4-2",
        label: (
          <span className="font-space-grotesk capitalize">Daftar Produk</span>
        ),
      },
    ],
  },
  {
    key: "5",
    icon: <CgNotes />,
    label: <span className="font-space-grotesk font-bold">Pesanan</span>,
  },
  {
    key: "6",
    group: "statistik",
    icon: <GrLineChart />,
    label: <span className="font-space-grotesk font-bold">Statistik</span>,
    children: [
      {
        key: "sub6-1",
        label: (
          <span className="font-space-grotesk capitalize">Wawasan Toko</span>
        ),
      },
      {
        key: "sub6-2",
        label: (
          <span className="font-space-grotesk capitalize">Wawasan Produk</span>
        ),
      },
      {
        key: "sub6-3",
        label: (
          <span className="font-space-grotesk capitalize">
            Wawasan Kunjungan
          </span>
        ),
      },
      {
        key: "sub6-4",
        label: (
          <span className="font-space-grotesk capitalize">Wawasan Pembeli</span>
        ),
      },
      {
        key: "sub6-5",
        label: (
          <span className="font-space-grotesk capitalize">
            Wawasan Operasional
          </span>
        ),
      },
    ],
  },
  {
    key: "7",
    icon: <MdSpeed />,
    label: <span className="font-space-grotesk font-bold">Peforma Toko</span>,
  },
  {
    key: "8",
    group: "iklan",
    icon: <HiOutlineSpeakerphone />,
    label: (
      <span className="font-space-grotesk font-bold">Iklan Dan Promosi</span>
    ),
    children: [
      {
        key: "sub8-1",
        label: (
          <span className="font-space-grotesk capitalize">
            Promosi Dan Optimisasi
          </span>
        ),
      },
      {
        key: "sub8-2",
        label: (
          <span className="font-space-grotesk capitalize">Iklan TopAds</span>
        ),
      },
    ],
  },
  {
    key: "9",
    icon: <LiaBrushSolid />,
    label: <span className="font-space-grotesk font-bold">Dekorasi Toko</span>,
  },
  {
    key: "10",
    group: "kata-pembeli",
    icon: <PiUsersThree />,
    label: <span className="font-space-grotesk font-bold">Kata Pembeli</span>,
    children: [
      {
        key: "sub10-1",
        label: <span className="font-space-grotesk capitalize">Ulasan</span>,
      },
      {
        key: "sub10-2",
        label: (
          <span className="font-space-grotesk capitalize">
            Pesanan Dikomplain
          </span>
        ),
      },
    ],
  },
  {
    key: "11",
    icon: <TfiReceipt />,
    label: <span className="font-space-grotesk font-bold">Faktur Toko</span>,
  },
  {
    key: "12",
    icon: <PiHandHeart />,
    group: "layanan-tambahan",
    label: (
      <span className="font-space-grotesk font-bold">Layanan Tambahan</span>
    ),
    children: [
      {
        key: "sub12-1",
        label: (
          <span className="font-space-grotesk capitalize">Bayar Tagihan</span>
        ),
      },
    ],
  },
  {
    key: "13",
    icon: <BsShop />,
    label: (
      <span className="flex items-center justify-between font-space-grotesk">
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
      <span className="flex items-center justify-between truncate font-space-grotesk">
        <span className="truncate font-bold capitalize">pusat bantuan</span>
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
    label: (
      <span className="font-space-grotesk font-bold">Pengaturan Toko</span>
    ),
    children: [
      {
        key: "sub15-1",
        label: (
          <span className="font-space-grotesk capitalize">Pengaturan Toko</span>
        ),
      },
      {
        key: "sub15-2",
        label: (
          <span className="font-space-grotesk capitalize">
            Pengaturan Admin
          </span>
        ),
      },
    ],
  },
];

const SidebarSeller = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const currentRouterArray = useLocation().pathname.split("/");
  const currentRouter = currentRouterArray
    .slice(1, currentRouterArray.length)
    .join("/");

  return (
    <Sider
      collapsed={collapsed}
      className={`${!collapsed && "min-w-fit"} overflow-y-auto bg-white scrollbar-custom`}
    >
      <div
        className={`w-full ${collapsed ? "" : "flex items-center gap-x-3 p-2"} py-4`}
        onClick={() => setCollapsed(!collapsed)}
      >
        <img
          src={arrowright}
          alt="seller info icon"
          className={`w-5 ${collapsed && "mx-auto rotate-180"} transition-all duration-300`}
        />
        {!collapsed && (
          <p className="font-space-grotesk text-sm font-bold text-gray-400">
            sembunyikan menu
          </p>
        )}
      </div>
      <SeideBarSellerInfo isCollapsed={collapsed} />
      <Menu
        mode="inline"
        className="border-b"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["4", "6", "8", "9", "10", "12", "13", "14", "15"]}
        items={sidebarItems}
        selectedKeys={[`/${currentRouter}`]}
        // onClick={(e) => console.log(e)}
        onClick={({ key }) => navigate(key)}
      />
    </Sider>
  );
};

export default SidebarSeller;
