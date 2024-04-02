import { Avatar } from "antd";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ModalComponent from "../../components/ui/modal-component";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

const DetailsProductDekstopPhoto = ({ photoData }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenAndCloseModal = () => setIsModalOpen(!isModalOpen);
  const handleSetSelectedPhotoIndex = (index) => setPhotoIndex(index);

  return (
    <>
      {/* modal photo */}
      <ModalComponent
        isModalOpen={isModalOpen}
        handleCancel={handleOpenAndCloseModal}
        modalFooter={null}
        closeIcon={<IoCloseOutline />}
        className={"w-[70%]"}
      >
        <DetailsPhotoProduct photoData={photoData} initialPhotoIndex={photoIndex} />
      </ModalComponent>
      <div className="sticky flex flex-col top-5 h-fit gap-y-2">
        {/* selected photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-[200px] md:max-w-[300px] lg:w-[350px] overflow-hidden rounded-md cursor-pointer h-fit"
          key={photoData[photoIndex]?.img_id}
          onClick={handleOpenAndCloseModal}
        >
          <img
            src={photoData[photoIndex]?.img_url}
            alt={photoData[photoIndex]?.color}
            className="object-cover "
          />
        </motion.div>

        {/* other product photos */}
        <div className="flex flex-wrap w-full gap-3">
          {photoData?.map((item, index) => (
            <div
              key={item.img_id}
              className={`w-[70px] h-[70px]   rounded-md overflow-hidden cursor-pointer ${
                index === photoIndex ? "border-[3px] border-black" : null
              }`}
              onClick={handleSetSelectedPhotoIndex.bind(this, index)}
            >
              <img src={item.img_url} alt={item.color} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DetailsProductDekstopPhoto;
DetailsProductDekstopPhoto.propTypes = {
  photoData: PropTypes.array,
};

const DetailsPhotoProduct = ({ photoData, initialPhotoIndex }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isArrowHidden, setIsArrowHidden] = useState({
    left: false,
    right: false,
  });

  useEffect(() => {
    setPhotoIndex(initialPhotoIndex);
  }, [initialPhotoIndex]);

  useEffect(() => {
    if (photoIndex === 0) {
      setIsArrowHidden({ left: true, right: false });
    } else if (photoIndex === photoData.length - 1) {
      setIsArrowHidden({ left: false, right: true });
    } else {
      setIsArrowHidden({ left: false, right: false });
    }
  }, [photoData.length, photoIndex]);

  const handleSetSelectedPhotoIndex = (index) => setPhotoIndex(index);
  return (
    <div className="flex justify-between w-full">
      <div className="flex justify-between w-full rounded-md ">
        {/* slider button */}
        <Avatar
          size={40}
          className={` bg-white shadow-md top-1/2 -left-2 ${
            isArrowHidden.left && "opacity-[.4]"
          } cursor-pointer`}
          icon={<IoIosArrowBack className="text-black" />}
          onClick={() => {
            if (photoIndex === 0) return;
            setPhotoIndex(photoIndex - 1);
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="w-full h-full "
          key={photoData[photoIndex]?.img_id}
        >
          <img
            src={photoData[photoIndex]?.img_url}
            alt={photoData[photoIndex]?.color}
            className="object-cover max-w-[500px] rounded-md"
          />
        </motion.div>
        {/* slider button */}
        <Avatar
          size={40}
          className={` 
           bg-white shadow-md top-1/2 -right-2 ${isArrowHidden.right && "opacity-[.4]"} cursor-pointer`}
          icon={<IoIosArrowForward className="text-black" />}
          onClick={() => {
            if (photoIndex === photoData.length - 1) return;
            setPhotoIndex(photoIndex + 1);
          }}
        />
      </div>
      <div className="flex w-full gap-3 mt-5 ">
        {photoData?.map((item, index) => (
          <div
            key={item.img_id}
            className={`w-[70px] h-[70px]  rounded-md overflow-hidden cursor-pointer ${
              index === photoIndex ? "border-[3px] border-black" : null
            }`}
            onClick={handleSetSelectedPhotoIndex.bind(this, index)}
          >
            <img src={item.img_url} alt={item.color} />
          </div>
        ))}
      </div>
    </div>
  );
};

DetailsPhotoProduct.propTypes = {
  photoData: PropTypes.array,
  initialPhotoIndex: PropTypes.number,
};
