import styles from "./Main.module.scss";
import { Button } from "../../ui/Button/Button";

export const Main = (props) => {
  return (
    <section className={styles.main}>
      <div className={styles.wrapper}>
        <p className={styles.subtitle}>
          Создаем цифровые решения нацеленные на результат
        </p>
        <h1 className={styles.title}>СТУДИЯ ВЕБ-РАЗРАБОТКИ И МАРКЕТИНГА</h1>
        <div className={styles.btnWrapper}>
          <Button
            type={"button"}
            event={props.scrollToForm}
            btnText={"ЗАКАЗАТЬ ЗВОНОК"}
          />
          <button onClick={props.scrollToServices} className={styles.btn}>
            <p className={styles.btnText}>Наши услуги</p>
            <div className={`${styles.btnIcon} pi pi-arrow-right`}></div>
          </button>
        </div>
      </div>
      <p
        data-text="Enter the web universe"
        className={`${styles.glitch} notranslate`}
      >
        Enter the web universe
      </p>
    </section>
  );
};
