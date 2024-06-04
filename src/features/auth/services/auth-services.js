import instance_axios from "../../../utils/axios/axios-instace-and-interceptors";

// BackEnd auth services documentation reference: https
const authServices = {
  // User Authentication Services
  register: (registerData) => instance_axios.post("users/register", registerData),
  login: (loginData) => instance_axios.post("users/login", loginData),

  // User Management Services
  getAllUser: () => instance_axios.get("users"), // Not used
  getUserById: (userId) => instance_axios.get(`users/${userId}`),
  updateUserData: (userId, data) => instance_axios.patch(`users/${userId}/update`, data),
  deleteUser: (userId) => instance_axios.delete(`users/${userId}/delete`), // use but not implemented

  // User Password Management
  changeUserPassword: (userId, userData) => instance_axios.put(`users/${userId}/change-password`, userData),

  // User Search History Management
  setUserSearchHistory: (userId, data) => instance_axios.post(`users/${userId}/history`, data),
  deleteUserSearchHistory: (historyId) => instance_axios.delete(`users/${historyId}/history/delete`),

  // User Image Management
  uploadUserImage: (userId, formData, config) => instance_axios.put(`users/${userId}/upload-image`, formData, config),

  // User Address Management
  updateUserAddress: (userId, addressId, data) => instance_axios.patch(`users/${userId}/address/${addressId}/update`, data),
  deleteUserAddress: (userId, addressId) => instance_axios.delete(`users/${userId}/address/${addressId}/delete`),
};

export default authServices;
