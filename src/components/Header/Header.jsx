import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import styles from "./Header.module.scss";
import { Link } from "../ui/Link/Link";
import { useState, useEffect } from "react";
import { Modal } from "../Modal/Modal";
import { BurgerBtn } from "../ui/BurgerBtn/BurderBtn";
import classNames from "classnames";

export const Header = () => {
  const [modalActive, setModalActive] = useState(false);
  const [scroll, setScroll] = useState(0);

  const modalActiveHandler = () => {
    setModalActive(!modalActive);
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <header
        className={classNames(styles.header, {
          [styles.scrolled]: scroll > 50,
        })}
        // className={styles.header}
      >
        <NavLink to="/" onClick={scrollToTop}>
          <h2 className={styles.logo}>
            <img className={styles.logoImg} src={logo} alt="Quantum logo" />
            <p className={styles.logoText}>
              <span className="visually-hidden">Q</span>
              <span className="notranslate">AUNTUM</span>
            </p>
          </h2>
        </NavLink>
        <nav className={styles.nav}>
          {links.map((link, index) => (
            <Link key={index} to={link.to} text={link.text} />
          ))}
        </nav>
        <BurgerBtn
          scrolled={scroll > 50 ? true : false}
          event={modalActiveHandler}
          modalStatus={modalActive}
        />
      </header>
      <Modal isActive={modalActive} setIsActive={setModalActive} />
    </>
  );
};
