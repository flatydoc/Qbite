import { About } from "../../components/HomePage/About/About";

import { Promotion } from "../../components/HomePage/Promotion/Promotion";
import { Feedback } from "../../components/HomePage/Feedback/Feedback";
import { Main } from "../../components/HomePage/Main/Main";
import { Motto } from "../../components/HomePage/Motto/Motto";
import { Numbers } from "../../components/HomePage/Numbers/Numbers";
import { Services } from "../../components/HomePage/Services/Services";
import styles from "./HomePage.module.scss";
import { useRef } from "react";

export const HomePage = () => {
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
      <Main scrollToServices={scrollToServices} />
      <Motto />
      <Services servicesRef={servicesRef} />
      <Numbers />
      <Promotion scrollToForm={scrollToForm} />
      <About />
      <Feedback formRef={formRef} />
    </div>
  );
};
