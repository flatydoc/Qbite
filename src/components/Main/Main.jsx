import { Button } from "../ui/Button/Button";
import styles from "./Main.module.scss";

export const Main = ({ state, scrollToForm }) => {
  return (
    <section
      className={styles.main}
      style={{
        background: `linear-gradient(
          180deg,
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 0, 0, 0.2) 100%
        ), url(${state.image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className={styles.title}>
        {state.title}
        <br />
        <span className={styles.pink}>ПОД КЛЮЧ</span>
      </h2>
      <p className={styles.subtitle}>Получите индивидуальное предложение</p>
      <Button type="button" event={scrollToForm} btnText="ОБСУДИТЬ ПРОЕКТ" />
    </section>
  );
};
