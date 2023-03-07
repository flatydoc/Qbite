import { Advantages } from "../../components/Advantages/Advantages";
import { Main } from "../../components/Main/Main";
import { Stages } from "../../components/Stages/Stages";
import { Faq } from "../../components/Faq/Faq";
import { Info } from "../../components/Info/Info";

import image from "../../assets/images/target_main.jpg";
import { Feedback } from "../../components/Feedback/Feedback";
import { useRef } from "react";
import { useDocumentTitle } from "../../core/hooks/useDocumentTitle";
import { Cards } from "../../components/Cards/Cards";

export const TargetPage = () => {
  useDocumentTitle("Qbite | Реклама в социальных сетях");

  const state = {
    main: {
      title: "Реклама в социальных сетях",
      image,
    },

    info: {
      title: "Настройка таргетированной рекламы",
      content:
        "Таргетированная реклама – это реклама в социальных сетях, настроенная под потенциальных клиентов по возрасту, полу, географии, интересам и т.д. и направленная на повышение продаж ваших товаров или услуг. Настройка таргетированной рекламы – это отличный способ увеличить вашу целевую аудиторию и повысить узнаваемость вашего бренда. Специалисты нашего агентства осуществляют профессиональный запуск, настройку и ведение таргетированной рекламы",
    },

    cards: [
      { title: "123", type: "123", price: "123", discount: "123", term: "123" },
      { title: "123", type: "123", price: "123", discount: "123", term: "123" },
      { title: "123", type: "123", price: "123", discount: "123", term: "123" },
    ],

    advantages: {
      title: "причины заказать контекстную рекламу в нашей компании",
      subtitle:
        "В нашей команде профессионалы своего дела, которые не только качественно выполнят поставленную задачу, но и всегда подскажут Вам наилучшее решение!",
      items: [
        {
          id: 1,
          title: "Реклама в любой стране, регионе, городе",
          subtitle:
            "Покажем Вашу рекламу там где Вам нужно, вплоть до конкретного здания.",
        },
        {
          id: 2,
          title: "Рост продаж",
          subtitle: "Привлечение потенциальных клиентов в ваш бизнес.",
        },
        {
          id: 3,
          title: "Контроль расходов и отчётность",
          subtitle:
            "Достигаем оптимального соотношения цены заявки к ее качеству. Предоставляем отслеживание эффективности рекламы.",
        },
      ],
    },

    stages: {
      title: "Этапы для запуска контекстной рекламы:",
      items: [
        {
          id: 1,
          subtitle: "Аналитика рынка",
          card: "Изучение бизнеса клиента: анализ спроса и сезонности. Определяем конкурентов в интернете и анализ.",
        },
        {
          id: 2,
          subtitle: "Бюджетирование",
          card: "Прогнозируем  затраты: стоимость клика, клиента, договора.",
        },
      ],
    },
    questions: [
      {
        id: 1,
        heading:
          "Есть ли гарантия, что мой сайт попадет на первую страницу в поисковиках?",
        content:
          "Технология SEO не позволяет гарантировать выход на определенную позицию. Но мы 100% сделаем ваш сайт лучше. Здесь решающее значение имеет опыт нашей компании и специалистов. Мы уже вывели не один проект на первые места в Google и Яндекс.",
      },
      {
        id: 2,
        heading: "Что эффективнее: SEO или контекст?",
        content:
          "Все зависит от сферы бизнеса. Лучший вариант – использовать оба метода продвижения. Контекст даст быстрые заявки и прибыль. SEO принесет узнаваемость и увеличит клиентопоток в долгосрочной перспективе.",
      },
    ],
    feedback: {
      title: "У вас остались вопросы?",
      subtitle:
        "Мы готовы предложить лучшие решения для вашего бизнеса. Оставьте свои данные и мы свяжемся с вами!",
      option: { name: "Таргет", code: "4" },
    },
  };

  const formRef = useRef();

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Main state={state.main} scrollToForm={scrollToForm} />
      <Info state={state.info} />
      <Cards state={state.cards} />
      <Advantages state={state.advantages} />
      <Stages state={state.stages} />
      <Faq questions={state.questions} />
      <Feedback state={state.feedback} formRef={formRef} />
    </>
  );
};
