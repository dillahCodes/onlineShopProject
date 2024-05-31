import axios from "axios";

const user_token = localStorage.getItem("token");

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${user_token}`,
};

//  axios instance
// https://axios-http.com/docs/instance
const instance_axios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers,
  timeout: 10000,
});

export const instance_axios_user_address = axios.create({
  baseURL: import.meta.env.VITE_API_ADDRESS_URL,
  headers,
  timeout: 10000,
});

//  axios interceptors
// https://axios-http.com/docs/interceptors
instance_axios.interceptors.request.use(
  (request) => {
    request.headers.Accept = "application/json";
    // you can do something before request is sent
    return request;
  },
  (error) => {
    // you can do something if request fails
    return Promise.reject(error);
  }
);

instance_axios.interceptors.response.use(
  (response) => {
    // you can do something with response data
    return response;
  },
  (error) => {
    // you can do something with response error
    return Promise.reject(error);
  }
);

export default instance_axios;
