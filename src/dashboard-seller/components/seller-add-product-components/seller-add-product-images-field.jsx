import { useRef, useState } from "react";
import { RiImageAddLine } from "react-icons/ri";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FaRegTrashCan } from "react-icons/fa6";
import ModalComponent from "../../../components/ui-components/modal-component";

const SellerAddProductImagesField = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // image data list
  const [imageDataList, setImageDataList] = useState(Array(9).fill(null)); // state for store image preview data url
  const [fileList, setFileList] = useState(Array(9).fill(null)); // state for store image file

  const [imageIsExist, setImageIsExist] = useState({
    name: "",
    file: null,
  });
  const items = Array.from({ length: 9 }, (_, index) => index); // create array from 0 to 9

  const inputFileRef = useRef(null); // ref for input file

  const handleOpenModalIfFileExist = (file, reader, updatedFileList) => {
    const imagePreviewResult = reader.result;
    const imageWithSameName = updatedFileList.find(
      (dataFile) => dataFile && dataFile.name === file.name,
    );

    setImageIsExist({
      name: imageWithSameName.name,
      file: imagePreviewResult,
    });

    setIsModalOpen(true);
  };

  const handleImageUpload = (event) => {
    const file = event?.target.files[0];

    // Check file type
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    const allowedTypesString = allowedTypes
      .map((type) => type.split("/")[1])
      .join(", ");
    if (!allowedTypes.includes(file.type)) {
      alert(`File harus berupa gambar dengan format ${allowedTypesString}.`);
      return;
    }

    // Check if file name already exists
    const isFileNameExist = fileList.some(
      (dataFile) => dataFile && dataFile.name === file.name,
    );

    if (file) {
      const reader = new FileReader();

      const handleFileRead = () => {
        const updatedImageDataList = [...imageDataList];
        const updatedFileList = [...fileList];

        if (isFileNameExist)
          return handleOpenModalIfFileExist(file, reader, updatedFileList);

        // Find the first index with null value in imageDataList
        const imageDataIndex = updatedImageDataList.findIndex(
          (data) => data === null,
        );
        if (imageDataIndex !== -1) {
          updatedImageDataList[imageDataIndex] = reader.result;
          setImageDataList(updatedImageDataList);
        }

        // Find the first index with null value in fileList
        const fileIndex = updatedFileList.findIndex((file) => file === null);
        if (fileIndex !== -1) {
          updatedFileList[fileIndex] = file;
          setFileList(updatedFileList);
        }
      };

      reader.onloadend = handleFileRead;
      reader.readAsDataURL(file);

      // Close modal and clear preview file exist
      if (isModalOpen) {
        setIsModalOpen(false);
        setImageIsExist({ name: "", file: null });
      }
    }
  };

  const openFileDialog = () => {
    const inputFile = inputFileRef.current;
    if (inputFile) {
      // Open file dialog
      inputFile.click();

      // Clear file input before uploading a new file
      if (inputFile.value && inputFile.files) {
        inputFile.value = null;
        inputFile.files = null;
      }

      if (isModalOpen) setIsModalOpen(false);

      // Set up event listener for file upload
      inputFile.onchange = (event) => handleImageUpload(event);
    }
  };

  const handleDeleteImagePreview = (index) => {
    // Remove image preview data url and file
    const filteredImageDataList = imageDataList.filter((_, i) => i !== index);
    const filteredFileList = fileList.filter((_, i) => i !== index);

    // Fill empty image preview data url and file
    while (filteredImageDataList.length < 9) filteredImageDataList.push(null);
    while (filteredFileList.length < 9) filteredFileList.push(null);

    // Update state
    setImageDataList(filteredImageDataList);
    setFileList(filteredFileList);
  };

  return (
    <>
      <ModalComponent
        isModalOpen={isModalOpen}
        handleCancel={() => setIsModalOpen(false)}
        handleOk={openFileDialog}
        okText={
          <span className="te font-space-grotesk text-base font-bold capitalize text-white">
            pilih foto lain
          </span>
        }
        cancelText={
          <span className="te font-space-grotesk text-base font-bold capitalize">
            batal upload
          </span>
        }
      >
        <div className="">
          <h1 className="mb-3 font-space-grotesk text-lg font-bold capitalize">
            foto ini sudah digunakan
          </h1>
          <div className="mb-5 flex items-center gap-x-5 rounded-md bg-gray-200 p-2">
            <img
              src={imageIsExist.file}
              alt="this image is already exist"
              className="w-24 rounded-md"
            />
            <span className="font-space-grotesk font-medium">
              {imageIsExist.name}
            </span>
          </div>
        </div>
      </ModalComponent>
      <div className="flex w-full select-none justify-between gap-x-28">
        {/* description input field */}
        <div className="w-[350px]">
          <div className="flex w-full items-center gap-x-2 capitalize">
            <p className="font-space-grotesk font-bold text-gray-500">
              Foto Produk
            </p>
            <span className="rounded-sm bg-gray-200 p-0.5 text-xs font-bold capitalize text-slate-400">
              Wajib
            </span>
          </div>

          <p className="mt-3 font-space-grotesk leading-4 text-gray-700">
            Format foto harus .jpg .jpeg .png dan ukuran min. 300 x 300 px
            (untuk gambar optimal, gunakan ukuran min. 1.200 x 1.200 px).
          </p>

          <p className="mt-3 font-space-grotesk leading-4 text-gray-700">
            Pilih foto produk atau tarik dan letakkan hingga 9 foto sekaligus di
            sini. Upload min. 5 foto yang menarik dan{" "}
            <span className="font-bold text-gray-500">
              berbeda satu sama lain
            </span>{" "}
            untuk menarik perhatian pembeli.
          </p>
        </div>

        {/* input field */}
        <div className="flex w-[750px] flex-wrap justify-between gap-3">
          <input type="file" ref={inputFileRef} className="hidden" />
          {/* image field list */}
          {items.map((item, index) => (
            <ImgField
              key={item}
              index={index}
              openFileDialog={() => openFileDialog()}
              imageDataUrl={imageDataList[index]}
              handleDeleteImagePreview={() => handleDeleteImagePreview(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SellerAddProductImagesField;

const ImgField = ({
  imageDataUrl,
  index,
  openFileDialog,
  handleDeleteImagePreview,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return !imageDataUrl ? (
    <div
      className={classNames(
        "group flex h-[130px] w-[150px] cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed transition-all duration-300",
        {
          "hover:border-[#00AA5B]": !imageDataUrl,
        },
      )}
      onClick={openFileDialog}
    >
      <span
        className={classNames("text-4xl text-gray-400", {
          "group-hover:text-[#00AA5B]": !imageDataUrl,
        })}
      >
        <RiImageAddLine />
      </span>
      <span
        className={classNames("font-space-grotesk font-medium text-gray-400", {
          "group-hover:text-[#00AA5B]": !imageDataUrl,
        })}
      >
        {index === 0 ? "Foto Utama" : `Foto ${index + 1}`}
      </span>
    </div>
  ) : (
    <div
      className={classNames(
        "group flex h-[130px] w-[150px] cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed transition-all duration-300",
        {
          "hover:border-[#00AA5B]": !imageDataUrl,
        },
      )}
    >
      <div
        className={classNames("relative h-full w-full overflow-hidden", {
          "before:absolute before:inset-0 before:rounded-md before:bg-black before:opacity-40 before:transition-all before:duration-300":
            isHovered,
        })}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {index === 0 && (
          <span className="absolute left-1 top-0.5 rounded-md bg-green-200 px-1 py-1 font-space-grotesk text-[10px] font-bold capitalize text-green-600">
            gambar utama
          </span>
        )}
        <img
          src={imageDataUrl}
          alt={`product-${index}`}
          className="h-full w-full rounded-lg object-cover"
        />
        {isHovered && (
          <span
            className="absolute bottom-1 right-1 z-10 rounded-md bg-slate-200 p-2 text-gray-600"
            onClick={() => handleDeleteImagePreview(index)}
          >
            <FaRegTrashCan />
          </span>
        )}
      </div>
    </div>
  );
};
ImgField.propTypes = {
  imageDataUrl: PropTypes.string,
  openFileDialog: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  handleDeleteImagePreview: PropTypes.func.isRequired,
};
