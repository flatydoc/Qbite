import styles from "./Motto.module.scss";

export const Motto = () => {
  return (
    <div className={styles.motto}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          МЫ <span className={styles.blue}>СОЗДАЕМ</span> КАЧЕСТВЕННЫЕ ЦИФРОВЫЕ{" "}
          <span className={styles.blue}>РЕШЕНИЯ</span>
        </h2>
        <p className={styles.subtitle}>
          Идеальная синергия пользовательского опыта, внешнего вида и
          технологий. Мы команда опытных мечтателей и страстных творцов.
        </p>
      </div>
    </div>
  );
};
