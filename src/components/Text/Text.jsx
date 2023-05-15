import styles from "./Text.module.scss";

export const Text = ({ state }) => {
  return (
    <section className={styles.text}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          Сайт – обязательный атрибут современной компании
        </h2>
        <p className={styles.subtitle}>
          <p>
            Сайт сегодня – не только визитка компании, это эффективный
            маркетинговый инструмент, техническое дополнение к бизнесу и
            эффективный метод коммуникации с клиентами.
          </p>
          <p style={{ marginTop: "20px" }}>
            Потенциальные клиенты и работники, партнеры, инвесторы и СМИ точно
            так же, как и вы пользуются поисковиками. И если вас в этой
            поисковой выдаче нет, все они перейдут на сайт к конкуренту.
          </p>
        </p>
      </div>
    </section>
  );
};
