import styles from "./Slide.module.scss";
import { Button } from "../../../ui/Button/Button";
import { useNavigate } from "react-router-dom";

import image from "../../../../assets/images/context.svg";

export const Context = () => {
  let navigate = useNavigate();

  const routeChange = () => {
    navigate("context");

    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className={styles.slide}>
      <img className={styles.img} src={image} alt="#" />
      <div className={styles.content}>
        <h3 className={styles.title}>Контекстная реклама</h3>
        <p className={`${styles.subtitle} ${styles.blue}`}>ЯНДЕКС, GOOGLE</p>
        <p className={styles.subtitle}>ЧТО ВАМ ЭТО ДАЕТ:</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Многократное увеличение или старт Ваших продаж в интернете.
          </li>
          <li className={styles.listItem}>
            Прозрачная математика: мы покажем, сколько заработал каждый Ваш
            рекламный рубль.
          </li>
          <li className={styles.listItem}>
            Продажи гарантированы. Профессиональная настройка рекламы, проверка
            спроса на товары/услуги.
          </li>
          <li className={styles.listItem}>
            При высоком среднем чеке<span className={styles.blue}>*</span> на
            товар/услугу, вы окупите расходы на рекламу за несколько продаж.
          </li>
        </ul>
        <p className={styles.footnote}>
          * Средний чек – это средняя стоимость товара/услуги
        </p>

        <Button event={routeChange} btnText="ПОДРОБНЕЕ" />
      </div>
    </div>
  );
};
