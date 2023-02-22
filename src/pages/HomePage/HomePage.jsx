import { About } from "../../components/HomePage/About/About";

import { Promotion } from "../../components/HomePage/Promotion/Promotion";
import { Feedback } from "../../components/Feedback/Feedback";
import { Main } from "../../components/HomePage/Main/Main";
import { Motto } from "../../components/HomePage/Motto/Motto";
import { Numbers } from "../../components/HomePage/Numbers/Numbers";
import { Services } from "../../components/HomePage/Services/Services";
import styles from "./HomePage.module.scss";
import { useRef } from "react";

export const HomePage = () => {
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
    <div className={styles.homePage}>
      <Main scrollToServices={scrollToServices} scrollToForm={scrollToForm} />
      <Motto />
      <Services servicesRef={servicesRef} />
      <Numbers />
      <Promotion scrollToForm={scrollToForm} />
      <About />
      <Feedback state={state.feedback} formRef={formRef} />
    </div>
  );
};
