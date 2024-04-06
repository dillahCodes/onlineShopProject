import axios from "axios";
import { jwtDecode } from "jwt-decode";
import getUserById from "./get-user-by-id-function";

const loginFunction = async (loginData, setErrorMessage) => {
  try {
    if (!loginData.email || !loginData.password) return setErrorMessage("required email and password");

    const response = await axios.post(import.meta.env.VITE_API_URL + "users/login", loginData);
    localStorage.setItem("token", response.data.token);
    const { userId } = jwtDecode(response.data.token);
    const userData = await getUserById(userId);
    return userData;
  } catch (error) {
    setErrorMessage(error.response.data.error === "password not valid" ? "email atau password salah" : error.response.data.error);
    console.error("Error during login:", error);
  }
};

export default loginFunction;
