import axios from "axios";

const registerFunction = async (registerData, setErrorMessage) => {
  try {
    const response = await axios.post(import.meta.env.VITE_API_URL + "users/register", registerData);
    return response.data.data;
  } catch (error) {
    setErrorMessage(error.response.data.error === "Email already use." ? "email telah digunakan" : error.response.data);
    console.error("Error during register:", error);
  }
};

export default registerFunction;
