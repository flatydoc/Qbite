import styles from "./Info.module.scss";

export const Info = ({ state }) => {
  return (
    <section className={styles.info}>
      <h3 className={styles.title}>{state.title}</h3>
      <p className={styles.content}>{state.content}</p>
    </section>
  );
};
