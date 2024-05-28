import useSWR from "swr";
import addressServices from "../services/address-services";

const useGetRegencies = (provinces_code) => {
  const getAllRegencies = async () => {
    const res = await addressServices.getRegenciesByProvinceCode(provinces_code);
    return res.data.data;
  };
  const shouldFetch = provinces_code != null;

  const { data, error, isValidating } = useSWR(
    shouldFetch ? ["regencies", provinces_code] : null,
    shouldFetch ? getAllRegencies : null
  );

  return { regenciesData: data, error, regenciesDataLoading: isValidating };
};

export default useGetRegencies;
