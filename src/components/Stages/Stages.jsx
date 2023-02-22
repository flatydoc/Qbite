import styles from "./Stages.module.scss";

export const Stages = (props) => {
  return (
    <section className={styles.stages}>
      <h2 className={styles.title}>{props.state.title}</h2>
      <div className={styles.wrapper}>
        <span className={styles.line}>
          <span style={{ height: `100px` }} className={styles.progress}></span>
        </span>
        {props.state.items.map((item, index) => (
          <div key={index} className={styles.stage}>
            <h3 className={styles.subtitle}>
              {item.id}. {item.subtitle}
            </h3>
            <div className={styles.card}>{item.card}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
