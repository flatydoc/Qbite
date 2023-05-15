import styles from "./Reviews.module.scss";
import { Rating } from "primereact/rating";
import Slider from "react-slick";
import male from "../../../assets/icons/male.svg";
import female from "../../../assets/icons/female.svg";

export const Reviews = ({ state }) => {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "10px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 2000,
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.reviews}>
      <h3 className={styles.title}>Отзывы наших клиентов</h3>
      <Slider {...settings}>
        {state.map((review, index) => (
          <div className={styles.review} key={index}>
            <div className={styles.reviewHeader}>
              <img
                className={styles.img}
                src={review.sex === "male" ? male : female}
                alt="#"
              />
              <div>
                <p className={styles.author}>{review.author}</p>
                <Rating value={review.stars} readOnly cancel={false} />
              </div>
            </div>
            <p className={styles.text}>{review.text}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};
