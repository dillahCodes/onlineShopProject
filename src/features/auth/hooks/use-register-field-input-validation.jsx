import { useEffect, useState } from "react";

const useRegisterFieldInputValidation = (initialInputData) => {
  const [validationRegisterInputErrorMessage, setValidationRegisterInputErrorMessage] = useState("");

  useEffect(() => {
    validateFieldRegisterInput(initialInputData);
  }, [initialInputData]);

  const validateFieldRegisterInput = (inputData) => {
    const isEmpty = Object.values(inputData).some((value) => value === "");
    const isIncludeBlackSpace = Object.values(inputData).some((value) => /\s/.test(value));

    if (isIncludeBlackSpace) setValidationRegisterInputErrorMessage("input tidak boleh berisi spasi");
    else if (isEmpty) setValidationRegisterInputErrorMessage("Harap isi semua input yang diperlukan");
    else setValidationRegisterInputErrorMessage("");
  };

  return { validationRegisterInputErrorMessage, validateFieldRegisterInput };
};

export default useRegisterFieldInputValidation;
