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
import { Reviews } from "../../components/HomePage/Reviews/Reviews";

export const HomePage = () => {
  useDocumentTitle("Qbite - Студия веб-разработки и маркетинга");

  const state = {
    feedback: {
      title: "Откройте дверь потоку клиентов!",
      subtitle:
        "Мы поможем вывести Ваш бизнес в интернет. Оставьте свои данные и мы свяжемся с Вами!",
    },

    reviews: [
      {
        author: "Игорь Бурцич",
        stars: 5,
        sex: "male",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio amet eos perferendis excepturi accusamus praesentium atque ea recusandae nobis fuga sequi a alias similique ratione minima, temporibus placeat et nemo? Voluptatem, adipisci aut voluptatum voluptas ratione explicabo laboriosam libero ipsum. Porro nulla debitis placeat aperiam veritatis labore veniam deleniti rerum!",
      },
      {
        author: "Игорина Бурцич",
        stars: 5,
        sex: "female",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio amet eos perferendis excepturi accusamus praesentium atque ea recusandae nobis fuga sequi a alias similique ratione minima, temporibus placeat et nemo? Voluptatem, adipisci aut voluptatum voluptas ratione explicabo laboriosam libero ipsum. Porro nulla debitis placeat aperiam veritatis labore veniam deleniti rerum!",
      },
      {
        author: "Игорь Бурцич",
        stars: 5,
        sex: "male",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio amet eos perferendis excepturi accusamus praesentium atque ea recusandae nobis fuga sequi a alias similique ratione minima, temporibus placeat et nemo? Voluptatem, adipisci aut voluptatum voluptas ratione explicabo laboriosam libero ipsum. Porro nulla debitis placeat aperiam veritatis labore veniam deleniti rerum!",
      },
      {
        author: "Игорина Бурцич",
        stars: 5,
        sex: "female",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio amet eos perferendis excepturi accusamus praesentium atque ea recusandae nobis fuga sequi a alias similique ratione minima, temporibus placeat et nemo? Voluptatem, adipisci aut voluptatum voluptas ratione explicabo laboriosam libero ipsum. Porro nulla debitis placeat aperiam veritatis labore veniam deleniti rerum!",
      },
      {
        author: "Игорь Бурцич",
        stars: 5,
        sex: "male",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio amet eos perferendis excepturi accusamus praesentium atque ea recusandae nobis fuga sequi a alias similique ratione minima, temporibus placeat et nemo? Voluptatem, adipisci aut voluptatum voluptas ratione explicabo laboriosam libero ipsum. Porro nulla debitis placeat aperiam veritatis labore veniam deleniti rerum!",
      },
    ],
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
      <Consult formRef={formRef} />
      <Numbers />
      <div className={styles.wrapper}>
        <Promotion scrollToForm={scrollToForm} />
        <About />
      </div>
      <Reviews state={state.reviews} />
      <Feedback state={state.feedback} />
    </>
  );
};
