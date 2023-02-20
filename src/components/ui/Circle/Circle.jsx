import { CircleMenu, CircleMenuItem } from "react-circular-menu";

import styles from "./Circle.module.scss";

export const Circle = () => {
  return (
    <CircleMenu
      menuToggleClassName={styles.circleBtn}
      className={styles.circle}
      startAngle={270}
      rotationAngle={180}
      itemSize={2}
      radius={4}
      rotationAngleInclusive={false}
    >
      <CircleMenuItem className={styles.circleItem} tooltip="Email">
        <div className={` ${styles.menu} pi pi-envelope`}></div>
      </CircleMenuItem>
      <CircleMenuItem
        className={styles.circleItem}
        onClick={() => alert("Clicked the item")}
        tooltip="Заказать звонок"
      >
        <div className={`pi pi-phone`}></div>
      </CircleMenuItem>
      <CircleMenuItem className={styles.circleItem} tooltip="Telegram">
        <div className={` pi pi-send`}></div>
      </CircleMenuItem>
    </CircleMenu>
  );
};
