import { IoIosArrowForward, IoIosInformationCircleOutline } from "react-icons/io";
import { useAuth } from "../../context/user-auth-context";
import { MdOutlineContentCopy } from "react-icons/md";
import { useRef, useState } from "react";
import { Alert } from "antd";

const MobilePersonalInfoProfile = () => {
  const [showAlert, setShowAlert] = useState(false);
  const { user } = useAuth();
  const textAreaRef = useRef(null);

  const copyToClipboard = () => {
    textAreaRef.current.select();
    navigator.clipboard.writeText(textAreaRef.current.value);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };
  return (
    <section className="w-full p-3 border-b">
      <div className="w-full py-3 capitalize text-lg flex items-center gap-x-3">
        <h1 className=" font-medium">Info pribadi</h1>
        <div>
          <IoIosInformationCircleOutline />
        </div>
      </div>

      <div className="w-full py-3 flex  flex-col gap-y-5">
        <div className="w-full flex items-center gap-x-2">
          <span className="min-w-[25%] text-base capitalize text-gray-500 truncate">user ID</span>
          <span className="w-full text-lg truncate">{user.user_id}</span>
          <span className="text-lg" onClick={copyToClipboard}>
            <MdOutlineContentCopy />
          </span>
          <textarea ref={textAreaRef} value={user?.user_id} readOnly className="hidden" />
          {showAlert && (
            <Alert
              message="user ID berhasil disalin"
              type="success"
              className="fixed z-10 bottom-5 left-1/2 transform -translate-x-1/2 w-[90%] capitalize font-medium"
            />
          )}
        </div>
        <div className="w-full flex items-center gap-x-2">
          <span className="min-w-[25%] text-base capitalize text-gray-500 truncate">email</span>
          <span className="w-full text-lg text-gray-400 truncate">{user.email}</span>
          <span className="text-lg">
            <IoIosArrowForward />
          </span>
        </div>
        <div className="w-full flex items-center gap-x-2">
          <span className="min-w-[25%] text-base capitalize text-gray-500 truncate">nomor hp</span>
          <span className="w-full text-lg text-gray-400 truncate">{user.phone_number || "masukkan nomor hp"}</span>
          <span className="text-lg">
            <IoIosArrowForward />
          </span>
        </div>
        <div className="w-full flex items-center gap-x-2">
          <span className="min-w-[25%] text-base capitalize text-gray-500 truncate">jenis kelamin</span>
          <span className="w-full text-lg text-gray-400 truncate">pilih jenis kelamin</span>
          <span className="text-lg">
            <IoIosArrowForward />
          </span>
        </div>
        <div className="w-full flex items-center gap-x-2">
          <span className="min-w-[25%] text-base capitalize text-gray-500 truncate">tangal lahir</span>
          <span className="w-full text-lg text-gray-400 truncate">pilih tanggal lahir</span>
          <span className="text-lg">
            <IoIosArrowForward />
          </span>
        </div>
      </div>
    </section>
  );
};

export default MobilePersonalInfoProfile;
