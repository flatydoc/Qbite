import styles from "./Slide.module.scss";
import { Button } from "../../../ui/Button/Button";

import image from "../../../../assets/images/development.svg";

export const Development = (props) => {
  return (
    <div className={styles.slide}>
      <img className={styles.img} src={image} alt="Development" />

      <div className={styles.content}>
        <h3 className={styles.title}>Разработка сайтов</h3>
        <p className={styles.subtitle}>
          СОЗДАНИЕ РЕСУРСОВ ДЛЯ БИЗНЕСА, УСЛУГ И РЕКЛАМЫ:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Сайт-визитка –<span className={styles.blue}> от 800 BYN</span>
          </li>
          <li className={styles.listItem}>
            Одностраничный сайт/Landing Page –
            <span className={styles.blue}> от 1000 BYN</span>
          </li>
          <li className={styles.listItem}>
            Интернет-магазин –<span className={styles.blue}> от 3 200 BYN</span>
          </li>

          <li className={styles.listItem}>
            Корпоративный сайт –
            <span className={styles.blue}> от 3 400 BYN</span>
          </li>
        </ul>
        <p className={styles.subtitle}>ЧЕМ БУДЕТ ПОЛЕЗЕН ВАШ САЙТ:</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>Продавать ваши услуги или товар</li>
          <li className={styles.listItem}>
            Информировать или учить вашу аудиторию
          </li>
          <li className={styles.listItem}>
            Развлекать или решать определенную задачу пользователя по запросу в
            интернете
          </li>
        </ul>
        <Button type={"button"} to={"development"} btnText={"ПОДРОБНЕЕ"} />
      </div>
    </div>
  );
};
