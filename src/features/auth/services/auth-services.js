import instance_axios from "../../../utils/axios/axios-instace-and-interceptors";

// backEnd auth services documentation reference: https
const authServices = {
  register: (registerData) => instance_axios.post("users/register", registerData),
  login: (loginData) => instance_axios.post("users/login", loginData),
  getAllUser: () => instance_axios.get("users"),
  getUserById: (userId) => instance_axios.get(`users/${userId}`),
  updateUser: (userId, userData) => instance_axios.patch(`users/${userId}`, userData),
  changeUserPassword: (userId, userData) =>
    instance_axios.put(`users/${userId}/change-password`, userData),
  deleteUser: (userId) => instance_axios.delete(`users/${userId}/delete`),
  setUserSearchHistory: (userId, data) => instance_axios.post(`users/${userId}/history`, data),
  deleteUserSearchHistory: (historyId) =>
    instance_axios.delete(`users/${historyId}/history/delete`),
};

export default authServices;
