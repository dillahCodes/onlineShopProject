import axios from "axios";

const getUserById = async (id) => {
  try {
    const response = await axios.get(import.meta.env.VITE_API_URL + "users/" + id);
    return response.data;
  } catch (error) {
    console.error("Error during get user by id:", error);
  }
};

export default getUserById;
