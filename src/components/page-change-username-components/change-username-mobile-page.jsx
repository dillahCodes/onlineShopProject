import { useState } from "react";
import { useAuth } from "../../context/user-auth-context";
import ChangeUsernameInputComponent from "./change-username-input-component";
import authServices from "../../features/auth/services/auth-services";
import { mutate } from "swr";

const ChangeUserNameMobilePage = () => {
  const { user } = useAuth();
  const [username, setUsername] = useState(user?.username);
  const [isFocused, setIsFocused] = useState(false);
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [errorMessae, setErrorMessage] = useState("");

  const isValidUsername = (username) => {
    const regex = /^[a-zA-Z0-9\s]*$/;

    if (!username) {
      setIsInputEmpty(true);
      setErrorMessage("Username harus di isi");
    } else if (!regex.test(username)) {
      setIsInputEmpty(true);
      setErrorMessage("Username hanya boleh berisi huruf dan angka");
    } else {
      setIsInputEmpty(false);
      setErrorMessage("");
    }

    return username;
  };

  const handleOnChange = (e) => {
    const inputValue = e.target.value;
    isValidUsername(inputValue);
    setUsername(inputValue);
  };

  const handleChangeUsername = async () => {
    if (errorMessae || !username) return;
    if (username === user?.username) return setErrorMessage("username tidak boleh sama");

    const payload = { username };
    try {
      await authServices.updateUserData(user?.user_id, payload);
      mutate(`/api/user/${user?.user_id}`);
    } catch (error) {
      console.error("Error changing username:", error);
    }
  };

  const handleOnFocus = () => setIsFocused(true);
  const handleOnBlur = () => setIsFocused(false);

  return (
    <section className="wfull p-5">
      <ChangeUsernameInputComponent
        isFocused={isFocused}
        isInputEmpty={isInputEmpty}
        errorMessae={errorMessae}
        username={username}
        handleOnChange={handleOnChange}
        handleOnFocus={handleOnFocus}
        handleOnBlur={handleOnBlur}
        handleChangeUserName={handleChangeUsername}
      />
    </section>
  );
};

export default ChangeUserNameMobilePage;
