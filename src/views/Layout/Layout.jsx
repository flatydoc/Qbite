import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import styles from "./Layout.module.scss";
import { Footer } from "../../components/Footer/Footer";
import { useRef } from "react";

export const Layout = () => {
  const headRef = useRef();

  const scrollTo = () => {
    headRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.layout}>
      <Header headRef={headRef} />
      <Outlet />
      <Footer scrollTo={scrollTo} />
    </div>
  );
};
