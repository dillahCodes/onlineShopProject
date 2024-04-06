import { useEffect, useState } from "react";

const useLoginFieldInputValidation = (initialInputData) => {
  const [validationLoginInputErrorMessage, setValidationLoginInputErrorMessage] = useState("");

  useEffect(() => {
    validateFieldLoginInput(initialInputData);
  }, [initialInputData]);

  const validateFieldLoginInput = (inputData) => {
    const { password } = inputData;
    const isEmpty = Object.values(inputData).some((value) => value === "");
    const isMin8char = password.length < 8;

    if (isEmpty) {
      setValidationLoginInputErrorMessage("Harap isi semua input yang diperlukan");
    } else if (isMin8char) {
      setValidationLoginInputErrorMessage("password harus memiliki setidaknya 8 karakter");
    } else {
      setValidationLoginInputErrorMessage("");
    }
  };

  return { validationLoginInputErrorMessage, validateFieldLoginInput };
};

export default useLoginFieldInputValidation;
