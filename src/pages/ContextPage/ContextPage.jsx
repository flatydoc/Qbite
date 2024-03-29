import { Advantages } from "../../components/Advantages/Advantages";
import { Main } from "../../components/Main/Main";
import { Stages } from "../../components/Stages/Stages";
import { Faq } from "../../components/Faq/Faq";
import { Info } from "../../components/Info/Info";

import image from "../../assets/images/context_main.webp";
import { Feedback } from "../../components/Feedback/Feedback";
import { useRef } from "react";
import { useDocumentTitle } from "../../core/hooks/useDocumentTitle";
import { Calculator } from "../../components/Calculator/Calculator";
import { Consult } from "../../components/HomePage/Consult/Consult";

export const ContextPage = () => {
  useDocumentTitle("Qbite | Контекстная реклама");

  const state = {
    main: {
      title: "Настройка контекстной рекламы",
      subtitle: "Верхние строчки поисковых систем могут быть Ваши!",
      image,
    },

    info: {
      title: "Настройка контекстной рекламы",
      content:
        "Контекстная реклама – это отличный инструмент для привлечения новых клиентов. Настройка контекстной рекламы позволит повысить посещаемость Вашего сайта и, соответственно, Ваши продажи. Безусловно, осуществить настройку контекстной рекламы Яндекс.Директ и Гугл Адвордс может любой желающий, но сделать это правильно – единицы. Мы оказываем услуги по профессиональному запуску, настройке и ведению контекстной рекламы Google и Яндекс. Заказать настройку и ведение контекстной рекламы – большой шаг к увеличению Ваших продаж и узнаваемости бренда или компании.",
    },

    advantages: {
      title: "причины заказать контекстную рекламу в нашей компании",
      subtitle:
        "В нашей команде профессионалы своего дела, которые не только качественно выполнят поставленную задачу, но и всегда подскажут Вам наилучшее решение!",
      items: [
        {
          id: 1,
          title: "Гибкость",
          subtitle:
            "Покажем Вашу рекламу там где Вам нужно, вплоть до конкретного здания.",
        },
        {
          id: 2,
          title: "Аналитика и ведение",
          subtitle:
            "Постоянный мониторинг Вашей рекламной кампании, внесение изменений и улучшение предложений.",
        },
        {
          id: 3,
          title: "Оптимизация бюджета",
          subtitle:
            "Достигаем оптимального соотношения цены заявки к ее качеству.",
        },
        {
          id: 4,
          title: "Прозрачная отчётность",
          subtitle: "Предоставляем отслеживание эффективности рекламы.",
        },
      ],
    },

    stages: {
      title: "Этапы для запуска контекстной рекламы:",
      items: [
        {
          id: 1,
          subtitle: "Аналитика рынка",
          card: "Изучение бизнеса клиента: анализ спроса и сезонности. Собираем информацию о конкурентах, учитываем их недостатки",
        },
        {
          id: 2,
          subtitle: "Бюджетирование",
          card: "Прогнозируем  затраты: стоимость клика, целевого лида",
        },
        {
          id: 3,
          subtitle: "Сбор семантики и подготовка креативов",
          card: "Мы подбираем базу слов, словосочетаний и морфологических форм, наиболее точно относящихся к вашему бизнесу. Подготовка объявления, баннера, видео-объявления для привлечения потенциальных клиентов",
        },
        {
          id: 4,
          subtitle: "Тестовый запуск",
          card: "Мы запускаем рекламную кампанию, собираем статистику, дорабатываем и оптимизируем настройки. Оцениваем эффективность и анализируем аудиторию",
        },
        {
          id: 5,
          subtitle: "Основной запуск",
          card: "На основе аналитики и данных об аудитории мы запускаем основную рекламную кампанию",
        },
      ],
    },

    questions: [
      {
        id: 1,
        heading: "Можете ли вы гарантировать продажи?",
        content:
          "На продажи влияет множество факторов, которые зависят не только от нас. Но мы заинтересованы в долгосрочном сотрудничестве с каждым клиентом и грамотном расходовании его бюджета. Мы можем гарантировать тщательное соблюдение сроков договоренностей и профессиональное решение проблем.",
      },
      {
        id: 2,
        heading:
          "Почему после первых дней показа рекламы наблюдается высокий уровень цены заявок/кликов?",
        content:
          "В первые дни бюджет может расходоваться быстрее, чем запланировано. Так система быстрее определит Вашу аудиторию. Через несколько дней расход снизится до запланированного.",
      },
      {
        id: 3,
        heading:
          "Какие могут быть причины отсутствия заявок в определенные дни?",
        content:
          "Один/несколько дней без заявок – это не показатель того, что реклама плохо настроена. Работа по проекту ведется постоянно, мы тоже видим, что заявок в какой-то день нет, учитываем это и вносим изменения. Также часто наблюдается неравномерное распределение количества заявок, то есть существуют пиковые дни/часы. Оценку эффективности кампании следует проводить за семидневный период или больше.",
      },
      {
        id: 4,
        heading: "Как определяется цена одного клика?",
        content:
          "Цена за 1 клик непостоянна. Это объясняется аукционной системой ее определения. Чтобы рассчитать рекламный бюджет, можно воспользоваться прогнозом от Яндекса и Google. Там есть ориентировочный бюджет на 30 дней, а также средние цены за клик.",
      },
    ],
    feedback: {
      title: "У вас остались вопросы?",
      subtitle:
        "Мы поможем продвинуть Ваш бизнес в интернете. Оставьте свои данные и мы свяжемся с Вами!",
      option: { name: "Контекстная реклама", code: "2" },
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
