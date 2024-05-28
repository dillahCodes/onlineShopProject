import useSWR from "swr";
import addressServices from "../services/address-services";

const useGetProvinces = () => {
  const getAllProvince = async () => {
    const res = await addressServices.getAllProvince();
    return res.data.data;
  };

  const { data, error, isValidating } = useSWR("province", getAllProvince);

  // Kembalikan data, error, dan status loading
  return { provinceData: data, error, provinceDataLoading: isValidating };
};

export default useGetProvinces;
