import { NavLink } from "react-router-dom";
import styles from "./Button.module.scss";

export const Button = (props) => {
  return (
    <>
      <NavLink className={styles.btn} to={props.to}>
        <p className={styles.btnText}>{props.btnText}</p>
      </NavLink>
    </>
  );
};
