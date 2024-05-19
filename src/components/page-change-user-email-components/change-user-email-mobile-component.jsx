import { useState } from "react";
import { useAuth } from "../../context/user-auth-context";
import InputChangeUserEmail from "./input-change-user-email";
import { mutate } from "swr";
import authServices from "../../features/auth/services/auth-services";

const ChangeUserEmailMobileComponent = () => {
  const { user } = useAuth();
  const [userEmail, setUserEmail] = useState(user?.email);
  const [isFocused, setIsFocused] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleOnFocus = () => setIsFocused(true);
  const handleOnBlur = () => setIsFocused(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || email.trim() === "") {
      setErrorMessage("Email tidak boleh kosong");
    } else if (email.match(emailRegex)) {
      setErrorMessage("");
    } else {
      setErrorMessage("Email tidak valid");
    }
  };

  const handleOnChange = (e) => {
    const inputValue = e.target.value;
    validateEmail(inputValue);
    setUserEmail(inputValue);
  };

  const handleChangeUserEmail = async () => {
    if (errorMessage || !userEmail) return;
    if (userEmail === user?.email) return setErrorMessage("email tidak boleh sama");

    const payload = { email: userEmail };

    try {
      await authServices.updateUserData(user?.user_id, payload);
      mutate(`/api/user/${user?.user_id}`);
    } catch (error) {
      console.error("Error changing user email:", error);
    }
  };

  return (
    <section className="w-full p-5">
      <InputChangeUserEmail
        handleChangeUserEmail={handleChangeUserEmail}
        userEmail={userEmail}
        errorMessae={errorMessage}
        isFocused={isFocused}
        handleOnChange={handleOnChange}
        handleOnFocus={handleOnFocus}
        handleOnBlur={handleOnBlur}
      />
    </section>
  );
};

export default ChangeUserEmailMobileComponent;
