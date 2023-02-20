import styles from "./Main.module.scss";

export const Main = (props) => {
  return (
    <section
      className={styles.main}
      style={{
        background: `linear-gradient(
          180deg,
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 0, 0, 0.2) 100%
        ), url(${props.state.image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className={styles.title}>
        {props.state.title}
        <br />
        <span className={styles.pink}>ПОД КЛЮЧ</span>
      </h2>
      <p className={styles.subtitle}>
        Получите индивидуальное предложение
        <i className={`${styles.icon} pi pi-angle-double-right`}></i>
      </p>
      <button onClick={props.scrollToForm} className={styles.btn}>
        <p className={styles.btnText}>ОБСУДИТЬ ПРОЕКТ</p>
      </button>
    </section>
  );
};
