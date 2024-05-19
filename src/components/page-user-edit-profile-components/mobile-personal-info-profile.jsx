import { IoIosArrowForward, IoIosInformationCircleOutline } from "react-icons/io";
import { useAuth } from "../../context/user-auth-context";
import { MdOutlineContentCopy } from "react-icons/md";
import { useRef, useState } from "react";
import { Alert } from "antd";
import { useNavigate, useSearchParams } from "react-router-dom";

const MobilePersonalInfoProfile = () => {
  const [, setSearchParams] = useSearchParams();
  const [showAlert, setShowAlert] = useState(false);
  const { user } = useAuth();
  const textAreaRef = useRef(null);
  const navigate = useNavigate();

  const copyToClipboard = () => {
    textAreaRef.current.select();
    navigator.clipboard.writeText(textAreaRef.current.value);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
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

      <div className="w-full py-3 flex  flex-col gap-y-5">
        <div className="w-full flex items-center gap-x-2">
          <span className="min-w-[25%] text-[14px] capitalize text-gray-500 truncate">user ID</span>
          <span className="w-full text-[14px] truncate">{user.user_id}</span>
          <span className="text-lg" onClick={copyToClipboard}>
            <MdOutlineContentCopy />
          </span>
          <textarea ref={textAreaRef} value={user?.user_id} readOnly className="hidden" />
          {showAlert && (
            <Alert
              showIcon
              message="user ID berhasil disalin"
              type="success"
              className="fixed z-10 font-space-grotesk bottom-5 left-1/2 transform -translate-x-1/2 w-[90%] capitalize font-medium"
            />
          )}
        </div>
        <div className="w-full flex items-center gap-x-2">
          <span className="min-w-[25%] text-[14px] capitalize text-gray-500 truncate">email</span>
          <span className="w-full text-[14px]  truncate">{user?.email}</span>
          <span className="text-lg" onClick={() => navigate("/user/profile/email")}>
            <IoIosArrowForward />
          </span>
        </div>
        <div className="w-full flex items-center gap-x-2">
          <span className="min-w-[25%] text-[14px] capitalize text-gray-500 truncate">nomor hp</span>
          <span className={`w-full text-[14px] ${!user.phone_number && "text-gray-400"} truncate`}>
            {user.phone_number || "masukkan nomor hp"}
          </span>
          <span className="text-lg" onClick={navigateToEditPhoneNumber}>
            <IoIosArrowForward />
          </span>
        </div>
        <div className="w-full flex items-center gap-x-2">
          <span className="min-w-[25%] text-[14px] capitalize text-gray-500 truncate">jenis kelamin</span>
          <span className={` w-full text-[14px] ${!user.gender && "text-gray-400"} truncate `}>
            {user.gender || "pilih jenis kelamin"}
          </span>
          <span className="text-lg" onClick={() => navigate("/user/profile/gender")}>
            <IoIosArrowForward />
          </span>
        </div>
        <div className="w-full flex items-center gap-x-2">
          <span className="min-w-[25%] text-[14px] capitalize text-gray-500 truncate">tangal lahir</span>
          <span className={`w-full text-[14px] text-gray-400 ${!user.birth_date && "text-gray-400"} truncate`}>
            {user.birth_date || "masukkan tanggal lahir"}
          </span>
          <span className="text-lg" onClick={() => navigate("/user/profile/birth")}>
            <IoIosArrowForward />
          </span>
        </div>
      </div>
    </section>
  );
};

export default MobilePersonalInfoProfile;
