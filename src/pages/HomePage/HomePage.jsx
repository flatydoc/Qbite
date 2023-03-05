import { About } from "../../components/HomePage/About/About";

import { Promotion } from "../../components/HomePage/Promotion/Promotion";
import { Feedback } from "../../components/Feedback/Feedback";
import { Main } from "../../components/HomePage/Main/Main";
import { Motto } from "../../components/HomePage/Motto/Motto";
import { Numbers } from "../../components/HomePage/Numbers/Numbers";
import { Services } from "../../components/HomePage/Services/Services";

import { useRef } from "react";
import { useDocumentTitle } from "../../core/hooks/useDocumentTitle";
import { Consult } from "../../components/HomePage/Consult/Consult";

import styles from "./HomePage.module.scss";

export const HomePage = () => {
  useDocumentTitle("Qbite - Студия веб-разработки и маркетинга");

  const state = {
    feedback: {
      title: "Откройте дверь потоку клиентов!",
      subtitle:
        "Мы готовы предложить лучшие решения для вашего бизнеса. Оставьте свои данные и мы свяжемся с вами!",
    },
  };

  const servicesRef = useRef();
  const formRef = useRef();

  const scrollToServices = () => {
    servicesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Main scrollToServices={scrollToServices} scrollToForm={scrollToForm} />
      <Motto />
      <Services servicesRef={servicesRef} />
      {/* <Consult /> */}
      <Numbers />
      <div className={styles.wrapper}>
        <Promotion scrollToForm={scrollToForm} />
        <About />
      </div>
      <Feedback state={state.feedback} formRef={formRef} />
    </>
  );
};
