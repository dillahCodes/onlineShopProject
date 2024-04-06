import { useEffect, useState } from "react";

const useRegisterPasswordValidation = () => {
  const [validationCheckCondition, setValidationCheckCondition] = useState({
    passwordIsMatch: false,
    passwordIsMin8Char: false,
    passwordIsContain1Uppercase: false,
    passwordIsContainsNumber: false,
  });

  const [validationPasswordErrorMessage, setValidationPasswordErrorMessage] = useState("");

  useEffect(() => {
    const isSomeValidationFailed = Object.values(validationCheckCondition).includes(false);
    setValidationPasswordErrorMessage(isSomeValidationFailed ? "harap periksa kembali password anda" : "");
  }, [validationCheckCondition]);

  const validatePassword = (password, confirmPassword) => {
    const isMatch = password === confirmPassword && password !== "" && confirmPassword !== "";
    const isMin8Char = password.length >= 8;
    const isContain1Uppercase = /[A-Z]/.test(password);
    const isContainNumber = /[0-9]/.test(password);

    setValidationCheckCondition({
      passwordIsMatch: isMatch,
      passwordIsMin8Char: isMin8Char,
      passwordIsContain1Uppercase: isContain1Uppercase,
      passwordIsContainNumber: isContainNumber,
    });

    const isSomeValidationFailed = Object.values(validationCheckCondition).includes(false);
    setValidationPasswordErrorMessage(isSomeValidationFailed ? "harap periksa kembali password anda" : "");
  };

  const resetValidationCheckCondition = () => {
    setValidationCheckCondition({
      passwordIsMatch: false,
      passwordIsMin8Char: false,
      passwordIsContain1Uppercase: false,
      passwordIsContainsNumber: false,
    });
  };

  return { validationCheckCondition, validatePassword, validationPasswordErrorMessage, resetValidationCheckCondition };
};

export default useRegisterPasswordValidation;
