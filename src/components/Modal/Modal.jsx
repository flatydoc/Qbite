import classNames from "classnames";
import styles from "./Modal.module.scss";
import { NavLink } from "react-router-dom";

export const Modal = ({ isActive, setIsActive }) => {
  const items = [
    {
      id: 1,
      to: "development",
      title: "РАЗРАБОТКА",
    },
    {
      id: 2,
      to: "context",
      title: "КОНТЕКСТНАЯ РЕКЛАМА",
    },
    { id: 3, to: "seo", title: "SEO-ПРОДВИЖЕНИЕ" },
    { id: 4, to: "target", title: "ТАРГЕТ" },
    { id: 5, to: "contacts", title: "КОНТАКТЫ" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div
      onClick={() => setIsActive(false)}
      className={classNames(styles.modal, {
        [styles.active]: isActive,
      })}
    >
      <div className={styles.content}>
        {items.map((item, index) => (
          <NavLink
            onClick={scrollToTop}
            key={index}
            to={item.to}
            className={`${styles.link} ${styles[item.to]}`}
          >
            <h3 className={styles.title}>{item.title}</h3>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
