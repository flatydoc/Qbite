import styles from "./ContactsPage.module.scss";
import { useDocumentTitle } from "../../core/hooks/useDocumentTitle";

export const ContactsPage = () => {
  useDocumentTitle("Quantum | Контакты");

  return (
    <div className={styles.contactsPage}>
      <p></p>
    </div>
  );
};
