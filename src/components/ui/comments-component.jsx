import ButtonComponent from "./button-component";
import noComent from "../../assets/no_comment.png";
import { motion } from "framer-motion";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { Avatar } from "antd";
import { FaRegUser } from "react-icons/fa6";
import PropTypes from "prop-types";

const CommnetsComponent = ({ comentData, sortTo }) => {
  const goBack = () => history.back();

  const getSortingFunction = (sortTo) => {
    const comparators = {
      terbaru: (a, b) => b.review_id - a.review_id,
      "paling baru": (a, b) => b.review_id - a.review_id,
      "rating tertinggi": (a, b) => b.rating - a.rating,
      "rating terendah": (a, b) => a.rating - b.rating,
    };

    return comparators[sortTo] || comparators["terbaru"];
  };

  if (comentData?.length === 0)
    return (
      <div className="flex justify-center w-full p-5 mt-10 border border-black rounded-md gap-x-20">
        <img src={noComent} width={170} alt="" />
        <div className="flex flex-col">
          <h1 className="text-xl font-bold capitalize font-space-grotesk">sorry...</h1>
          <span className="mt-2 text-sm font-space-grotesk">tidak ada ulasan untuk di tampilkan</span>
          <ButtonComponent
            onClick={goBack}
            className={"mt-10 capitalize font-space-grotesk font-medium"}
            type="primary"
          >
            kembali
          </ButtonComponent>
        </div>
      </div>
    );

  return (
    <div className="flex flex-col w-full mt-5 gap-y-1" key={sortTo}>
      {comentData?.sort(getSortingFunction(sortTo)).map((coment) => (
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          key={coment.review_id}
          className="w-full py-5 border-b"
        >
          <div className="flex w-full mb-3 gap-x-1">
            {[...Array(coment.rating)].map((_, index) => {
              return <IoIosStar className="text-xl" key={index} />;
            })}
            {[...Array(5 - coment.rating)].map((_, index) => {
              return <IoIosStarOutline className="text-xl" key={index} />;
            })}
          </div>
          <div className="w-full">
            <div className="flex items-center w-full gap-x-2">
              <Avatar size={35} icon={<FaRegUser />} />
              <span className="font-bold font-space-grotesk">{coment.user.name}</span>
            </div>
            <div className="flex font-light gap-x-1 font-space-grotesk">
              <span className="capitalize">variant:</span>
              <span>null</span>
            </div>
          </div>
          <p className="mt-5 font-space-grotesk">{coment.comment}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default CommnetsComponent;

CommnetsComponent.propTypes = {
  comentData: PropTypes.array,
  sortTo: PropTypes.string,
};
