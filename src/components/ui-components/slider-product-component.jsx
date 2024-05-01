import { Skeleton } from "antd";
import ButtonComponent from "./button-component";
import PropTypes from "prop-types";
import truncateString from "../../utils/truncate-string";
import formatCurrencyToIDR from "../../utils/format-currency";
import { useNavigate } from "react-router-dom";
import { TiStarFullOutline } from "react-icons/ti";
import productSoldCountFormatter from "../../utils/product-sold-count-formatter";

const SliderProductComponent = ({ dataProduct, className, title }) => {
  const navigate = useNavigate();

  return (
    <section className={className}>
      <section className="flex items-center  justify-between mb-3">
        {dataProduct ? (
          <h1 className="text-base capitalize font-bold font-space-grotesk">{title}</h1>
        ) : (
          <Skeleton.Input size="small" className="w-[60%] h-4" active={true} />
        )}
        {dataProduct ? (
          <ButtonComponent className="p-0  m-0 shadow-none border-none text-[#00AA5B] font-space-grotesk capitalize font-bold h-fit">
            lihat semua
          </ButtonComponent>
        ) : (
          <Skeleton.Input size="small" className=" ml-auto h-4" active={true} />
        )}
      </section>
      <div className="flex gap-x-3 overflow-x-auto no-scrollbar">
        {dataProduct
          ? dataProduct.map((item, index) => (
              <section
                key={index}
                className="max-h-[240px] max-w-[180px] overflow-hidden min-w-[160px]  bg-white rounded-md "
                onClick={() => {
                  navigate(`/product/${item.product_id}`);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                <img src={item.images[0].img_url} alt="" className="w-full h-[140px]" />
                <div className="w-full p-1">
                  <h1 className="font-[500]">{truncateString(item?.name, 17)}</h1>
                  <span className="font-bold text-lg">{formatCurrencyToIDR(item?.price)}</span>
                </div>
                <div className="w-full flex items-center gap-x-1 text-[#aab4c8]">
                  <div className="text-[#FFC400]">
                    <TiStarFullOutline />
                  </div>
                  <span>0.0</span>
                  <span className="w-1 h-1 rounded-full block bg-[#aab4c8]"></span>
                  <span>{productSoldCountFormatter(0)} terjual</span>
                </div>
                <div className="w-full"></div>
              </section>
            ))
          : Array(5)
              .fill()
              .map((_, index) => (
                <section key={index} className="h-[217px] max-w-[180px] min-w-[160px]  bg-white rounded-md ">
                  <Skeleton.Image className="w-full h-[140px]" active />
                  <div className="w-full p-1">
                    <section className="w-[60px] overflow-hidden h-[10px] rounded-md mt-2">
                      <Skeleton.Input className="w-full rounded-none h-full" active />
                    </section>
                    <section className="w-full overflow-hidden h-[15px] rounded-md mt-2">
                      <Skeleton.Input className="w-full rounded-none h-full" active />
                    </section>
                    <section className="w-[90px] overflow-hidden h-[10px] rounded-md mt-2">
                      <Skeleton.Input className="w-full rounded-none h-full" active />
                    </section>
                  </div>
                </section>
              ))}
      </div>
    </section>
  );
};

export default SliderProductComponent;

SliderProductComponent.propTypes = {
  dataProduct: PropTypes.array,
  className: PropTypes.string,
  title: PropTypes.string,
};
