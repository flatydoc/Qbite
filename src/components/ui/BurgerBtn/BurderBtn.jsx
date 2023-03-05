import classNames from "classnames";
import styles from "./BurgerBtn.module.scss";

export const BurgerBtn = ({ event, modalStatus }) => {
  return (
    <button
      onClick={event}
      className={classNames(styles.burgerBtn, {
        [styles.active]: modalStatus,
      })}
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
};
