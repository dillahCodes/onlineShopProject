import PropTypes from "prop-types";
import getMonthAndYearFromDate from "../../utils/get-month-and-year-from-date";

const DetailsDiscussMappingComponent = ({ discussReplyData, productOwnerId }) => {
  return (
    <div className="w-full pb-12">
      {discussReplyData &&
        discussReplyData.map((data, index) => {
          return (
            <div key={index} className={`w-full flex px-3 gap-x-3 ${index !== discussReplyData.length - 1 && "border-b"} py-3`}>
              <div className="w-10 h-10 shrink-0 grow-0 rounded-full  border overflow-hidden">
                <img src={data.avatar === "default_avatar.png" ? "/default_avatar.png" : data.avatar} alt="user avatar" />
              </div>
              <div className="w-full">
                <div className="flex items-center gap-x-2">
                  <h1 className="text-base font-bold font-space-grotesk">{data.name}</h1>
                  {data.user_id === productOwnerId && <span className="font-bold bg-[#C9FDE0] text-[#00AA5B] px-1 py-0.5 rounded-md font-space-grotesk">penjual</span>}
                  <span className="h-1 w-1 bg-gray-400 rounded-full"></span>
                  <span className="font-space-grotesk text-gray-400 rounded-full">{getMonthAndYearFromDate(data?.created_at)}</span>
                </div>
                <div className="w-full overflow-x-auto no-scrollbar">
                  <p>{data.reply_message}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default DetailsDiscussMappingComponent;

DetailsDiscussMappingComponent.propTypes = {
  discussReplyData: PropTypes.array,
  productOwnerId: PropTypes.string,
};
