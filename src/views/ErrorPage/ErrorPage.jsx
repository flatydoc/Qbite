import styles from "./ErrorPage.module.scss";
import { useState, useRef } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/Button/Button";

export const ErrorPage = () => {
  const [cursorVariant, setCursorVariant] = useState("default");

  const ref = useRef(null);

  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }

  const variants = {
    default: {
      x: mouseXPosition,
      y: mouseYPosition,

      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    btn: {
      x: mouseXPosition,
      y: mouseYPosition,
      boxShadow: "none",
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  //   const btnEnter = () => {
  //     setCursorVariant("btn");
  //   };

  //   const btnLeave = () => {
  //     setCursorVariant("default");
  //   };

  return (
    <div className={styles.errorPage} ref={ref}>
      <div className="notranslate">
        <p className={styles.oops}>Oops!</p>
        <p className={styles.error}>
          <span className={styles.glitch} data-text="404">
            404
          </span>
          Page not found
        </p>
        <Button to={"/"} btnText={"НА ГЛАВНУЮ"} />
      </div>
      <motion.div
        className={styles.cursor}
        variants={variants}
        animate={cursorVariant}
        transition={spring}
      />
    </div>
  );
};
