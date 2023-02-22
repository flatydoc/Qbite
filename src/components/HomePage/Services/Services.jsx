import styles from "./Services.module.scss";
import Slider from "react-slick";

import { Development } from "./Slides/Development";
import { Context } from "./Slides/Context";
import { Seo } from "./Slides/Seo";
import { Target } from "./Slides/Target";

import { useRef, useState } from "react";
import classNames from "classnames";

export const Services = (props) => {
  const [activeIndex, setActiveIndex] = useState(-1);

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

    setActiveIndex(index);
  };

  const links = [
    { id: 1, title: "Разработка сайтов" },
    { id: 2, title: "Контекстная реклама" },
    { id: 3, title: "SEO-продвижение" },
    { id: 4, title: "Реклама в социальных сетях" },
  ];

  return (
    <section ref={props.servicesRef} className={styles.services}>
      <h2 className={styles.title}>НАШИ УСЛУГИ</h2>
      <nav ref={currentRef} className={styles.nav}>
        {links.map((link, index) => (
          <div
            onClick={() => handleOnClick(index)}
            key={index}
            className={classNames(styles.link, {
              [styles.active]: activeIndex === index,
            })}
          >
            <p className={styles.linkTitle}>{link.title}</p>
            <span></span>
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
