import axios from "axios";

const registerFunction = async (registerData) => {
  try {
    const response = await axios.post(import.meta.env.VITE_API_URL + "users/register", registerData);
  } catch (error) {
    console.error("Error during register:", error);
  }
};

export default registerFunction;
