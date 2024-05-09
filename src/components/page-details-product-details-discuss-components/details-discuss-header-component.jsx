import PropTypes from "prop-types";
import getMonthAndYearFromDate from "../../utils/get-month-and-year-from-date";
import ButtonComponent from "../ui-components/button-component";

const DetailsDiscussHeaderComponent = ({
  discussUserID,
  productOwnerId,
  created_at,
  discus_message,
  discussUserName,
}) => {
  return (
    <>
      <div className="w-full flex items-center gap-x-2 p-3 pb-2">
        <div className="w-6 h-6 border border-black rounded-full overflow-hidden">
          {discussUserID === productOwnerId ? (
            <img src="" alt="" />
          ) : (
            <img
              src="https://images.tokopedia.net/img/cache/300/tPxBYm/2023/1/20/757f728e-d320-4f75-91ac-cedc5f1edc42.jpg"
              alt=""
            />
          )}
        </div>
        {discussUserID === productOwnerId ? (
          <span className="font-bold bg-[#C9FDE0] text-[#00AA5B] px-1 py-0.5 rounded-md font-space-grotesk">
            penjual
          </span>
        ) : (
          <span className="font-bold font-space-grotesk">{discussUserName}</span>
        )}
        <span className="h-1 w-1 bg-gray-400 rounded-full"></span>
        <span className="font-space-grotesk text-gray-400 rounded-full">{getMonthAndYearFromDate(created_at)}</span>
      </div>
      <section className="w-full px-3 border-b">
        <p className="font-bold text-lg">{discus_message}</p>

        <ButtonComponent
          className={
            "capitalize my-5 font-bold border-[#00AA5B] text-[#00AA5B] rounded-xl py-0.5 px-8 flex items-center justify-center"
          }
        >
          follow
        </ButtonComponent>

        <p className="text-[10px] mb-5 font-space-grotesk text-gray-400">
          Diskusi adalah tempat kamu bertanya dan kasih jawaban seputar produk. Tetap sopan dan jangan lupa&nbsp;
          <a className="font-bold text-[#00AA5B]">baca S&amp;K</a>
        </p>
      </section>
    </>
  );
};

DetailsDiscussHeaderComponent.propTypes = {
  discussUserID: PropTypes.string,
  productOwnerId: PropTypes.string,
  created_at: PropTypes.string,
  discus_message: PropTypes.string,
  discussUserName: PropTypes.string,
};

export default DetailsDiscussHeaderComponent;
