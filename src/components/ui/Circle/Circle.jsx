import { CircleMenu, CircleMenuItem } from "react-circular-menu";
import { useState } from "react";
import styles from "./Circle.module.scss";
import classNames from "classnames";

export const Circle = () => {
  const [isActive, setIsActive] = useState(false);

  const activeHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <CircleMenu
      onMenuToggle={() => activeHandler()}
      menuToggleClassName={classNames(styles.circleBtn, {
        [styles.active]: isActive,
      })}
      className={styles.circle}
      startAngle={260}
      rotationAngle={180}
      itemSize={2}
      radius={5}
      rotationAngleInclusive={false}
    >
      <CircleMenuItem className={styles.circleItem} tooltip="Email">
        <div className={`${styles.menu} pi pi-envelope`}></div>
      </CircleMenuItem>
      <CircleMenuItem
        className={styles.circleItem}
        onClick={() => alert("Clicked the item")}
        tooltip="Заказать звонок"
      >
        <div className={`pi pi-phone`}></div>
      </CircleMenuItem>
      <CircleMenuItem
        className={styles.circleItem}
        link={"https://t.me/quantum_tech_chat"}
        tooltip="Telegram"
      >
        <div className={`pi pi-send ${styles.icon}`}></div>
      </CircleMenuItem>
    </CircleMenu>
  );
};
