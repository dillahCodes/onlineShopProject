import { MdOutlineAdd } from "react-icons/md";
import ButtonComponent from "../../../components/ui-components/button-component";
import PropTypes from "prop-types";
import { IoTrashOutline } from "react-icons/io5";
import { Popover } from "antd";
import { useRef } from "react";
import classNames from "classnames";

const VariantProductTitleComponent = ({
  buttonDisabled,
  buttonOnClick,
  isTableVariantOpen,
  resetTableData,
}) => {
  const buttonRef = useRef(null);

  const buttonDisabledContent = (
    <p className="w-fit font-space-grotesk text-xs font-medium">
      Silahkan masukan kategori produk dan minimal 1 gambar produk terlebih
      dahulu
    </p>
  );

  return (
    <div
      className={classNames(
        "flex w-full items-center justify-between font-space-grotesk",
        { "border-b pb-3": isTableVariantOpen },
      )}
    >
      <div className="flex flex-col">
        <h1 className="font-space-grotesk text-lg font-bold capitalize">
          Varian Produk
        </h1>
        <p>
          Tambah varian agar pembeli dapat memilih produk yang sesuai, yuk!
          Masukkan varian untuk produk ini.
        </p>
      </div>
      <Popover
        content={buttonDisabled ? buttonDisabledContent : null}
        placement="top"
        getPopupContainer={() => buttonRef.current}
      >
        <ButtonComponent
          ref={buttonRef}
          onClick={isTableVariantOpen ? resetTableData : buttonOnClick}
          disabled={buttonDisabled}
          type="primary"
          danger={isTableVariantOpen}
          className="flex items-center gap-x-2 font-space-grotesk"
          size="medium"
        >
          <span>
            {isTableVariantOpen ? <IoTrashOutline /> : <MdOutlineAdd />}
          </span>
          <span>
            {isTableVariantOpen ? "Hapus Semua Varian" : "Tambah Varian"}
          </span>
        </ButtonComponent>
      </Popover>
    </div>
  );
};

export default VariantProductTitleComponent;

VariantProductTitleComponent.propTypes = {
  buttonDisabled: PropTypes.bool,
  buttonOnClick: PropTypes.func,
  isTableVariantOpen: PropTypes.bool,
  resetTableData: PropTypes.func,
};
