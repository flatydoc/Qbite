import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import styles from "./Header.module.scss";
import { Link } from "../ui/Link/Link";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { BurgerBtn } from "../ui/BurgerBtn/BurderBtn";

export const Header = () => {
  const [modalActive, setModalActive] = useState(false);

  const modalActiveHandler = () => {
    setModalActive(!modalActive);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const links = [
    { to: "development", text: "Разработка" },
    { to: "context", text: "Контекстная реклама" },
    { to: "seo", text: "SEO-продвижение" },
    { to: "target", text: "Таргет" },
    { to: "contacts", text: "Контакты" },
  ];

  return (
    <>
      <header className={styles.header}>
        <NavLink to="/" onClick={scrollToTop}>
          <h2 className={styles.logo}>
            <img className={styles.logoImg} src={logo} alt="Qbite logo" />
            <p className={styles.logoText}>
              <span className="visually-hidden">Q</span>
              <span className="notranslate">BITE</span>
            </p>
          </h2>
        </NavLink>
        <nav className={styles.nav}>
          {links.map((link, index) => (
            <Link key={index} to={link.to} text={link.text} />
          ))}
        </nav>
        <BurgerBtn event={modalActiveHandler} modalStatus={modalActive} />
      </header>
      <Modal isActive={modalActive} setIsActive={setModalActive} />
    </>
  );
};
