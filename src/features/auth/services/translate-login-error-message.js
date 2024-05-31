const translateLoginErrorMessage = (errorMessage) => {
  switch (errorMessage) {
    case "password not valid":
      return "email atau password salah";
    case "user not found":
      return "email atau password salah";
    case "email doesnt exist":
      return "email atau password salah";
    case "Email & Password not valid":
      return "email atau password salah";
    default:
      return errorMessage;
  }
};

export default translateLoginErrorMessage;
