import { useEffect, useState } from "react";

const useRegisterFieldInputValidation = (initialInputData) => {
  const [validationRegisterInputErrorMessage, setValidationRegisterInputErrorMessage] = useState("");

  const validateFieldRegisterInput = (inputData) => {
    const isEmpty = Object.values(inputData).some((value) => value === "");
    setValidationRegisterInputErrorMessage(isEmpty ? "Harap isi semua input yang diperlukan" : "");
  };

  useEffect(() => {
    validateFieldRegisterInput(initialInputData);
  }, [initialInputData]);

  return { validationRegisterInputErrorMessage, validateFieldRegisterInput };
};

export default useRegisterFieldInputValidation;
