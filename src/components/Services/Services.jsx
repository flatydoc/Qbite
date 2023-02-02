import styles from "./Services.module.scss";
import Slider from "react-slick";
import { SampleNextArrow } from "../ui/Arrows/SampleNextArrow";
import { SamplePrevArrow } from "../ui/Arrows/SamplePrevArrow";
import { Development } from "./Slides/Development/Development";
import { Context } from "./Slides/Context/Context";
import { Seo } from "./Slides/Seo/Seo";
import { Target } from "./Slides/Target/Target";

export const Services = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div ref={props.servicesRef} className={styles.services}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>НАШИ УСЛУГИ</h2>
        <Slider {...settings}>
          <Development />
          <Context />
          <Seo />
          <Target />
        </Slider>
      </div>
    </div>
  );
};
