import { NavLink } from "react-router-dom";
import styles from "./Button.module.scss";
import classNames from "classnames";

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
      ) : props.type === "submit" ? (
        <button
          disabled={props.isLoading ? true : false}
          type="submit"
          className={classNames(styles.formBtn, styles.btn, {
            [styles.loading]: props.isLoading,
          })}
        >
          <p className={styles.btnText}>{props.btnText}</p>
        </button>
      ) : (
        <button type="button" onClick={props.event} className={styles.btn}>
          <p className={styles.btnText}>{props.btnText}</p>
        </button>
      )}
    </>
  );
};
