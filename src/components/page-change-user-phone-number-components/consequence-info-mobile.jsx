import ConsequenceInfoCard from "./consequence-info-card";

const ConsequenceInfoMobile = () => {
  return (
    <section className="w-full p-3">
      <h3 className="text-black my-2 font-bold text-lg capitalize font-space-grotesk">
        yang akan terjadi jika kamu ubah nomor hp 👇
      </h3>
      <div className="w-full">
        <ConsequenceInfoCard
          className="mt-3"
          title="akun kamu enggak akan kesambung lagi"
          mainIconTitle="Gopay"
          detailsText="Cara sambungin akun di atas ke Tokopedia lagi: Update nomor HP di aplikasi terkait > buka Tokopedia > sambungin ulang akun kamu."
          iconSrc="https://images.tokopedia.net/img/user/asset/icon/gopay.png"
        />
        <ConsequenceInfoCard
          className="mt-3"
          title="danamu di tokopedia akan ditahan sementara"
          mainIconTitle="saldo tokopedia"
          subIconTitle="ditahan 24 jam"
          detailsText="Demi keamanan akun, danamu baru bisa ditarik beberapa saat setelah nomor HP diubah."
          iconSrc="https://images.tokopedia.net/img/user/asset/icon/saldo.png"
        />
      </div>
    </section>
  );
};

export default ConsequenceInfoMobile;
