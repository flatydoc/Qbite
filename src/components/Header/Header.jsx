import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import styles from "./Header.module.scss";
import { Link } from "../ui/Link/Link";
import { useState } from "react";
import { Modal } from "../Modal/Modal";

export const Header = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <header className={styles.header}>
      <NavLink to="/">
        <h2 className={styles.logo}>
          <img className={styles.logoImg} src={logo} alt="Quantum logo" />
          <p className={styles.logoText}>
            <span className="visually-hidden">Q</span>
            <span className="notranslate">AUNTUM</span>
          </p>
        </h2>
      </NavLink>
      <nav className={styles.nav}>
        <Link to={"development"} linkText={"Разработка"} />
        <Link to={"context"} linkText={"Контекстная реклама"} />
        <Link to={"seo"} linkText={"SEO-продвижение"} />
        <Link to={"target"} linkText={"Таргет"} />
        <Link to={"contacts"} linkText={"Контакты"} />
      </nav>
      <button
        onClick={() => setModalActive(true)}
        className={
          modalActive
            ? `${styles.burgerBtn}  ${styles.active}`
            : styles.burgerBtn
        }
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
      <Modal active={modalActive} setActive={setModalActive} />
    </header>
  );
};
