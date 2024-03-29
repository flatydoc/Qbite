import styles from "./Promotion.module.scss";
import image from "../../../assets/images/promotion.svg";
import { Button } from "../../ui/Button/Button";
export const Promotion = ({ scrollToForm }) => {
  return (
    <section className={styles.promotion}>
      <div className={styles.content}>
        <h3 className={styles.title}>
          У ВАС ЕСТЬ ЧУВСТВО: “ЧТО-ТО РАБОТАЕТ НЕ ТАК”? -
          <span className={styles.pink}> НАЙДЕМ РЕШЕНИЕ!</span>
        </h3>
        <p className={styles.desc}>
          Ваш сайт, сообщество в социальных сетях или рекламная кампания не
          приносят ожидаемой прибыли? Вы вкладываете деньги, но они даже не
          окупаются?
        </p>
        <p
          className={styles.desc}
          style={{
            textTransform: "uppercase",
            color: "var(--blue)",
            opacity: "0.8",
          }}
        >
          Доверьте свой проект профессионалам!
        </p>
        <p className={styles.desc}>
          Оставьте заявку, и наш специалист поможет определить проблему
          абсолютно бесплатно.
        </p>
        <Button type="button" event={scrollToForm} btnText="ОСТАВИТЬ ЗАЯВКУ" />
      </div>
      <img className={styles.img} src={image} alt="#" />
    </section>
  );
};
