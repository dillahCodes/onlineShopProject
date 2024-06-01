import ButtonComponent from "../ui-components/button-component";

const BottomButtonSelectAddressComponent = ({ ...props }) => {
  return (
    <div className="fixed bg-white bottom-0 border-t p-2 w-full overflow-hidden z-[2] max-w-[500px]">
      <ButtonComponent disabled type="primary" className="w-full capitalize font-bold font-space-grotesk" {...props}>
        pilih alamat
      </ButtonComponent>
    </div>
  );
};

export default BottomButtonSelectAddressComponent;
