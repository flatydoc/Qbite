import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import styles from "./Stages.module.scss";

export const Stages = ({ state }) => {
  // window.onscroll = function () {
  //   myFunction();
  // };

  // function myFunction() {
  //   let winScroll =
  //     document.body.scrollTop || document.documentElement.scrollTop;
  //   let height =
  //     document.documentElement.scrollHeight -
  //     document.documentElement.clientHeight;
  //   let scrolled = (winScroll / height) * 100;
  //   document.getElementById("myBar").style.height = scrolled + "%";
  // }

  return (
    <section className={styles.stages}>
      <h2 className={styles.title}>{state.title}</h2>
      <VerticalTimeline className={styles.wrapper} lineColor={"#acb4c3"}>
        <span id="myBar" className={styles.progress}></span>
        {state.items.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={styles.stage}
            contentStyle={{
              backdropFilter: "blur(10px)",
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.7)",
            }}
            contentArrowStyle={{ display: "none" }}
            date={`${item.id}. ${item.subtitle}`}
            dateClassName={styles.subtitle}
            iconClassName={styles.icon}
          >
            <p className={styles.cardText}>{item.card}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};
