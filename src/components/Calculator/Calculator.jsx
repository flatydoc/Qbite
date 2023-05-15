import styles from "./Calculator.module.scss";
import image from "../../assets/images/calculator.svg";
import { Button } from "../ui/Button/Button";

export const Calculator = ({ scrollToForm }) => {
  return (
    <section className={styles.calculator}>
      <img alt="Калькулятор" src={image} className={styles.img} />
      <div className={styles.content}>
        <h4 className={styles.title}>МЫ ПРОТИВ ОНЛАЙН КАЛЬКУЛЯТОРОВ!</h4>
        <p className={styles.desc}>
          Любая цена формируется индивидуально и исходя из потребностей Вашего
          бизнеса. Точные цифры вы получите после бесплатной консультации.
        </p>
        <Button
          type="button"
          event={scrollToForm}
          btnText="ПРОКОНСУЛЬТИРОВАТЬСЯ"
        />
      </div>
    </section>
  );
};
