import "./residence.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { data } from "../../utils/Carasoul";
import { sliderSetting } from "../../utils/Common";

const Residence = () => {
  return (
    <section className="residence-wrapper">
      <div className="paddings innerWidth residence-container">

        {/* heading */}
        <div className="residence-heading flexColStart paddings ">
          <span className="orangeText">best choice</span>
          <span className="primaryText ">popular residence</span>
        </div>

        {/* Carousel Start */}
        <Swiper {...sliderSetting}>
          <SliderButton />
          {
          data?.map(({ name, price, detail, image }, i) => {
            return (
              <SwiperSlide key={i}>
                <div className=" flexColStart  residence-card">
                  <img src={image} alt={name} />

                  <span className="secondaryText residence-price">
                    <span style={{ color: "orange" }}>$</span>
                    <span>{price}</span>
                  </span>

                  <span className="primaryText residence-name">{name}</span>

                  <span className="secondaryText residence-detail">
                    {detail}
                  </span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Residence;

const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <div className=" flexCenter residence-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
