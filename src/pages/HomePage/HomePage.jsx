import { Main } from "../../components/Main/Main";
import { Motto } from "../../components/Motto/Motto";
import { Services } from "../../components/Services/Services";
import styles from "./HomePage.module.scss";
import { useRef } from "react";

export const HomePage = () => {
  const servicesRef = useRef();

  const scrollTo = () => {
    servicesRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={styles.homePage}>
      <Main scrollTo={scrollTo} />
      <Motto />
      <Services servicesRef={servicesRef} />
    </div>
  );
};
