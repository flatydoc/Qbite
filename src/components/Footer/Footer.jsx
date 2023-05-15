import { NavLink } from "react-router-dom";
import { Link } from "../ui/Link/Link";

import logo from "../../assets/icons/logo.svg";
import styles from "./Footer.module.scss";
import mhost from "../../assets/icons/mhost.svg";

export const Footer = () => {
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
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.logoWrapper}>
          <NavLink to="/">
            <h2 className={styles.logo}>
              <img className={styles.logoImg} src={logo} alt="Qbite logo" />
              <p className={styles.logoText}>
                <span className="visually-hidden">Q</span>
                <span className="notranslate">BITE</span>
              </p>
            </h2>
          </NavLink>
          <p className={styles.motto}>
            <span style={{ color: "var(--blue)" }}>Создаем</span> цифровые
            <span style={{ color: "var(--blue)" }}> решения</span>
            <br />
            нацеленные на результат
          </p>
        </div>

        <div className={styles.navWrapper}>
          <nav className={styles.nav}>
            {links.map((link, index) => (
              <Link key={index} to={link.to} text={link.text} />
            ))}
          </nav>
          <div className={styles.partners}>
            <p style={{ marginRight: "15px" }}>Официальный партнер</p>
            <a href="https://mhost.by/">
              <img
                className={styles.partnersLogo}
                src={mhost}
                alt="mhost logo"
              />
            </a>
          </div>
          <div className={styles.contacts}>
            <ul className={styles.contactsList}>
              <li className={styles.contactsItem}>
                <a className={styles.contactsLink} href="tel:+48536065365">
                  <i className={`${styles.contactsItemIcon} pi pi-phone`}></i>
                  <span>+375 (25) 111-11-11</span>
                </a>
              </li>
              <li className={styles.contactsItem}>
                <a
                  className={styles.contactsLink}
                  href="mailto:flatydoc@gmail.com"
                >
                  <i
                    className={`${styles.contactsItemIcon} pi pi pi-envelope`}
                  ></i>
                  <span>example@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>
          © 2020
          <NavLink className={styles.link} to="/">
            <span> Qbite </span>
          </NavLink>
          Все права защищены.
        </p>
        <NavLink
          onClick={scrollToTop}
          className={styles.privacyBtn}
          to="privacy-policy"
        >
          Политика конфиденциальности
        </NavLink>
      </div>
    </footer>
  );
};
