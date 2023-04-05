import styles from "./Scroll.module.scss";

export const Scroll = () => {
  return (
    <div className={styles.scroll}>
      <span className="notranslate">Scroll</span>
      <i className={`${styles.scrollIcon} pi pi-angle-double-down`}></i>
    </div>
  );
};
