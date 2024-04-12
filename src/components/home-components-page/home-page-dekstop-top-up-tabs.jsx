import { Select, Tabs } from "antd";
import InputComponent from "../ui-components/input-component";
import ButtonComponent from "../ui-components/button-component";
import "./style/home-page-top-up-tabs.css";
import { isMobile } from "react-device-detect";

const itemsSelect1 = [
  {
    label: <span>10.000 - 11.000</span>,
    value: "10.000 - 11.000",
    key: "0",
  },
  {
    label: <span>20.000 - 21.000</span>,
    value: "11.000 - 12.000",
    key: "1",
  },
  {
    label: <span>30.000 - 31.000</span>,
    value: "12.000 - 13.000",
    key: "2",
  },
  {
    label: <span>40.000 - 41.000</span>,
    value: "13.000 - 14.000",
    key: "3",
  },
];

const itemsSelect2 = [
  {
    label: <span>20.000 - 21.000</span>,
    value: "20.000 - 21.000",
    key: "0",
  },
  {
    label: <span>30.000 - 31.000</span>,
    value: "30.000 - 31.000",
    key: "1",
  },
  {
    label: <span>40.000 - 41.000</span>,
    value: "40.000 - 41.000",
    key: "2",
  },
  {
    label: <span>50.000 - 51.000</span>,
    value: "50.000 - 51.000",
    key: "3",
  },
];

const HomePageDesktopTopUpTabs = () => {
  const tabsItems = [
    {
      key: "1",
      label: <span className="font-medium capitalize font-space-grotesk">gopay</span>,
      children: (
        <div className={`flex ${isMobile && "flex-wrap"} items-center w-full gap-x-5`}>
          <div className="flex flex-col w-full gap-y-2">
            <label
              htmlFor="shopeepay"
              className="font-medium capitalize truncate font-space-grotesk"
            >
              nomor telepon
            </label>
            <InputComponent size="large" id="shopeepay" type="number" />
          </div>
          <div className="flex flex-col w-full gap-y-2 " id="priceSelect">
            <label
              htmlFor="shopeepayNominal"
              className="font-medium capitalize font-space-grotesk"
            >
              nominal
            </label>
            <Select
              defaultValue="pilih nominal "
              className="w-full "
              //   onChange={handleChange}
              options={itemsSelect1}
              size="large"
            />
          </div>
          <ButtonComponent
            className={"capitalize mt-5 self-end px-7 shadow-none flex-1"}
            size="large"
            type="primary"
          >
            beli
          </ButtonComponent>
        </div>
      ),
    },
    {
      key: "2",
      label: <span className="font-medium capitalize font-space-grotesk">dana</span>,
      children: (
        <div className={`flex ${isMobile && "flex-wrap"} items-center w-full gap-x-5`}>
          <div className="flex flex-col w-full gap-y-2">
            <label
              htmlFor="shopeepay"
              className="font-medium capitalize truncate font-space-grotesk"
            >
              nomor telepon
            </label>
            <InputComponent size="large" id="shopeepay" type="number" />
          </div>
          <div className="flex flex-col w-full gap-y-2">
            <label
              htmlFor="shopeepayNominal"
              className="font-medium capitalize font-space-grotesk"
            >
              nominal
            </label>
            <Select
              defaultValue="pilih nominal"
              className="w-full"
              //   onChange={handleChange}
              options={itemsSelect2}
              size="large"
            />
          </div>
          <ButtonComponent
            className={"capitalize mt-5 self-end px-7 shadow-none flex-1"}
            size="large"
            type="primary"
          >
            beli
          </ButtonComponent>
        </div>
      ),
    },
    {
      key: "3",
      label: <span className="font-medium capitalize font-space-grotesk">shopee pay</span>,
      children: (
        <div className={`flex ${isMobile && "flex-wrap"} items-center w-full gap-x-5`}>
          <div className="flex flex-col w-full gap-y-2">
            <label
              htmlFor="shopeepay"
              className="font-medium capitalize truncate font-space-grotesk"
            >
              nomor telepon
            </label>
            <InputComponent size="large" id="shopeepay" type="number" />
          </div>
          <div className="flex flex-col w-full gap-y-2">
            <label
              htmlFor="shopeepayNominal"
              className="font-medium capitalize font-space-grotesk"
            >
              nominal
            </label>
            <Select
              defaultValue="pilih nominal"
              className="w-full"
              size="large"
              //   onChange={handleChange}
              options={itemsSelect1}
            />
          </div>
          <ButtonComponent
            className={"capitalize mt-5 self-end px-7 shadow-none flex-1"}
            size="large"
            type="primary"
          >
            beli
          </ButtonComponent>
        </div>
      ),
    },
  ];

  return (
    <div className={`lg:w-[50%] w-full ${isMobile && "mt-5"} `}>
      <h1 className="text-2xl font-bold capitalize font-space-grotesk">top up</h1>
      <Tabs
        className={`w-full  ${
          !isMobile && "mt-5"
        } p-3 rounded-md shadow-sm border-[2px] border-black`}
        defaultActiveKey="0"
        size={"small"}
        items={tabsItems}
      />
    </div>
  );
};

export default HomePageDesktopTopUpTabs;
