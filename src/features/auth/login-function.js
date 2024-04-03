import axios from "axios";

const loginFunction = async (loginData) => {
  try {
    const response = await axios.post(import.meta.env.VITE_API_URL + "users/login", loginData);
    localStorage.setItem("token", response.data.token);
  } catch (error) {
    console.error("Error during login:", error);
  }
};

export default loginFunction;
