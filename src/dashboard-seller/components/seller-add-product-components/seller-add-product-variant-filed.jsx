import { useEffect, useRef, useState } from "react";
import VariantProductTitleComponent from "./variant-product-title-component";
import { useSellerAddProductData } from "../../context/seller-add-product-value-data-context";
import noTableDataImage from "../../../assets/seller-dashboard/no-table-data.svg";
import SellerAddProductTableRow from "./seller-add-product-table-row";
import classNames from "classnames";
import ButtonComponent from "../../../components/ui-components/button-component";
import { MdOutlineAdd } from "react-icons/md";
import { Reorder } from "framer-motion";
import { Popover } from "antd";

const SellerAddProductVariantField = () => {
  const buttonRef = useRef(null);
  const { setAddProductData } = useSellerAddProductData();

  const { addProductData } = useSellerAddProductData();
  const [isVariantTableOpen, setIsVariantTableOpen] = useState(false);
  const [isAddVariantButtonDisabled, setIsAddVariantButtonDisabled] =
    useState(false);

  const [tableData, setTableData] = useState([]);
  const [listProductVariantType, setListProductVariantType] = useState([
    "warna",
    "ukuran",
  ]);

  useEffect(() => {
    setAddProductData((prev) => ({
      ...prev,
      productVariantData: tableData,
    }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tableData]);

  const handleAddTableData = () => {
    if (isAddVariantButtonDisabled) return;

    setTableData((prev) => [
      ...prev,
      {
        imageFile: null,
        imagePreview: "",
        name: "",
        qty: null,
        reorderID: `${Date.now()}`,
      },
    ]);
  };

  const updateNameTableData = (index, newName) => {
    setTableData((prevTableData) => {
      const newTableData = [...prevTableData];
      newTableData[index].name = newName;
      return newTableData;
    });
  };

  const updateQtyTableData = (index, newQty) => {
    setTableData((prevTableData) => {
      if (isNaN(newQty)) return prevTableData;

      const newTableData = [...prevTableData];
      newTableData[index].qty = newQty;
      return newTableData;
    });
  };

  const handleAddNameVariantTableData = (index, variantName) => {
    if (variantName.length > 15) return;
    updateNameTableData(index, variantName);
  };

  const handleAddVariantTypeTableData = (index, variantType) => {
    setTableData((prevTableData) => {
      const newTableData = [...prevTableData];
      const item = newTableData[index];
      const [baseName, existingVariantType] = item.name
        .split("|")
        .map((str) => str.trim());

      const isVariantNameEmpty = !baseName;
      const isVariantTypeExist = existingVariantType === variantType;

      if (isVariantTypeExist || isVariantNameEmpty) return newTableData;

      item.name = `${baseName} | ${variantType}`;
      return newTableData;
    });
  };

  const handleDeleteTableData = (index) => {
    setTableData((prev) => prev.filter((_, i) => i !== index));
  };

  //  if is not 1 product image delete all table data variant
  useEffect(() => {
    if (addProductData.productImagesFiles[0] === null) {
      setTableData([]);
      setIsVariantTableOpen(false);
    }
  }, [addProductData.productImagesFiles]);

  // disabled button add variant
  useEffect(() => {
    const isNameNotExits = tableData?.some((item) => {
      const [name, variant] = item.name.split("|").map((str) => str.trim());
      return !name || !variant;
    });
    const isQtyNotExits = tableData?.some(
      (item) => !item.qty || item.qty === 0,
    );

    if ((isNameNotExits || isQtyNotExits) && tableData.length > 0)
      setIsAddVariantButtonDisabled(true);
    else setIsAddVariantButtonDisabled(false);
  }, [tableData]);

  return (
    <div className="w-full">
      <VariantProductTitleComponent
        buttonOnClick={() => setIsVariantTableOpen(!isVariantTableOpen)}
        isTableVariantOpen={isVariantTableOpen}
        buttonDisabled={
          !addProductData.productCategory ||
          addProductData.productImagesFiles[0] === null
        }
        resetTableData={() => {
          setTableData([]);
          setIsVariantTableOpen(false);
        }}
      />

      {isVariantTableOpen && (
        <>
          <div className="mt-5 flex w-full items-center justify-between">
            <p className="my-3 mt-5 font-space-grotesk text-base font-bold capitalize text-gray-500">
              tabel varian
            </p>

            <Popover
              content={
                isAddVariantButtonDisabled ? (
                  <p className="w-[400px] font-space-grotesk text-sm font-medium capitalize">
                    silahkan masukan nama varian, tipe varian dan stok terlebih
                    dahulu sebelum menambahkan varian baru.
                  </p>
                ) : null
              }
              placement="top"
              getPopupContainer={() => buttonRef.current}
            >
              <ButtonComponent
                ref={buttonRef}
                disabled={isAddVariantButtonDisabled}
                onClick={handleAddTableData}
                className="flex items-center gap-x-2 font-space-grotesk"
                size="medium"
              >
                <span>
                  <MdOutlineAdd />
                </span>
                <span>Tambah Variant</span>
              </ButtonComponent>
            </Popover>
          </div>
          <div className="w-full rounded-xl border p-5">
            <div className="flex h-fit w-full items-center border-b pb-3 pr-1 font-space-grotesk text-base font-bold capitalize">
              <span className="w-[100px] text-center">no</span>
              <span className="w-full px-10 pr-0">foto produk</span>
              <span className="w-full pr-5">nama varian</span>
              <span className="w-full pr-5">tipe varian</span>
              <span className="w-full pr-5">stok produk</span>
              <span className="w-full">aksi</span>
            </div>
            <Reorder.Group
              axis="y"
              values={tableData}
              onReorder={setTableData}
              className={classNames("min-w-full scrollbar-custom", {
                "h-fit": tableData.length !== 0,
                "flex h-[300px] items-center justify-center":
                  tableData.length === 0,
              })}
            >
              {tableData.length === 0 ? (
                <div className="flex h-full w-full flex-col items-center justify-center gap-y-5">
                  <img
                    src={noTableDataImage}
                    alt="no data image"
                    className="w-[280px]"
                  />
                  <p className="font-space-grotesk text-lg font-bold capitalize">
                    Belum ada varian produk yang ditambahkan
                  </p>
                </div>
              ) : (
                tableData.map((data, i) => (
                  <Reorder.Item key={data.reorderID} value={data}>
                    <SellerAddProductTableRow
                      index={i}
                      handleDeleteTableData={() => handleDeleteTableData(i)}
                      setListVariantTypeProcuct={setListProductVariantType}
                      setTableDataValue={setTableData}
                      tableData={data}
                      handleAddVarianttype={handleAddVariantTypeTableData}
                      listVariantTypeProduct={listProductVariantType}
                      handleAddVariantName={(e) =>
                        handleAddNameVariantTableData(i, e.target.value)
                      }
                      updateQtyTableData={updateQtyTableData}
                    />
                  </Reorder.Item>
                ))
              )}
            </Reorder.Group>
          </div>
        </>
      )}
    </div>
  );
};

export default SellerAddProductVariantField;
