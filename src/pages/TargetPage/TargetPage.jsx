import { Advantages } from "../../components/Advantages/Advantages";
import { Main } from "../../components/Main/Main";
import { Stages } from "../../components/Stages/Stages";
import { Faq } from "../../components/Faq/Faq";
import { Info } from "../../components/Info/Info";

import image from "../../assets/images/target_main.jpg";
import { Feedback } from "../../components/Feedback/Feedback";
import { useRef } from "react";
import { useDocumentTitle } from "../../core/hooks/useDocumentTitle";

import { Calculator } from "../../components/Calculator/Calculator";
import { Consult } from "../../components/HomePage/Consult/Consult";

export const TargetPage = () => {
  useDocumentTitle("Qbite | Реклама в социальных сетях");

  const state = {
    main: {
      title: "Реклама в социальных сетях",
      subtitle: "Плати за результат, а не процесс",
      image,
    },

    info: {
      title: "Настройка таргетированной рекламы",
      content:
        "Таргетированная реклама – это реклама в социальных сетях, настроенная под потенциальных клиентов по возрасту, полу, географии, интересам и т.д. и направленная на повышение продаж Ваших товаров или услуг. Настройка таргетированной рекламы – это отличный способ увеличить Вашу целевую аудиторию и повысить узнаваемость Вашего бренда. Специалисты нашего агентства осуществляют профессиональный запуск, настройку и ведение таргетированной рекламы",
    },

    advantages: {
      title: "причины заказать таргетированную рекламу в нашей компании",
      subtitle:
        "В нашей команде профессионалы своего дела, которые не только качественно выполнят поставленную задачу, но и всегда подскажут Вам наилучшее решение!",
      items: [
        {
          id: 1,
          title: "Эффективность",
          subtitle:
            "Мы используем передовые технологии и аналитику для создания рекламных кампаний, которые максимально эффективны в привлечении целевой аудитории.",
        },
        {
          id: 2,
          title: "Персонализация",
          subtitle:
            "Мы настраиваем таргетированную рекламу под каждого клиента, учитывая его потребности, интересы и поведение в интернете.",
        },
        {
          id: 3,
          title: "Большой охват",
          subtitle:
            "Мы работаем с различными платформами и социальными сетями, что позволяет нам достигать широкой аудитории и увеличивать конверсию.",
        },
        {
          id: 4,
          title: "Оптимизация",
          subtitle:
            "Мы постоянно отслеживаем результаты наших кампаний и вносим корректировки для улучшения их эффективности. Это позволяет нам максимально использовать бюджет клиента и достигать максимального ROI.",
        },
      ],
    },

    stages: {
      title: "Этапы для запуска контекстной рекламы:",
      items: [
        {
          id: 1,
          subtitle: "Расчет и прогноз",
          card: "Оцениваем все ресурсы, которые у Вас есть. На основе этого даем предварительную оценку результативности.",
        },
        {
          id: 2,
          subtitle: "Заключение договора и старт работ",
          card: "Сразу после подписания договора обеими сторонами мы начинаем работы, согласованные к этому этапу.",
        },
        {
          id: 3,
          subtitle: "Анализ конкурентов",
          card: "Анализируем соперников в нише, смотрим, что уже сделано, и какие результаты это принесло. Улучшаем наработки, усиливаем эффективные стратегии и технологии.",
        },
        {
          id: 4,
          subtitle: "Разработка стратегии",
          card: "Презентуем и обоснуем все наши предварительные наработки перед стартом продвижения. Мы видим сильные стороны вашего проекта и знакомимся с ним.",
        },
        {
          id: 5,
          subtitle: "Запуск, выход на окупаемость",
          card: "Мы сделаем так, чтобы вы заново поверили в свой бизнес, даже если успели разочароваться от первых попыток продвигать его самостоятельно.",
        },
      ],
    },
    questions: [
      {
        id: 1,
        heading: "Когда я получу первые заявки?",
        content:
          "Первые заявки могут быть даже в первый день запуска. Все зависит от Вашей ниши, конкуренции и срока принятия решения Вашей целевой аудитории. Однако не стоит паниковать, если заявок сразу нет. Для эффективной настройки таргета необходим тестовый период.",
      },
      {
        id: 2,
        heading: "Какие отчеты по работе я буду получать?",
        content:
          "В начале запуска рекламы будет проводиться тестовый период, в течение которого мы изучим статистику и показатели качественного функционирования. Примерно через 2 недели мы получим достаточно данных, чтобы составить отчет об эффективности и рекомендации по ее повышению. Далее такие отчеты высылаются клиентам ежемесячно.",
      },
      {
        id: 3,
        heading:
          "Существует ли минимальный бюджет на продвижение в социальных сетях?",
        content:
          "Таргетированная реклама имеет меньшую стоимость относительно других инструментов продвижения. Это гибкая система, которая позволяет рекламироваться при любом бюджете. Мы можем составить для вас прогноз бюджета, основываясь на опыте проведения рекламных кампаний бизнесов Вашей тематики в конкретных социальных сетях. Этот прогноз поможет подобрать оптимальную сумму на SMM-продвижение, которая не ударит по Вашему карману.",
      },
      {
        id: 4,
        heading: "Входит ли создание баннеров в стоимость продвижения?",
        content:
          "Обычно создание баннеров входит в стоимость, однако их количество зависит от выбранного тарифа и индивидуальных условий договора.",
      },
    ],
    feedback: {
      title: "У вас остались вопросы?",
      subtitle:
        "Мы поможем продвинуть Ваш бизнес в интернете. Оставьте свои данные и мы свяжемся с Вами!",
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
      <Calculator scrollToForm={scrollToForm} />
      <Advantages state={state.advantages} />
      <Consult formRef={formRef} />
      <Stages state={state.stages} />
      <Faq questions={state.questions} />
      <Feedback state={state.feedback} />
    </>
  );
};
