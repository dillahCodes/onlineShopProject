import HonePageMobile from "../components/page-home-components/home-page-mobile";
import TokopediaFooter from "../components/ui-components/tokopedia-footer";

const HomePage = () => {
  return (
    <div className={`h-screen "p-5"`}>
      <HonePageMobile />
      <TokopediaFooter />
    </div>
  );
};

export default HomePage;
