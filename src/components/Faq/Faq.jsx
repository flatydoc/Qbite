import styles from "./Faq.module.scss";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

export const Faq = (props) => {
  return (
    <section className={styles.faq}>
      <h2 className={`${styles.title} notranslate`}>F.A.Q.</h2>
      <Accordion allowZeroExpanded className={styles.accordion}>
        {props.questions.map((question) => (
          <AccordionItem key={question.id} className={styles.accordion__item}>
            <AccordionItemHeading>
              <AccordionItemButton className={styles.accordion__button}>
                {question.heading}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={styles.accordion__panel}>
              <p>{question.content}</p>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
