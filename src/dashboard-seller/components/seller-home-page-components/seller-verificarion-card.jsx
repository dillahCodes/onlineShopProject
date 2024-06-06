import ButtonComponent from "../../../components/ui-components/button-component";

const SellerVerificationCard = () => {
  return (
    <div className="w-full mt-3 bg-white p-3 rounded-md font-space-grotesk flex justify-between items-center gap-x-3">
      <img src="https://images.tokopedia.net/img/seller_home/kyc_ann.png" alt="seller verification image ilustration" className="w-[80px]" />
      <div className="flex flex-col">
        <p className="font-bold">Verifikasi datamu dulu, yuk</p>
        <p className="text-sm">Regular Merchant akan jadi Power Merchant. Agar tetap bisa dapat pesanan baru, verifikasi sekarang yuk!</p>
      </div>
      <ButtonComponent type={"primary"} className={"font-space-grotesk"}>
        Mulai Verifikasi
      </ButtonComponent>
    </div>
  );
};

export default SellerVerificationCard;
