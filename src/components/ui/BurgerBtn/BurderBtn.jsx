import classNames from "classnames";
import styles from "./BurgerBtn.module.scss";

export const BurgerBtn = ({ event, modalStatus, scrolled }) => {
  return (
    <button
      onClick={event}
      className={classNames(
        styles.burgerBtn,
        {
          [styles.active]: modalStatus,
        },
        { [styles.scrolled]: scrolled }
      )}
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
};
