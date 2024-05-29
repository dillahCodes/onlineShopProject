import { IoIosArrowForward, IoIosInformationCircleOutline } from "react-icons/io";
import { useAuth } from "../../context/user-auth-context";
import { MdOutlineContentCopy } from "react-icons/md";
import { useRef, useState } from "react";
import { Alert } from "antd";
import { useNavigate, useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

const InfoItem = ({ label, value, onClick, isCopyable, textAreaRef, showAlert }) => (
  <div className="w-full flex items-center gap-x-2 font-space-grotesk">
    <span className="min-w-[25%] text-[14px] capitalize text-gray-500 truncate">{label}</span>
    <span className={`w-full text-[14px] ${!value && "text-gray-400"} truncate`}>{value || `masukkan ${label}`}</span>
    <span className="text-lg" onClick={onClick}>
      {isCopyable ? <MdOutlineContentCopy /> : <IoIosArrowForward />}
    </span>
    {isCopyable && (
      <>
        <textarea ref={textAreaRef} value={value} readOnly className="hidden" />
        {showAlert && (
          <Alert
            showIcon
            message={`${label} berhasil disalin`}
            type="success"
            className="fixed z-10 font-space-grotesk bottom-5 left-1/2 transform -translate-x-1/2 w-[90%] capitalize font-medium"
          />
        )}
      </>
    )}
  </div>
);

InfoItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
  isCopyable: PropTypes.bool,
  textAreaRef: PropTypes.object,
  showAlert: PropTypes.bool,
  setShowAlert: PropTypes.func,
};

const MobilePersonalInfoProfile = () => {
  const [, setSearchParams] = useSearchParams();
  const [showAlert, setShowAlert] = useState(false);
  const { user } = useAuth();
  const textAreaRef = useRef(null);
  const navigate = useNavigate();
  const userDateBirth = `${user?.date_of_birth[0].date}/${user?.date_of_birth[0].month}/${user?.date_of_birth[0].year}`;

  const copyToClipboard = () => {
    textAreaRef.current.select();
    navigator.clipboard.writeText(textAreaRef.current.value);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const navigateToEditPhoneNumber = () => {
    setSearchParams({ st: "consequence-info" });
    navigate("/user/profile/phone?st=consequence-info", { replace: true });
  };

  return (
    <section className="w-full p-3 border-b">
      <div className="w-full py-3 capitalize text-base flex items-center gap-x-3">
        <h1 className=" font-medium">Info pribadi</h1>
        <div>
          <IoIosInformationCircleOutline />
        </div>
      </div>

      <div className="w-full py-3 flex flex-col gap-y-5">
        <InfoItem label="user ID" value={user.user_id} onClick={copyToClipboard} isCopyable textAreaRef={textAreaRef} showAlert={showAlert} setShowAlert={setShowAlert} />
        <InfoItem label="email" value={user?.email} onClick={() => navigate("/user/profile/email")} />
        <InfoItem label="nomor hp" value={user.phone_number} onClick={navigateToEditPhoneNumber} />
        <InfoItem label="jenis kelamin" value={user.gender} onClick={() => navigate("/user/profile/gender")} />
        <InfoItem label="tangal lahir" value={userDateBirth} onClick={() => navigate("/user/profile/birth")} />
      </div>
    </section>
  );
};

export default MobilePersonalInfoProfile;
