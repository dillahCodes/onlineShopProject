import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import getMonthAndYearFromDate from "../../utils/get-month-and-year-from-date";
import truncateString from "../../utils/truncate-string";

const DetailsProductMobileDiscussMapping = ({ discussData, productOwnerId }) => {
  const navigate = useNavigate();
  const { productId } = useParams();

  const handleNavigateToDetailDiscuss = (item) => navigate(`/product/${productId}/talk/${item.discus_id}`);

  return (
    <section className="w-full p-3 px-3 pt-0">
      {discussData?.map((item, index) => (
        <div
          onClick={() => handleNavigateToDetailDiscuss(item)}
          className={`w-full my-2 py-2 ${index !== discussData.length - 1 ? "border-b" : ""}`}
          key={index}
        >
          <div className="w-full flex items-center gap-x-2">
            <div className="w-6 h-6 border border-black rounded-full overflow-hidden">
              {item.user_id === productOwnerId ? (
                <img src="" alt="" />
              ) : (
                <img
                  src="https://images.tokopedia.net/img/cache/300/tPxBYm/2023/1/20/757f728e-d320-4f75-91ac-cedc5f1edc42.jpg"
                  alt=""
                />
              )}
            </div>
            {item.user_id === productOwnerId ? (
              <span className="font-bold bg-[#C9FDE0] text-[#00AA5B] px-1 py-0.5 rounded-md font-space-grotesk">
                penjual
              </span>
            ) : (
              <span className="font-bold font-space-grotesk">null</span>
            )}
            <span className="h-1 w-1 bg-gray-400 rounded-full"></span>
            <span className="font-space-grotesk text-gray-400 rounded-full">
              {getMonthAndYearFromDate(discussData[0]?.created_at)}
            </span>
          </div>
          <section className="w-full py-1">
            <p>{item.discus_message}</p>
          </section>

          {/* reply section */}
          {item.discus_reply[0] && (
            <section className="w-full border-l-[2px] pl-4 my-3" key={index}>
              <div className="w-full flex items-center gap-x-2">
                <div className="w-6 h-6 border border-black rounded-full">
                  <img src="" alt="" />
                </div>
                <span className="font-bold bg-[#C9FDE0] text-[#00AA5B] px-1 py-0.5 rounded-md font-space-grotesk">
                  penjual
                </span>
                <span className="h-1 w-1 bg-gray-400 rounded-full"></span>
                <span className="font-space-grotesk text-gray-400 rounded-full">
                  {getMonthAndYearFromDate(item.discus_reply[0].created_at)}
                </span>
              </div>
              <section className="w-full">
                <p>{truncateString(item.discus_reply[0].reply_message, 100)}</p>
                {item.discus_reply.length > 1 ? (
                  <span className="capitalize  block mt-3  font-bold font-space-grotesk">
                    lihat {item.discus_reply.length} jawaban lainnya
                  </span>
                ) : (
                  <span className="capitalize  block mt-3  font-bold font-space-grotesk">balas jawaban</span>
                )}
              </section>
            </section>
          )}
        </div>
      ))}
    </section>
  );
};

export default DetailsProductMobileDiscussMapping;

DetailsProductMobileDiscussMapping.propTypes = {
  discussData: PropTypes.array,
  productOwnerId: PropTypes.string,
};
