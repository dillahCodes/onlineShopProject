import ButtonComponent from "../components/ui-components/button-component";

const ComingSoonPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-2xl px-4 font-space-grotesk">
          <h1 className="mb-8 text-4xl font-bold text-center text-gray-900 dark:text-white">
            Coming Soon!
          </h1>
          <p className="mb-12 text-lg text-center text-gray-600 dark:text-gray-300 font-space-grotesk">
            Our website is under construction. We&apos;ll be back soon!
          </p>
          <form className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <input
              className="w-full px-4 py-2 text-gray-800 bg-white border border-gray-200 md:w-80 dark:text-white dark:border-gray-600 dark:bg-gray-700"
              type="email"
              placeholder="Enter your email address"
            />
            <ButtonComponent
              type="primary"
              className={"capitalize font-space-grotesk "}
              size="large"
            >
              Notify Me
            </ButtonComponent>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
