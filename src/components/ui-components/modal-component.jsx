import { Modal } from "antd";
import PropTypes from "prop-types";

const ModalComponent = ({
  isModalOpen,
  handleCancel,
  children,
  modalTitle,
  modalFooter,
  className,
  closeIcon,
  handleOk,
  okText,
  cancelText,
}) => {
  return (
    <Modal
      okText={okText}
      cancelText={cancelText}
      onOk={handleOk}
      closeIcon={closeIcon || null}
      title={modalTitle}
      className={`${className}`}
      footer={modalFooter}
      open={isModalOpen}
      onCancel={handleCancel}
    >
      {children}
    </Modal>
  );
};

export default ModalComponent;

ModalComponent.propTypes = {
  isModalOpen: PropTypes.bool,
  handleCancel: PropTypes.func,
  children: PropTypes.node,
  modalTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  modalFooter: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
  closeIcon: PropTypes.node,
  handleOk: PropTypes.func,
  okText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  cancelText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
