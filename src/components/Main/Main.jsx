import styles from "./Main.module.scss";
import { Button } from "../ui/Button/Button";

export const Main = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <p className={styles.subtitle}>
          Создаем цифровые решения нацеленные на результат
        </p>
        <h1 className={styles.title}>СТУДИЯ ВЕБ-РАЗРАБОТКИ И МАРКЕТИНГА</h1>
        <div className={styles.btnWrapper}>
          <Button to={"contacts"} btnText={"ЗАКАЗАТЬ ЗВОНОК"} />
          <button onClick={props.scrollTo} className={styles.btn}>
            <p className={styles.btnText}>Наши услуги</p>
            <svg
              className={styles.btnIcon}
              viewBox="0 0 31 30"
              color="white"
              fill="none"
            >
              <circle
                cx="15.459"
                cy="15"
                r="14.5"
                transform="rotate(-180 15.459 15)"
                stroke="currentColor"
              ></circle>
              <path
                d="M15.458 21L21.459 15L15.458 9"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M21.459 15.002L9.45898 15.002"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <p
        data-text="Enter the web universe"
        className={`${styles.glitch} notranslate`}
      >
        Enter the web universe
      </p>
    </div>
  );
};
