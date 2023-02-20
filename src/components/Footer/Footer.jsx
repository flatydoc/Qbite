import { NavLink } from "react-router-dom";
import { Link } from "../ui/Link/Link";

import logo from "../../assets/icons/logo.svg";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <img className={styles.logo} src={logo} alt="Quantum logo" />
        <nav className={styles.nav}>
          <Link to={"development"} linkText={"Разработка"} />
          <Link to={"context"} linkText={"Контекстная реклама"} />
          <Link to={"seo"} linkText={"SEO-продвижение"} />
          <Link to={"target"} linkText={"Таргет"} />
          <Link to={"contacts"} linkText={"Контакты"} />
        </nav>
        <div>123</div>
      </div>
      <div className={styles.copyright}>
        <p>
          © 2020
          <NavLink className={styles.link} to="/">
            <span> Quantum </span>
          </NavLink>
          Все права защищены.
        </p>
        <NavLink className={styles.privacyBtn} to="privacy-policy">
          Политика конфиденциальности
        </NavLink>
      </div>
    </footer>
  );
};
