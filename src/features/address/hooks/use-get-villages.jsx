import useSWR from "swr";
import addressServices from "../services/address-services";

const useVillages = (districts_code) => {
  const getAllVilage = async () => {
    const res = await addressServices.getVillagesByDistrictsCode(districts_code);
    return res.data.data;
  };
  const shouldFetch = districts_code != null;

  const { data, error, isValidating } = useSWR(
    shouldFetch ? ["villages", districts_code] : null,
    shouldFetch ? getAllVilage : null
  );

  return { villagesData: data, error, villagesDataLoading: isValidating };
};

export default useVillages;
