import { NavLink } from "react-router-dom";
import styles from "./Button.module.scss";

export const Button = (props) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      {props.to ? (
        <NavLink onClick={scrollToTop} className={styles.btn} to={props.to}>
          <p className={styles.btnText}>{props.btnText}</p>
        </NavLink>
      ) : (
        <button onClick={props.event} className={styles.btn}>
          <p className={styles.btnText}>{props.btnText}</p>
        </button>
      )}
    </>
  );
};
