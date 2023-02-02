import styles from "./Context.module.scss";
import { Button } from "../../../ui/Button/Button";

export const Context = () => {
  return (
    <div className={styles.context}>
      <img
        className={styles.img}
        src={require("../../../../assets/images/context.jpg")}
      />

      <div className={styles.content}>
        <h3 className={styles.title}>Контекстная реклама</h3>
        <p className={`${styles.subtitle} ${styles.blue}`}>ЯНДЕКС, GOOGLE</p>
        <p className={styles.subtitle}>
          НАШИ СПЕЦИАЛИСТЫ НАСТРАИВАЮТ РЕКЛАМУ ДЛЯ ТАКИХ ПРОЕКТОВ:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>Интернет-магазин</li>
          <li className={styles.listItem}>Сайт товара/услуги</li>
          <li className={styles.listItem}>
            Сайт для продажи обучающих курсов и т.п.
          </li>
        </ul>
        <p className={styles.subtitle}>ЧТО ВАМ ЭТО ДАЕТ:</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Многократное увеличение или старт ваших продаж в интернете.
          </li>
          <li className={styles.listItem}>
            Прозрачная математика: мы покажем, сколько заработал каждый ваш
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
          *Средний чек – это средняя стоимость товара/услуги
        </p>
        <Button to={"context"} btnText={"ПОДРОБНЕЕ"} />
      </div>
    </div>
  );
};
