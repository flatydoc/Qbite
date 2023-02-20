import styles from "./Info.module.scss";

export const Info = (props) => {
  return (
    <section className={styles.info}>
      <h3 className={styles.title}>{props.state.title}</h3>
      <p className={styles.content}>{props.state.content}</p>
    </section>
  );
};
