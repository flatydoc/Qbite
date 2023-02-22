import classNames from "classnames";
import styles from "./BurgerBtn.module.scss";

export const BurgerBtn = (props) => {
  return (
    <button
      onClick={props.event}
      className={classNames(styles.burgerBtn, {
        [styles.active]: props.modalStatus,
      })}
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
};
