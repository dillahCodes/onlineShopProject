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

const NavbarShippingToSelectLocation = ({ isOpen = true, onClose }) => {
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

  const { provinceData, provinceDataLoading } = useGetProvinces();
  const { regenciesData, regenciesDataLoading } = useGetRegencies(selectedValueCode?.province);
  const { districtsData, districtsDataLoading } = useGetDistricts(selectedValueCode?.districtOrCity);
  const { villagesData, villagesDataLoading } = useVillages(selectedValueCode?.subdistrict);

  const confirmButtonIsDisabled = () => {
    return (
      value?.province === "" ||
      value?.districtOrCity === "" ||
      value?.subdistrict === "" ||
      value?.village === "" ||
      selectedValueCode?.province === null ||
      selectedValueCode?.districtOrCity === null ||
      selectedValueCode?.subdistrict === null ||
      selectedValueCode?.village === null
    );
  };

  // handle display suggestions province
  useEffect(() => {
    const filteredProvinceOptions = value?.province
      ? provinceData?.filter((province) => province?.name.toUpperCase().includes(value?.province.toUpperCase()))
      : provinceData;
    setOptions((prev) => ({
      ...prev,
      province: filteredProvinceOptions?.sort((a, b) => a.name.localeCompare(b.name)),
    }));
  }, [value.province, provinceData]);

  //   handle dispay suggestions districtOrCity
  useEffect(() => {
    const filteredOptions = value?.districtOrCity
      ? regenciesData?.filter((districtOrCity) =>
          districtOrCity?.name.toUpperCase().includes(value?.districtOrCity.toUpperCase())
        )
      : regenciesData || [];

    setOptions((prev) => ({
      ...prev,
      districtOrCity: filteredOptions?.sort((a, b) => a.name.localeCompare(b.name)),
    }));
  }, [value.districtOrCity, regenciesData]);

  //   handle display suggestions subdistrict
  useEffect(() => {
    const filteredOptions = value?.subdistrict
      ? districtsData?.filter((subdistrict) =>
          subdistrict?.name.toUpperCase().includes(value?.subdistrict.toUpperCase())
        )
      : districtsData || [];
    setOptions((prev) => ({
      ...prev,
      subdistrict: filteredOptions?.sort((a, b) => a.name.localeCompare(b.name)),
    }));
  }, [value.subdistrict, districtsData]);

  //   handle display suggestions village
  useEffect(() => {
    const filteredOptions = value?.village
      ? villagesData?.filter((village) => village?.name.toUpperCase().includes(value?.village.toUpperCase()))
      : villagesData || [];
    setOptions((prev) => ({
      ...prev,
      village: filteredOptions?.sort((a, b) => a.name.localeCompare(b.name)),
    }));
  }, [value.village, villagesData]);

  //   set selected data code
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
  }, [
    value.province,
    options.province,
    value.districtOrCity,
    options.districtOrCity,
    value.subdistrict,
    options.subdistrict,
    value.village,
    options.village,
  ]);

  //   const seledtedProvince =
  //     (provinceData &&
  //       value.province &&
  //       options?.province?.find((province) => province?.name === value?.province)?.code) ||
  //     null;
  //   const { regenciesData, regenciesDataLoading } = useGetRegencies(seledtedProvince);
  //   console.log(seledtedProvince);

  const handleDisableInput = (field) => {
    const isProvinceSelected = value.province && options.province?.find((province) => province.name === value.province);
    const isSubdistrictSelected =
      value.districtOrCity && options.districtOrCity?.find((district) => district.name === value.districtOrCity);
    const isDistrictSelected =
      value.subdistrict && options.subdistrict?.find((subdistrict) => subdistrict.name === value.subdistrict);

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

  const onChange = (data, field) => setValue((prev) => ({ ...prev, [field]: data }));

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
      <div className="w-full p-3 flex flex-col gap-y-3">
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
            </label>
          );
        })}
        <ButtonComponent
          className={"w-full  capitalize font-bold font-space-grotesk"}
          type="primary"
          size="large"
          disabled={confirmButtonIsDisabled()}
        >
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
