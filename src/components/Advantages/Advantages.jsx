import styles from "./Advantages.module.scss";

export const Advantages = ({ state }) => {
  return (
    <section className={styles.advantages}>
      <div className={styles.headBlock}>
        <h3 className={styles.title}>
          <span className={styles.blue}>{state.items.length}</span>
          <br />
          {state.title}
        </h3>
        <p className={styles.subtitle}>{state.subtitle}</p>
      </div>
      <div className={styles.wrapper}>
        {state.items.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.content}>
              <h4 className={styles.cardTitle}>
                <span className={styles.cardNumber}>{item.id}</span>
                {item.title}
              </h4>
              <p className={styles.cardSubtitle}>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
