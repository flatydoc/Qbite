import styles from "./Warning.module.scss";
import image from "../../assets/images/warning.svg";

export const Warning = () => {
  return (
    <section className={styles.warning}>
      <img alt="Предупреждение" src={image} className={styles.img} />
      <div className={styles.content}>
        <h4 className={styles.title}>
          Мы <span className={styles.pink}>НЕ</span> сделаем для вас дешевый
          сайт за 3 дня
        </h4>
        <p className={styles.desc}>
          Наша студия работает только по высоким стандартам! Продающий сайт -
          результат работы целой команды дизайнеров, разработчиков и
          маркетологов.
        </p>
      </div>
    </section>
  );
};
