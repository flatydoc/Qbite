import styles from "./About.module.scss";
import image from "../../../assets/images/rating.svg";

export const About = () => {
  return (
    <section className={styles.about}>
      <h2 className={styles.title}>Почему выбирают нас?</h2>
      <div className={styles.wrapper}>
        <img alt="Почему выбирают нас" src={image} className={styles.img} />
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Мы - не стартап, а уже
            <span className={styles.blue}> работающий бизнес</span>.
          </li>
          <li className={styles.listItem}>
            Мы <span className={styles.blue}>против шаблонных решений</span>!
            Наша команда заинтересована в создании интересных продуктов, чтобы
            подчеркнуть индивидуальность Вашего бренда.
          </li>
          <li className={styles.listItem}>
            <span className={styles.blue}>Гибкая система оплаты</span> с
            разбивкой на этапы. Это удобно, так как не нужно платить сразу за
            весь проект.
          </li>
          <li className={styles.listItem}>
            На всех этапах работы мы оперативно информируем заказчика о ходе
            работ.
          </li>
          <li className={styles.listItem}>
            <span className={styles.blue}>Пожизненная гарантия</span>! Если
            после сдачи проекта на сайте что-то не работает по нашей вине -
            моментально исправим.
          </li>
          <li className={styles.listItem}>
            Над Вашим проектом будут трудиться
            <span className={styles.blue}> опытные разработчики </span> и
            <span className={styles.blue}> эксперты </span>в области маркетинга.
          </li>
        </ul>
      </div>
    </section>
  );
};
