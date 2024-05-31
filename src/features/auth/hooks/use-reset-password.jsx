import { useState } from "react";
import authServices from "../services/auth-services";

const useResetPassword = () => {
  const [message, setMessage] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const validatePassword = (currentPassword, newPassword, confirmPassword) => {
    const errors = {
      currentPassword: currentPassword ? "" : "Kata sandi saat ini diperlukan",
      newPassword: newPassword ? "" : "Kata sandi baru diperlukan",
      confirmPassword: confirmPassword ? "" : "Konfirmasi kata sandi diperlukan",
    };

    if (!currentPassword || !newPassword || !confirmPassword) {
      setMessage(errors);
      return false;
    }

    if (newPassword !== confirmPassword) {
      setMessage({ ...errors, newPassword: "Kata sandi tidak cocok", confirmPassword: "Kata sandi tidak cocok" });
      return false;
    }

    if (newPassword.length < 8) {
      setMessage({ ...errors, newPassword: "Kata sandi minimal 8 karakter", confirmPassword: "Kata sandi minimal 8 karakter" });
      return false;
    }

    return true;
  };

  const translateErrorMessage = (error = "") => {
    switch (error) {
      case "New password cannot be the same as the current password":
        setMessage({
          currentPassword: "Kata sandi baru tidak boleh sama dengan kata sandi saat ini",
          newPassword: "",
          confirmPassword: "",
        });
        break;
      case "Old password does not match":
        setMessage({
          currentPassword: "Kata sandi lama tidak cocok",
        });
        break;
      default:
        setMessage({
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
        break;
    }
  };

  const resetPassword = async (userId, currentPassword, newPassword, confirmPassword) => {
    if (!validatePassword(currentPassword, newPassword, confirmPassword)) return;
    if (!userId) return;

    const payload = {
      currentPassword,
      newPassword,
      confirmPassword,
    };

    try {
      await authServices.changeUserPassword(userId, payload);
      return true;
    } catch (error) {
      const errorMessage = error.response.data.errors;
      translateErrorMessage(errorMessage);
      console.error("Error resetting password:", error);
    }
  };

  return { resetPassword, message, setMessage };
};

export default useResetPassword;
