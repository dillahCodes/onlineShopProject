const translateRegisterErrorMessage = (errorMessage) => {
  switch (errorMessage) {
    case "Email already use.":
      return "email sudah terdaftar";
    case "invalid email":
      return "email tidak valid";
    default:
      return "";
  }
};

export default translateRegisterErrorMessage;
