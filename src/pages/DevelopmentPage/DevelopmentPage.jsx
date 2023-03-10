import { Advantages } from "../../components/Advantages/Advantages";
import { Main } from "../../components/Main/Main";
import { Stages } from "../../components/Stages/Stages";
import { Faq } from "../../components/Faq/Faq";
import { Info } from "../../components/Info/Info";

import image from "../../assets/images/development_main.webp";
import { Feedback } from "../../components/Feedback/Feedback";
import { useRef } from "react";
import { useDocumentTitle } from "../../core/hooks/useDocumentTitle";

import { Calculator } from "../../components/Calculator/Calculator";
import { Warning } from "../../components/Warning/Warning";

export const DevelopmentPage = () => {
  useDocumentTitle("Qbite | Разработка сайтов и веб-приложений");

  const state = {
    main: {
      title: "Разработка сайтов и веб-приложений",
      image,
    },

    info: {
      title: "Разработка сайтов и веб-приложений",
      content:
        "Одна из основных услуг, которую мы предлагаем, – это создание сайтов с нуля под ключ. Создание своего сайта – прекрасная возможность представить публике в Интернете свою компанию, бренд, товар или услугу и, тем самым, увеличить продажи. При необходимости, мы осуществляем доработку сайтов, созданных другими компаниями и горе-программистами.",
    },

    cards: [
      {
        title: "Лендинг",
        type: "Одностраничный сайт",
        price: "1000",
        discount: "900",
        term: 10,
      },
      {
        title: "Сайт-визитка",
        type: "Многостраничный сайт",
        price: "1200",
        discount: "1000",
        term: 10,
      },
      {
        title: "Корпоративный сайт",
        type: "Многостраничный сайт",
        price: "1800",
        discount: "1400",
        term: 15,
      },
      {
        title: "Сайт-каталог",
        type: "Многостраничный сайт",
        price: "2000",
        discount: "1800",
        term: 20,
      },
      {
        title: "Интернет-магазин",
        type: "Многостраничный сайт",
        price: "2600",
        discount: "2200",
        term: 25,
      },
    ],

    advantages: {
      title: "причины заказать разработку сайта в нашей компании",
      subtitle:
        "В нашей команде профессионалы своего дела, которые не только качественно выполнят поставленную задачу, но и всегда подскажут Вам наилучшее решение!",
      items: [
        {
          id: 1,
          title: "УНИКАЛЬНОСТЬ",
          subtitle:
            "Мы не используем шаблонные решения. Только уникальный внешний вид и передовой функционал.",
        },
        {
          id: 2,
          title: "ОПТИМИЗАЦИЯ",
          subtitle: "Сайт подготовлен для дальнейшего SEO-продвижения.",
        },
        {
          id: 3,
          title: "АДАПТИВНОСТЬ",
          subtitle:
            "Корректное отображение во всех браузерах и на всех устройствах.",
        },
        {
          id: 4,
          title: "ГИБКАЯ СИСТЕМА ОПЛАТЫ",
          subtitle:
            "Вам не нужно платить сразу за весь проект. Оплата происходит поэтапно с персональным подходом.",
        },
      ],
    },

    stages: {
      title: "Этапы создание сайта:",
      items: [
        {
          id: 1,
          subtitle: "Старт проекта",
          card: "Мы обсуждаем, тип сайта для реализации ваших целей",
        },
        {
          id: 2,
          subtitle: "Оформление документации",
          card: "Подписываем договор, а также формируем техническое задание (ТЗ)",
        },
        {
          id: 3,
          subtitle: "Создание дизайн-макета",
          card: "Согласно вашим пожеланиям, техническому заданию и современным тенденциям создаётся уникальный дизайн сайта",
        },
        {
          id: 4,
          subtitle: "Создание сайта",
          card: "Верстается вся и визуальная часть сайта, происходит настройка всего функционала по вашему ТЗ.",
        },
        {
          id: 5,
          subtitle: "Тестирование сайта",
          card: "Тестирование функционала и корректного отображения во всех браузерах и на всех устройствах",
        },
        {
          id: 6,
          subtitle: "Сдача проекта",
          card: "Оформляется Акт выполненных работ и производится окончательный расчет. После оплаты осуществляется перенос сайта на хостинг заказчика.",
        },
      ],
    },

    questions: [
      {
        id: 1,
        heading: "Сколько времени уходит на разработку сайта?",
        content:
          "Все зависит от сложности задач. Обычно от состаления ТЗ до передачи готового сайта клиенту проходит 2 недели.",
      },
      {
        id: 2,
        heading: "Сколько стоит создание сайта?",
        content:
          "Стоимость формируется с учетом функционала, сложности структуры, объема контента и дополнительных услуг. Точный расчет вы можете получить на нашей бесплатной консультации.",
      },
      {
        id: 3,
        heading: "Почему сайты такие дорогие?",
        content:
          "Неправильно делить сайты на дорогие и дешевые. Они либо окупаются, либо нет. Мы создаем продающие сайты не используя шаблонные решения для увеличения количества заявок, роста продаж, улучшения имиджа. В основе стоимости наших сайтов лежит успешный опыт реализации проектов.",
      },
      {
        id: 4,
        heading:
          "Чем отличается разработка на шаблоне (готовое решение) от оригинального дизайна (разработка с нуля)?",
        content:
          "Разработка на шаблоне подойдет для быстрого старта с небольшим бюджетом, для небольшого бренда. Вы получите полноценный сайт, однако будете ограничены в функционале и возможностях редактирования. Оригинальный дизайн (разработка с нуля) выгодно отличит вас от конкурентов и поможет реализовать любые идеи.",
      },
      {
        id: 5,
        heading: "Почему агенство лучше фрилансера?",
        content:
          "Можно сэкономить и нанять фрилансера. Но разработка сайта – это комплексное производство. Здесь нужна помощь других специалистов. Если вы найдете дизайнера-одиночку, будьте готовы, что остальные работы он отдаст подрядчикам. Также велик шанс попасть на новичка с недостаточной насмотренностью и нулевыми знаниями в маркетинге. В студии же вы получите гарантии. Все специалисты будут работать вместе и дополнять профессионализм друг друга. А вы сможете контролировать ход их работы.",
      },
      {
        id: 6,
        heading: "Может ли заказчик вмешиваться в процесс дизайна?",
        content:
          "На начальном этапе может и должен: заказчик составляет ТЗ (рассказывает о пожеланиях, целях, целевой аудитории). Дизайнер изучает ТЗ и предлагает одно или несколько решений. Если заказчик одобряет их – специалист начинает работу. В процессе разработки допустимо несколько итераций бесплатных правок, но переделывать дизайн с нуля никто не будет, поэтому заранее определитесь с вашими идеями и целями.",
      },
    ],

    feedback: {
      title: "У вас остались вопросы?",
      subtitle:
        "Мы готовы предложить лучшие решения для вашего бизнеса. Оставьте свои данные и мы свяжемся с вами!",
      option: { name: "Разработка сайтов", code: "1" },
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
      {/* <Cards state={state.cards} /> */}
      <Calculator scrollToForm={scrollToForm} />
      <Advantages state={state.advantages} />
      <Warning />
      <Stages state={state.stages} />
      <Faq questions={state.questions} />
      <Feedback state={state.feedback} formRef={formRef} />
    </>
  );
};
