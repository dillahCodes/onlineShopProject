import useSWR from "swr";
import addressServices from "../services/address-services";

const useGetDistricts = (regencies_code) => {
  const getAllDistricts = async () => {
    const res = await addressServices.getDistrictsByRegencyCode(regencies_code);
    return res.data.data;
  };

  const shouldFetch = regencies_code != null;

  const { data, error, isValidating } = useSWR(
    shouldFetch ? ["districts", regencies_code] : null,
    shouldFetch ? getAllDistricts : null
  );

  return { districtsData: data, error, districtsDataLoading: isValidating };
};

export default useGetDistricts;
