import { NavLink } from "react-router-dom";
import { Link } from "../ui/Link/Link";

import logo from "../../assets/icons/logo.svg";
import styles from "./Footer.module.scss";

export const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <img className={styles.logo} src={logo} alt="Quantum logo" />
        <nav className={styles.nav}>
          <Link to={"development"} linkText={"Разработка"} />
          <Link to={"context"} linkText={"Контекстная реклама"} />
          <Link to={"seo"} linkText={"SEO-продвижение"} />
          <Link to={"target"} linkText={"Таргет"} />
          <Link to={"contacts"} linkText={"Контакты"} />
        </nav>
        <button onClick={props.scrollTo} className={styles.btn}>
          <svg
            viewBox="0 0 31 30"
            color="white"
            fill="none"
            className={styles.btnIcon}
          >
            <circle
              cx="15.459"
              cy="15"
              r="14.5"
              transform="rotate(-180 15.459 15)"
              stroke="currentColor"
            ></circle>
            <path
              d="M15.458 21L21.459 15L15.458 9"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M21.459 15.002L9.45898 15.002"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
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
    </div>
  );
};
