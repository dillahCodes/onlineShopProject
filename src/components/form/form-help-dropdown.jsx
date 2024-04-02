import { Dropdown } from "antd";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const items = [
  {
    label: (
      <Link to="/" className="capitalize">
        lupa password?
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link to="/" className="capitalize">
        ada masalah saat masuk?
      </Link>
    ),
    key: "1",
  },
  {
    label: (
      <Link to="/" className="capitalize">
        ada masalah saat registrasi?
      </Link>
    ),
    key: "2",
  },
];

const FormHelpDropdown = () => {
  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={["click"]}
    >
      <div onClick={(e) => e.preventDefault()}>
        <div className="flex items-center gap-2 font-medium capitalize">
          butuh bantuan?
          <IoIosArrowDown className="text-lg" />
        </div>
      </div>
    </Dropdown>
  );
};

export default FormHelpDropdown;
