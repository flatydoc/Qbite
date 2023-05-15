import styles from "./Slide.module.scss";
import { Button } from "../../../ui/Button/Button";

import image from "../../../../assets/images/seo.svg";
import { useNavigate } from "react-router-dom";

export const Seo = () => {
  let navigate = useNavigate();

  const routeChange = () => {
    navigate("seo");

    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className={styles.slide}>
      <img className={styles.img} src={image} alt="SEO" />

      <div className={styles.content}>
        <h3 className={styles.title}>SEO-продвижение</h3>
        <p className={styles.subtitle}>СТОИМОСТЬ SEO-ПРОДВИЖЕНИЯ:</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Комплексное SEO-продвижение –
            <span className={styles.blue}> от 450 BYN</span>
          </li>
          <li className={styles.listItem}>
            Подготовка под SEO-оптимизацию –
            <span className={styles.blue}> от 400 BYN</span>
          </li>
          <li className={styles.listItem}>
            SEO-аудит –<span className={styles.blue}> от 300 BYN</span>
          </li>
        </ul>
        <p className={styles.subtitle}>ЧТО ТАКОЕ ОПТИМИЗАЦИЯ САЙТА ИЛИ SEO?</p>
        <p className={styles.desc}>
          SEO-продвижение ― это работа над тем, чтобы Ваш сайт показывали Яндекс
          и Google по запросу пользователей. Например, вы предлагаете ремонт
          квартир, и Вам нужны те люди, которые ищут услугу в поисковике. Чем
          выше в выдаче по этому запросу вы будете, тем с большей вероятностью
          человек перейдет на Ваш сайт. То есть больше шансов получить заявку,
          звонок, запрос на просчет. SEO делает короче путь от поиска
          услуги/товара в поисковике до нажатия кнопки «Оставить заявку», чтобы
          Ваш бизнес был успешнее.
        </p>

        <Button event={routeChange} btnText="ПОДРОБНЕЕ" />
      </div>
    </div>
  );
};
