import { IoAddCircleOutline, IoTrashOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import ButtonComponent from "../../../components/ui-components/button-component";
import InputComponent from "../../../components/input-components/input-component";
import { RiImageAddLine } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import { MdOutlinePostAdd } from "react-icons/md";
import classNames from "classnames";

const SellerAddProductTableRow = ({
  index,
  tableData,
  listVariantTypeProduct,
  setListVariantTypeProcuct,
  handleDeleteTableData,
  setTableDataValue,
  handleAddVariantName,
  handleAddVarianttype,
  updateQtyTableData,
}) => {
  const variantNameValue = tableData.name.split("|")[0] || null;
  const variantTypeValue = tableData.name.split("|")[1] || null;

  // reset qty if variant type value is null
  useEffect(() => {
    !variantTypeValue &&
      setTableDataValue((prev) => {
        const newData = [...prev];
        newData[index] = {
          ...newData[index],
          qty: null,
        };
        return newData;
      });
  }, [index, setTableDataValue, variantTypeValue]);

  return (
    <div className="flex h-fit w-full select-none items-center border-b bg-white p-3 px-0 font-space-grotesk text-base capitalize">
      <span className="w-[100px] text-center">{index + 1}</span>
      <span className="w-full overflow-hidden px-10 pr-0 text-center">
        <TableImageInputAndPreview
          index={index}
          setTableDataValue={setTableDataValue}
          imageDataUrl={tableData.imagePreview}
        />
      </span>
      <span className="w-full pr-5">
        <InputComponent
          className={classNames(
            "placeholder:font-space-grotesk placeholder:text-sm",
          )}
          placeholder="Masukkan nama varian"
          size="large"
          onChange={handleAddVariantName}
          value={variantNameValue}
          status={variantNameValue ? "default" : "error"}
        />
      </span>
      <span className="w-full pr-5 text-center">
        <TableVariantTypeInput
          setTableData={setTableDataValue}
          isInputDisabled={!variantNameValue}
          listVariantTypeProduct={listVariantTypeProduct}
          variantTypeValue={variantTypeValue}
          handleAddVariantType={handleAddVarianttype}
          index={index}
          setListVariantTypeProcuct={setListVariantTypeProcuct}
        />
      </span>
      <span className="w-full overflow-hidden pr-5 text-center">
        <InputComponent
          placeholder="Masukkan stok"
          size="large"
          className={classNames(
            "placeholder:font-space-grotesk placeholder:text-sm",
          )}
          disabled={!variantTypeValue}
          value={variantTypeValue ? tableData.qty : null}
          status={tableData.qty ? "default" : "error"}
          onChange={(e) => updateQtyTableData(index, Number(e.target.value))}
        />
      </span>
      <span className="flex w-full items-center justify-between overflow-hidden text-center">
        <ButtonComponent
          danger
          size="large"
          type="primary"
          onClick={handleDeleteTableData}
          className="flex items-center gap-x-2 font-space-grotesk"
        >
          <span className="text-xl">
            <IoTrashOutline />
          </span>
          <span className="text-sm">hapus</span>
        </ButtonComponent>

        <div className="cursor-grabbing p-2 text-2xl">
          <PiDotsSixVerticalBold />
        </div>
      </span>
    </div>
  );
};

export default SellerAddProductTableRow;

SellerAddProductTableRow.propTypes = {
  index: PropTypes.number,
  tableData: PropTypes.object,
  listVariantTypeProduct: PropTypes.array,
  setListVariantTypeProcuct: PropTypes.func,
  dragControlsIcon: PropTypes.object,
  handleDeleteTableData: PropTypes.func,
  setTableDataValue: PropTypes.func,
  handleAddVariantName: PropTypes.func,
  handleAddVarianttype: PropTypes.func,
  updateQtyTableData: PropTypes.func,
};

const TableImageInputAndPreview = ({
  index,
  imageDataUrl,
  setTableDataValue,
}) => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };
  const handleOnChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file type
      const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
      const allowedTypesString = allowedTypes
        .map((type) => type.split("/")[1])
        .join(", ");
      if (!allowedTypes.includes(file.type)) {
        alert(`File harus berupa gambar dengan format ${allowedTypesString}.`);
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const base64String = reader.result;
        setTableDataValue((prev) => {
          const newTableData = [...prev];
          newTableData[index] = {
            ...newTableData[index],
            imageFile: file,
            imagePreview: base64String,
          };
          return newTableData;
        });
      };
    }
  };

  return (
    <div
      className={classNames(
        "h-[80px] w-[80px] rounded-md font-space-grotesk transition-all duration-300",
        {
          "group border border-dashed hover:border-[#00AA5B]": !imageDataUrl,
        },
      )}
      onClick={handleClick}
    >
      <input
        type="file"
        className="hidden"
        ref={inputRef}
        onChange={handleOnChange}
      />
      {!imageDataUrl ? (
        <div className="flex h-full cursor-pointer flex-col items-center justify-center">
          <span className="text-gray-400 transition-all duration-300 group-hover:text-[#00AA5B]">
            <RiImageAddLine />
          </span>
          <span className="text-[8px] text-gray-400 transition-all duration-300 group-hover:text-[#00AA5B]">
            Foto {index + 1}
          </span>
        </div>
      ) : (
        <div className="group relative flex h-full w-full items-center justify-center overflow-hidden rounded-md">
          <img src={imageDataUrl} className="h-full w-full rounded-md" />
          <span className="absolute mt-40 cursor-pointer rounded-md bg-[#00AA5B] px-1 font-space-grotesk text-[10px] font-medium text-white transition-all duration-300 group-hover:mt-0">
            ganti foto
          </span>
        </div>
      )}
    </div>
  );
};

TableImageInputAndPreview.propTypes = {
  index: PropTypes.number,
  imageDataUrl: PropTypes.string,
  setTableDataValue: PropTypes.func,
};

const TableVariantTypeInput = ({
  listVariantTypeProduct,
  setListVariantTypeProcuct,
  setTableData,
  variantTypeValue,
  index,
  handleAddVariantType,
  isInputDisabled,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [erroMessage, setErroMessage] = useState("");

  const containerRef = useRef(null);

  const [isInputFieldOpen, setIsInputFieldOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isMaxListVariantType = listVariantTypeProduct.length === 4;

  const handleInputFieldOpen = () => setIsInputFieldOpen(true);
  const handleOnchange = (e) => {
    const value = e.target.value;
    const isSameVariant = listVariantTypeProduct.some(
      (item) => item.toLowerCase() === value.toLowerCase(),
    );
    const limitLength = 13;
    if (value.length > limitLength) return;

    if (value.includes("|")) setErroMessage(`Tidak boleh ada karakter "|"`);
    if (isSameVariant) setErroMessage(`Tipe varian sudah ada`);
    else setErroMessage("");
    setInputValue(value);
  };

  const handleAddProductVariantTypeList = () => {
    if (inputValue === "" || isMaxListVariantType) return;

    setListVariantTypeProcuct([...listVariantTypeProduct, inputValue]);
    setIsInputFieldOpen(false);
    setInputValue("");
  };

  const handleDeleteProductVariantTypeList = (i) => {
    const newList = listVariantTypeProduct.filter((_, index) => index !== i);
    setListVariantTypeProcuct(newList);

    setTableData((prev) =>
      prev.filter((item) => {
        const variantType = item.name.split("|")[1]?.trim();
        const isVariantValid = newList.includes(variantType);
        const isItemValid =
          !item.imageFile ||
          !item.imagePreview ||
          item.imageFile ||
          item.imagePreview ||
          !item.qty ||
          item.qty === 0;

        return isVariantValid && isItemValid;
      }),
    );
  };

  const setVariantType = (variantType) =>
    handleAddVariantType(index, variantType);

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
      setIsInputFieldOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isMaxListVariantType) setIsInputFieldOpen(false);
  }, [isMaxListVariantType]);

  return (
    <div className="relative h-fit" ref={containerRef}>
      <InputComponent
        value={variantTypeValue}
        disabled={isInputDisabled}
        size="large"
        status={variantTypeValue ? "default" : "error"}
        className={classNames(
          "placeholder:font-space-grotesk placeholder:text-sm",
        )}
        placeholder="Pilih Tipe varian"
        readOnly
        onClick={() => setIsDropdownOpen(true)}
      />
      {isDropdownOpen && (
        <div className="absolute z-[2] mt-2 w-[300px] rounded-md bg-white p-2 text-start text-sm shadow-lg">
          {listVariantTypeProduct.map((data, index) => (
            <div
              key={index}
              className={classNames("w-full rounded-md p-2 hover:bg-gray-100", {
                "flex items-center": ![0, 1].includes(index),
              })}
            >
              <p
                key={index}
                className="w-full cursor-pointer text-sm"
                onClick={() => setVariantType(data)}
              >
                {data}
              </p>
              {![0, 1].includes(index) && (
                <span
                  className="cursor-pointer text-lg"
                  onClick={() => handleDeleteProductVariantTypeList(index)}
                >
                  <IoTrashOutline />
                </span>
              )}
            </div>
          ))}
          {!isInputFieldOpen ? (
            <ButtonComponent
              disabled={isMaxListVariantType}
              type="primary"
              className="mt-2 flex w-full cursor-pointer items-center justify-center rounded-md p-2"
              onClick={handleInputFieldOpen}
            >
              {isMaxListVariantType ? (
                <p className="font-space-grotesk font-medium capitalize">
                  maksimal 4 tipe varian
                </p>
              ) : (
                <div className="flex w-full items-center gap-x-1">
                  <span className="text-sm">
                    <IoAddCircleOutline />
                  </span>
                  <p className="text-xs font-bold capitalize">
                    Tambahkan Tipe varian
                  </p>
                </div>
              )}
            </ButtonComponent>
          ) : (
            <div
              className="mt-2 w-full rounded-md p-0.5"
              onClick={handleInputFieldOpen}
            >
              <div className="flex w-full cursor-pointer items-center gap-x-2">
                <InputComponent
                  type="text"
                  status={erroMessage ? "error" : "default"}
                  value={inputValue}
                  onChange={handleOnchange}
                  size="medium"
                  placeholder="masukan Tipe Varian"
                  className="placeholder:font-space-grotesk placeholder:capitalize"
                />
                <ButtonComponent
                  disabled={erroMessage}
                  type="primary"
                  onClick={handleAddProductVariantTypeList}
                  size="medium"
                  className="flex items-center gap-x-2 font-space-grotesk"
                >
                  <span className="text-xl">
                    <MdOutlinePostAdd />
                  </span>
                </ButtonComponent>
              </div>
              {erroMessage && (
                <p className="font-space-grotesk text-[10px] font-medium text-red-600">
                  {erroMessage}
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
TableVariantTypeInput.propTypes = {
  listVariantTypeProduct: PropTypes.array,
  setListVariantTypeProcuct: PropTypes.func,
  variantTypeValue: PropTypes.string,
  handleAddVariantType: PropTypes.func,
  index: PropTypes.number,
  isInputDisabled: PropTypes.bool,
  setTableData: PropTypes.func,
};
