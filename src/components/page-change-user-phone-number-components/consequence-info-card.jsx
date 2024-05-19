import PropTypes from "prop-types";

const ConsequenceInfoCard = ({ title, iconSrc, mainIconTitle, subIconTitle, detailsText, className }) => {
  return (
    <section className={`w-full border p-3 font-space-grotesk rounded-md ${className} flex flex-col gap-y-2`}>
      <h3 className="text-black font-bold text-base capitalize font-space-grotesk">{title}</h3>
      <div className="w-full flex gap-x-2 items-center">
        <img src={iconSrc} alt={mainIconTitle} className="w-10 h-10" />
        <span className="flex flex-col">
          <span className="text-[14px] font-bold capitalize">{mainIconTitle}</span>
          {subIconTitle && <span className="text-xs text-gray-400 capitalize">{subIconTitle}</span>}
        </span>
      </div>
      <div className="w-full">
        <p className="text-xs text-gray-900 capitalize">{detailsText}</p>
      </div>
    </section>
  );
};

export default ConsequenceInfoCard;

ConsequenceInfoCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  iconSrc: PropTypes.string.isRequired,
  mainIconTitle: PropTypes.string.isRequired,
  subIconTitle: PropTypes.string,
  detailsText: PropTypes.string.isRequired,
};
