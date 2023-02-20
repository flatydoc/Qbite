import { NavLink } from "react-router-dom";
import styles from "./Button.module.scss";

export const Button = (props) => {
  const scroll = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      <NavLink onClick={scroll} className={styles.btn} to={props.to}>
        <p className={styles.btnText}>{props.btnText}</p>
      </NavLink>
    </>
  );
};
