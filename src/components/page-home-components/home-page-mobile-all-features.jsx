import homePageFeatures1 from "../../assets/home-page/home-page-features1.png";
import homePageFeatures2 from "../../assets/home-page/home-page-features2.png";
import homePageFeatures3 from "../../assets/home-page/home-page-features3.png";
import homePageFeatures4 from "../../assets/home-page/home-page-features4.png";
import homePageFeatures5 from "../../assets/home-page/home-page-features5.png";
import homePageFeatures6 from "../../assets/home-page/home-page-features6.png";
import homePageFeatures7 from "../../assets/home-page/home-page-features7.png";
import homePageFeatures8 from "../../assets/home-page/home-page-features8.png";
import homePageFeatures9 from "../../assets/home-page/home-page-features9.png";
import homePageFeatures10 from "../../assets/home-page/home-page-features10.png";
import homePageFeatures11 from "../../assets/home-page/home-page-features11.png";
import homePageFeatures12 from "../../assets/home-page/home-page-features12.png";
import homePageFeatures13 from "../../assets/home-page/home-page-features13.png";
import homePageFeatures14 from "../../assets/home-page/home-page-features14.png";
import homePageFeatures15 from "../../assets/home-page/home-page-features15.png";
import homePageFeatures16 from "../../assets/home-page/home-page-features16.png";
import homePageFeatures17 from "../../assets/home-page/home-page-features17.png";
import homePageFeatures18 from "../../assets/home-page/home-page-features18.png";

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const homePageAllFeaturesList = [
  {
    id: 1,
    image: homePageFeatures1,
    title: "Promo lebaran",
  },
  {
    id: 2,
    image: homePageFeatures2,
    title: "Promo hari ini",
  },
  {
    id: 3,
    image: homePageFeatures3,
    title: "Top-Up & tagihan",
  },
  {
    id: 4,
    image: homePageFeatures4,
    title: "beli lokal",
  },
  {
    id: 5,
    image: homePageFeatures5,
    title: "kirim THR",
  },
  {
    id: 6,
    image: homePageFeatures6,
    title: "Keuangan",
  },
  {
    id: 7,
    image: homePageFeatures7,
    title: "Tokopedia Seru",
  },
  {
    id: 8,
    image: homePageFeatures8,
    title: "Live Shoopping",
  },
  {
    id: 9,
    image: homePageFeatures9,
    title: "Olahraga",
  },
  {
    id: 10,
    image: homePageFeatures10,
    title: "Tiket & Hiburan",
  },
  {
    id: 11,
    image: homePageFeatures11,
    title: "Tokopedia NOW!",
  },
  {
    id: 12,
    image: homePageFeatures12,
    title: "Fashion",
  },
  {
    id: 13,
    image: homePageFeatures13,
    title: "Bayar di Tempat",
  },
  {
    id: 14,
    image: homePageFeatures14,
    title: "Tokpedia Farma",
  },
  {
    id: 15,
    image: homePageFeatures15,
    title: "Elektronik",
  },
  {
    id: 16,
    image: homePageFeatures16,
    title: "Buku",
  },
  {
    id: 17,
    image: homePageFeatures17,
    title: "Mumpung Murah",
  },
  {
    id: 18,
    image: homePageFeatures18,
    title: "Film & Musik",
  },
];

const HomePageMobileAllFeatures = () => {
  const navigate = useNavigate();
  return (
    <div className="box-border flex items-start no-scrollbar w-full gap-[10px] flex-col flex-wrap  justify-between leading-[16px] max-h-[250px] overflow-x-auto overflow-y-hidden px-4 pb-3 pt-2">
      {homePageAllFeaturesList.map((item) => (
        <HomePageFeaturesButton
          key={item.id}
          image={item.image}
          title={item.title}
          onClick={() => navigate(`/coming-soon`)}
        />
      ))}
    </div>
  );
};

export default HomePageMobileAllFeatures;

const HomePageFeaturesButton = ({ image, title, ...props }) => {
  return (
    <div
      {...props}
      className="h-[90px] mb-5 font-medium font-space-grotesk max-w-[60px] flex flex-col items-center gap-2"
    >
      <img
        src={image}
        loading="lazy"
        className="object-cover w-16 h-16 rounded-full"
        alt={title}
      />
      <p className="text-xs leading-tight text-center">{title}</p>
    </div>
  );
};

HomePageFeaturesButton.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};
