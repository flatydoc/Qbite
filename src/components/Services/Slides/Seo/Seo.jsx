import styles from "./Seo.module.scss";
import { Button } from "../../../ui/Button/Button";

export const Seo = () => {
  return (
    <div className={styles.seo}>
      <img
        className={styles.img}
        src={require("../../../../assets/images/seo.jpg")}
      />

      <div className={styles.content}>
        <h3 className={styles.title}>SEO-продвижение</h3>
        <p className={styles.subtitle}>СТОИМОСТЬ SEO-ПРОДВИЖЕНИЯ:</p>
        <ul className={styles.list}>
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
          SEO-продвижение ― это работа над тем, чтобы ваш сайт показывали Яндекс
          и Google по запросу пользователей. Например, вы предлагаете ремонт
          квартир, и вам нужны те люди, которые ищут услугу в поисковике. Чем
          выше в выдаче по этому запросу вы будете, тем с большей вероятностью
          человек перейдет на ваш сайт. То есть больше шансов получить заявку,
          звонок, запрос на просчет. SEO делает короче путь от поиска
          услуги/товара в поисковике до нажатия кнопки «Оставить заявку», чтобы
          ваш бизнес был успешнее. Люди каждый день ищут в интернете то, что вы
          предлагаете, и запросов может быть 10-1000 и более в день. Все зависит
          от сферы, в которой вы работаете, и спроса. Все это ваши потенциальные
          клиенты.
        </p>
        <p className={styles.desc}>
          Наше SEO-продвижение сделает так, чтобы сайт привлекал посетителей
          органически и без оплаты рекламы. Для этого мы поддерживаем результаты
          и позиции, которых удалось достичь.
        </p>
        <Button to={"seo"} btnText={"ПОДРОБНЕЕ"} />
      </div>
    </div>
  );
};
