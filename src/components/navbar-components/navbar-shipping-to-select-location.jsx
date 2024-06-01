import { IoClose, IoLocationOutline } from "react-icons/io5";
import BottomDrawer from "../ui-components/bottom-drawer";
import PropTypes from "prop-types";
import { AutoComplete } from "antd";
import { useState, useEffect } from "react";
import useGetProvinces from "../../features/address/hooks/use-get-provinces";
import useGetRegencies from "../../features/address/hooks/use-get-regencies";
import useGetDistricts from "../../features/address/hooks/use-get-districts";
import useVillages from "../../features/address/hooks/use-get-villages";
import ButtonComponent from "../ui-components/button-component";

const addressFields = ["provinsi", "kabupaten/kota", "kecamatan", "desa"];

const translateOption = (option) => {
  switch (option) {
    case "provinsi":
      return "province";
    case "kabupaten/kota":
      return "districtOrCity";
    case "kecamatan":
      return "subdistrict";
    case "desa":
      return "village";
    default:
      return option; // Return the original option if no translation is found
  }
};

// render each items of suggestion
const renderEachOption = (option) => ({
  label: (
    <div className="w-full flex items-center gap-x-2">
      <span className="text-xl">
        <IoLocationOutline />
      </span>
      <span className="uppercase">{option}</span>
    </div>
  ),
  value: option,
});

// Utility function to handle filtering and setting options
const handleFilterAndSetOptions = (field, value, data, setOptions) => {
  const filteredOptions = value ? data?.filter((item) => item?.name.toUpperCase().includes(value.toUpperCase())) : data || [];
  setOptions((prev) => ({
    ...prev,
    [field]: filteredOptions?.sort((a, b) => a.name.localeCompare(b.name)),
  }));
};

const NavbarShippingToSelectLocation = ({ isOpen, onClose }) => {
  const [value, setValue] = useState({
    province: "",
    districtOrCity: "",
    subdistrict: "",
    village: "",
  });
  const [selectedValueCode, setSelectedValueCode] = useState({
    province: null,
    districtOrCity: null,
    subdistrict: null,
    village: null,
  });
  const [options, setOptions] = useState({
    province: [],
    districtOrCity: [],
    subdistrict: [],
    village: [],
  });
  const [errorMessage, setErrorMessage] = useState({
    province: "",
    districtOrCity: "",
    subdistrict: "",
    village: "",
  });

  const { provinceData, provinceDataLoading } = useGetProvinces(isOpen);
  const { regenciesData, regenciesDataLoading } = useGetRegencies(selectedValueCode?.province);
  const { districtsData, districtsDataLoading } = useGetDistricts(selectedValueCode?.districtOrCity);
  const { villagesData, villagesDataLoading } = useVillages(selectedValueCode?.subdistrict);

  // handle reset state if close
  useEffect(() => {
    if (!isOpen) {
      setValue({
        province: "",
        districtOrCity: "",
        subdistrict: "",
        village: "",
      });
      setSelectedValueCode({
        province: null,
        districtOrCity: null,
        subdistrict: null,
        village: null,
      });
    }
  }, [isOpen]);

  // useEffect to filter and set options (suggestions)
  useEffect(() => {
    handleFilterAndSetOptions("province", value.province, provinceData, setOptions);
  }, [value.province, provinceData]);

  useEffect(() => {
    handleFilterAndSetOptions("districtOrCity", value.districtOrCity, regenciesData, setOptions);
  }, [value.districtOrCity, regenciesData]);

  useEffect(() => {
    handleFilterAndSetOptions("subdistrict", value.subdistrict, districtsData, setOptions);
  }, [value.subdistrict, districtsData]);

  useEffect(() => {
    handleFilterAndSetOptions("village", value.village, villagesData, setOptions);
  }, [value.village, villagesData]);

  //   set selected data value code
  useEffect(() => {
    const updateSelectedValueCode = (field, value, options) => {
      setSelectedValueCode((prev) => ({
        ...prev,
        [field]: options?.find((option) => option?.name === value)?.code || null,
      }));
    };

    updateSelectedValueCode("province", value.province, options.province);
    updateSelectedValueCode("districtOrCity", value.districtOrCity, options.districtOrCity);
    updateSelectedValueCode("subdistrict", value.subdistrict, options.subdistrict);
    updateSelectedValueCode("village", value.village, options.village);
  }, [value.province, options.province, value.districtOrCity, options.districtOrCity, value.subdistrict, options.subdistrict, value.village, options.village]);

  // set error message in input field if value is invalid
  const handleErrorMessage = (field, value, options, selectedValueCode, message) => {
    const isInvalid = value && options?.find((option) => option.code === selectedValueCode) && options?.find((option) => option.name === value);
    const errorName = !isInvalid ? message : "";
    setErrorMessage((prev) => ({ ...prev, [field]: errorName }));
  };

  useEffect(() => {
    handleErrorMessage("province", value.province, options.province, selectedValueCode.province, "Silahkan pilih provinsi yang valid.");
    handleErrorMessage("districtOrCity", value.districtOrCity, options.districtOrCity, selectedValueCode.districtOrCity, "Silahkan pilih kabupaten/kota yang valid.");
    handleErrorMessage("subdistrict", value.subdistrict, options.subdistrict, selectedValueCode.subdistrict, "Silahkan pilih kecamatan yang valid.");
    handleErrorMessage("village", value.village, options.village, selectedValueCode.village, "Silahkan pilih desa yang valid.");
  }, [
    options.province,
    selectedValueCode.province,
    value.province,
    value.subdistrict,
    options.subdistrict,
    selectedValueCode.subdistrict,
    value.districtOrCity,
    options.districtOrCity,
    selectedValueCode.districtOrCity,
    value.village,
    selectedValueCode.village,
    options.village,
  ]);

  // validations to disable input
  const handleDisableInput = (field) => {
    const isProvinceSelected = value.province && options.province?.find((province) => province.name === value.province);
    const isSubdistrictSelected = value.districtOrCity && options.districtOrCity?.find((district) => district.name === value.districtOrCity);
    const isDistrictSelected = value.subdistrict && options.subdistrict?.find((subdistrict) => subdistrict.name === value.subdistrict);

    switch (field) {
      case "districtOrCity":
        return !isProvinceSelected;
      case "subdistrict":
        return !isSubdistrictSelected;
      case "village":
        return !isDistrictSelected;
      default:
        return false;
    }
  };

  // validations to disable confirm button
  const confirmButtonIsDisabled = () => {
    const isValueEmpty = Object.values(value).some((value) => value === "");
    const isSelectedValueCodeNull = Object.values(selectedValueCode).some((code) => code === null);
    return isValueEmpty || isSelectedValueCodeNull;
  };

  const onChange = (data, field) => setValue((prev) => ({ ...prev, [field]: data }));

  // render each option
  const mappedOptionsByField = Object.keys(options).reduce((mappedOptions, key) => {
    mappedOptions[key] = options[key]?.map((option) => renderEachOption(option.name));
    return mappedOptions;
  }, {});

  return (
    <BottomDrawer
      isOpen={isOpen}
      onClose={onClose}
      drawerHeight={"auto"}
      className="rounded-t-md "
      id="Navbar-Shipping-To-Drawer-Component"
      drawerTitle={
        <section className="w-full flex items-center gap-x-2" onClick={onClose}>
          <span className="text-2xl">
            <IoClose />
          </span>
          <span className="capitalize text-base font-bold font-space-grotesk">kota atau kecamatan</span>
        </section>
      }
    >
      <div className="w-full p-3 flex flex-col gap-y-3 overflow-hidden">
        {addressFields.map((field, index) => {
          const translatedField = translateOption(field);
          const fieldOptions = mappedOptionsByField[translatedField];
          return (
            <label htmlFor={`select-${field}`} key={index}>
              <p className="capitalize text-sm font-space-grotesk py-1 font-bold">
                pilih {field} <span className="text-red-500">*</span>
              </p>
              <AutoComplete
                className="w-full  "
                id={`select-${field}`}
                size="large"
                allowClear
                disabled={handleDisableInput(translatedField)}
                options={fieldOptions}
                onSearch={(searchText) => onChange(searchText, translatedField)}
                value={value[translatedField]}
                onChange={(valueInput) => onChange(valueInput, translatedField)}
                placeholder={<span className="capitalize">`pilih {field} `</span>}
              />
              <p className="text-red-500">{errorMessage[translatedField]}</p>
            </label>
          );
        })}
        <ButtonComponent className={"w-full  capitalize font-bold font-space-grotesk mt-5 p-0 "} type="primary" size="large" disabled={confirmButtonIsDisabled()}>
          simpan
        </ButtonComponent>
      </div>
    </BottomDrawer>
  );
};

NavbarShippingToSelectLocation.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NavbarShippingToSelectLocation;
