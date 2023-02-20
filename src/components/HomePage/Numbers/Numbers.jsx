import styles from "./Numbers.module.scss";

export const Numbers = () => {
  return (
    <section className={styles.numbers}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <p>
            <span className={styles.blue}>12</span>
            опытных разработчиков и креативных дизайнеров
          </p>
        </li>
        <li className={styles.listItem}>
          <p>
            <span className={styles.blue}>3</span>года успешной работы на рынке
            интернет-маркетинга и web-разработки
          </p>
        </li>
        <li className={styles.listItem}>
          <p>
            <span className={styles.blue}>200+</span>реализованных проектов
          </p>
        </li>
        <li className={styles.listItem}>
          <p>
            <span className={styles.blue}>∞</span>
            идей и решений для достижения результата
          </p>
        </li>
      </ul>
    </section>
  );
};
