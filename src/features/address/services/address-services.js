import { instance_axios_user_address } from "../../../utils/axios/axios-instace-and-interceptors";

const addressServices = {
  getAllProvince: () => instance_axios_user_address.get("/provinces"),
  getRegenciesByProvinceCode: (provinces_code) => instance_axios_user_address.get(`${provinces_code}/regencies`),
  getDistrictsByRegencyCode: (regencies_code) => instance_axios_user_address.get(`${regencies_code}/districts`),
  getVillagesByDistrictsCode: (districts_code) => instance_axios_user_address.get(`${districts_code}/villages`),
};

export default addressServices;
