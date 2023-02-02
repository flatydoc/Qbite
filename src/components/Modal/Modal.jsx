import styles from "./Modal.module.scss";
import { NavLink } from "react-router-dom";

export const Modal = ({ active, setActive }) => {
  return (
    <div
      onClick={() => setActive(false)}
      className={active ? `${styles.modal}  ${styles.active}` : styles.modal}
    >
      <div className={styles.content}>
        <NavLink
          to="development"
          className={`${styles.development} ${styles.link}`}
        >
          <h3 className={styles.title}>РАЗРАБОТКА</h3>
        </NavLink>
        <NavLink to="context" className={`${styles.context} ${styles.link}`}>
          <h3 className={styles.title}>КОНТЕКСТНАЯ РЕКЛАМА</h3>
        </NavLink>
        <NavLink to="seo" className={`${styles.seo} ${styles.link}`}>
          <h3 className={styles.title}>SEO-ПРОДВИЖЕНИЕ</h3>
        </NavLink>
        <NavLink to="target" className={`${styles.target} ${styles.link}`}>
          <h3 className={styles.title}>ТАРГЕТ</h3>
        </NavLink>
        <NavLink to="contacts" className={`${styles.contacts} ${styles.link}`}>
          <h3 className={styles.title}>КОНТАКТЫ</h3>
        </NavLink>
      </div>
    </div>
  );
};
