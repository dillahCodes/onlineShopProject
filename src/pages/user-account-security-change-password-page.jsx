import { useState } from "react";
import InputComponentWithLabel from "../components/input-components/input-component-with-label";
import useResetPassword from "../features/auth/hooks/use-reset-password";
import ButtonComponent from "../components/ui-components/button-component";
import { useAuth } from "../context/user-auth-context";
import { Alert } from "antd";

const UserAccountSecurityChangePasswordPage = () => {
  const { user } = useAuth();
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const { resetPassword, message, setMessage } = useResetPassword();

  const isButtonDisabled = () => {
    const { currentPassword, newPassword, confirmPassword } = passwordData;
    const isErrors = message.currentPassword || message.newPassword || message.confirmPassword;
    return !currentPassword || !newPassword || !confirmPassword || isErrors;
  };

  const onChange = (event, name) => {
    const { value } = event.target;
    setPasswordData({ ...passwordData, [name]: value });
    setMessage({ ...message, [name]: "" });
  };

  const handleResetPassword = async (event) => {
    event.preventDefault();
    if (!user) return;
    const result = await resetPassword(user.user_id, passwordData.currentPassword, passwordData.newPassword, passwordData.confirmPassword);

    if (result) setIsNotificationVisible(true);
    setTimeout(() => setIsNotificationVisible(false), 4000);
  };

  return (
    <section className="w-full px-3 pb-3">
      {isNotificationVisible && <Alert message={<p className="font-bold font-space-grotesk text-base">kata sandi berhasil diperbarui</p>} type="success" showIcon />}
      <InputComponentWithLabel
        errorMessage={message.currentPassword}
        labelText="Kata Sandi Saat Ini"
        inputValue={passwordData.currentPassword}
        handleOnChange={(e) => onChange(e, "currentPassword")}
      />
      <InputComponentWithLabel
        errorMessage={message.newPassword}
        labelText="kata Sandi Baru"
        inputValue={passwordData.newPassword}
        handleOnChange={(e) => onChange(e, "newPassword")}
      />
      <InputComponentWithLabel
        errorMessage={message.confirmPassword}
        labelText="Konfirmasi Kata Sandi Baru"
        inputValue={passwordData.confirmPassword}
        handleOnChange={(e) => onChange(e, "confirmPassword")}
      />
      <ButtonComponent disabled={isButtonDisabled()} onClick={handleResetPassword} type="primary" className={"w-full font-bold capitalize font-space-grotesk mt-4"} size="large">
        reset password
      </ButtonComponent>
    </section>
  );
};

export default UserAccountSecurityChangePasswordPage;
