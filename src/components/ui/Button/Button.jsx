import { NavLink } from "react-router-dom";
import styles from "./Button.module.scss";
import classNames from "classnames";

export const Button = ({ to, type, isLoading, btnText, event }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      {type === "link" ? (
        <NavLink onClick={scrollToTop} className={styles.btn} to={to}>
          <p className={styles.btnText}>{btnText}</p>
        </NavLink>
      ) : type === "submit" ? (
        <button
          disabled={isLoading ? true : false}
          type="submit"
          className={classNames(styles.btn, styles.formBtn, {
            [styles.loading]: isLoading,
          })}
        >
          <p className={styles.btnText}>{btnText}</p>
        </button>
      ) : (
        <button type="button" onClick={event} className={styles.btn}>
          <p className={styles.btnText}>{btnText}</p>
        </button>
      )}
    </>
  );
};
