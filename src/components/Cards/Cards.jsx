import styles from "./Cards.module.scss";

export const Cards = ({ state }) => {
  return (
    <section className={styles.cards}>
      {state.map((card, index) => (
        <div className={styles.card} key={index}>
          <h3 className={styles.title}>{card.title}</h3>

          <p className={styles.type}>{card.type}</p>
          <p className={styles.price}>от {card.price}р.</p>
          <p className={styles.discount}>от {card.discount}р.</p>
          <p className={styles.term}>Срок разработки от {card.term} дней</p>
        </div>
      ))}
    </section>
  );
};
