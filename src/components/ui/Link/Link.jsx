import { NavLink } from "react-router-dom";
import styles from "./Link.module.scss";

export const Link = (props) => {
  const customLink = ({ isActive }) =>
    isActive ? styles.link + " " + styles.active : styles.link;
  return (
    <>
      <NavLink className={customLink} to={props.to}>
        <p className={styles.linkText}>{props.linkText}</p>
        <span></span>
      </NavLink>
    </>
  );
};
