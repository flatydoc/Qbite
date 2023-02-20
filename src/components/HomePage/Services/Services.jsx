import styles from "./Services.module.scss";
import Slider from "react-slick";

import { Development } from "./Slides/Development/Development";
import { Context } from "./Slides/Context/Context";
import { Seo } from "./Slides/Seo/Seo";
import { Target } from "./Slides/Target/Target";

import { useRef } from "react";

import img from "../../../assets/icons/logo.svg";

export const Services = (props) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    adaptiveHeight: true,
  };

  const sliderRef = useRef();
  const currentRef = useRef();

  const handleOnClick = (index) => {
    sliderRef.current.slickGoTo(index);
    currentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { id: 1, title: "Разработка сайтов", img },
    { id: 2, title: "Контекстная реклама", img },
    { id: 3, title: "SEO-продвижение", img },
    { id: 4, title: "Реклама в социальных сетях", img },
  ];

  return (
    <section ref={props.servicesRef} className={styles.services}>
      <h2 className={styles.title}>НАШИ УСЛУГИ</h2>
      <nav ref={currentRef} className={styles.nav}>
        {links.map((link, index) => (
          <div
            onClick={() => handleOnClick(index)}
            key={index}
            className={styles.link}
          >
            <img className={styles.img} src={link.img} alt={link.title} />
            <p className={styles.linkTitle}>{link.title}</p>
          </div>
        ))}
      </nav>
      <div ref={currentRef}></div>
      <Slider {...settings} ref={sliderRef}>
        <Development />
        <Context />
        <Seo />
        <Target />
      </Slider>
    </section>
  );
};
