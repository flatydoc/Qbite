import { NavLink } from "react-router-dom";
import styles from "./Link.module.scss";

export const Link = ({ to, text }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const customLink = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <>
      <NavLink onClick={scrollToTop} className={customLink} to={to}>
        <p className={styles.linkText}>{text}</p>
        <span></span>
      </NavLink>
    </>
  );
};
