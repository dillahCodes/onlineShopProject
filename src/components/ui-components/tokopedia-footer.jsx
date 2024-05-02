const TokopediaFooter = () => {
  return (
    <section className="w-full bg-white p-3 pb-[80px] ">
      <h1 className="font-bold font-space-grotesk capitalize">gunakan aplikasi tokopedia</h1>
      <div className="flex mt-2 w-full flex-wrap">
        <div
          className="h-[40px] w-[140px]"
          style={{
            background: `url('https://assets.tokopedia.net/asts/assets-unify/img/icon-download-android.svg')`,
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="h-[40px] w-[140px]"
          style={{
            background: `url('https://assets.tokopedia.net/asts/assets-unify/img/icon-download-ios.svg')`,
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
      <div
        className="w-full h-[40px] mt-2"
        style={{
          background: `url('https://assets.tokopedia.net/asts/assets-unify/img/icon-download-huawei.svg')`,
          backgroundRepeat: "no-repeat",
        }}
      />
    </section>
  );
};

export default TokopediaFooter;
