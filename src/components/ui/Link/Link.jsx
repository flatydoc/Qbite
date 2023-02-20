import { NavLink } from "react-router-dom";
import styles from "./Link.module.scss";

export const Link = (props) => {
  const scroll = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const customLink = ({ isActive }) =>
    isActive ? styles.link + " " + styles.active : styles.link;

  return (
    <>
      <NavLink onClick={scroll} className={customLink} to={props.to}>
        <p className={styles.linkText}>{props.linkText}</p>
        <span></span>
      </NavLink>
    </>
  );
};
