import { IoMdSend } from "react-icons/io";
import ButtonComponent from "../ui-components/button-component";
import PropTypes from "prop-types";

import { Input } from "antd";
const { TextArea } = Input;

const DetailsDiscussReplyComponent = ({ onChange, onSend, inputDevaultValue }) => {
  return (
    <section className="w-full fixed bottom-0 max-w-[500px] bg-white  gap-x-2 flex items-center justify-between box-border p-2">
      <div className="w-full rounded-full gap-x-2  border overflow-hidden flex items-center  p-1">
        <img
          src="https://images.tokopedia.net/img/cache/300/tPxBYm/2023/1/20/757f728e-d320-4f75-91ac-cedc5f1edc42.jpg"
          alt="user image"
          className="w-[30px] h-[30px] rounded-full object-cover"
        />
        <TextArea
          onChange={onChange}
          value={inputDevaultValue}
          placeholder="tulis komentarmu..."
          size="small"
          className="border-none  rounded-full  max-h-[30px] flex items-center justify-center focus:outline-none focus:border-none outline-none"
          autoSize
        />
      </div>
      <ButtonComponent
        onClick={onSend}
        className="w-[40px] h-[40px]  bg-[#00AA5B] text-white  text-lg rounded-full flex items-center justify-center"
      >
        <div className="text-lg">
          <IoMdSend />
        </div>
      </ButtonComponent>
    </section>
  );
};

export default DetailsDiscussReplyComponent;

DetailsDiscussReplyComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSend: PropTypes.func.isRequired,
  inputDevaultValue: PropTypes.string.isRequired,
};
