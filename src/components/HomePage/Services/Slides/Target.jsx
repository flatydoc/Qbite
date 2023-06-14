import styles from "./Slide.module.scss";
import { Button } from "../../../ui/Button/Button";
import image from "../../../../assets/images/target.svg";

import { useNavigate } from "react-router-dom";

export const Target = () => {
  let navigate = useNavigate();

  const routeChange = () => {
    navigate("target");

    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className={styles.slide}>
      <img className={styles.img} src={image} alt="#" />

      <div className={styles.content}>
        <h3 className={styles.title}>Реклама в социальных сетях</h3>
        <p className={`${styles.subtitle} ${styles.blue}`}>
          ВКОНТАКТЕ, INSTAGRAM, FACEBOOK
        </p>
        <p className={styles.desc}>
          В ленте Ваших социальных сетей есть реклама товаров и услуг, которыми
          вы интересовались сегодня, вчера, позавчера или еще раньше. Возможно,
          заходили на сайты с телевизорами, а потом эти телевизоры преследуют
          вас везде. Или вы разговаривали с кем-то, а телефон лежал рядом, и
          теперь вы видите товары, о которых говорили совсем недавно. Замечали
          такое? Хотите знать, как это работает и заказать для своего бизнеса?
        </p>

        <Button event={routeChange} btnText="ПОДРОБНЕЕ" />
      </div>
    </div>
  );
};
