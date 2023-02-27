import styles from "./ErrorPage.module.scss";
import { useState, useRef } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/Button/Button";

import { useDocumentTitle } from "../../core/hooks/useDocumentTitle";

export const ErrorPage = () => {
  useDocumentTitle("Quantum | 404");

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
        mass: 0.1,
      },
    },
    btn: {
      x: mouseXPosition,
      y: mouseYPosition,

      boxShadow: "0px 0px 80px 50px rgba(5, 217, 232, 0.4)",

      transition: {
        type: "spring",
        mass: 0.1,
      },
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  const btnEnter = () => {
    setCursorVariant("btn");
  };

  const btnLeave = () => {
    setCursorVariant("default");
  };

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
        <div onMouseEnter={btnEnter} onMouseLeave={btnLeave}>
          <Button type="link" to="/" btnText="НА ГЛАВНУЮ" />
        </div>
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
