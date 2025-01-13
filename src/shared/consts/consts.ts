import { isMobile } from 'react-device-detect';

/**
 * Ссылки
 */
const PATHS = {
  GENERAL_PAGE: '/',
};

/**
 * База данных
 */
const DATA = {
  'Item 1': {
    TITLE: 'Наука',
    ANGLE: 300,
    AGE_INTERVAL: {
      FIRST: 1939,
      SECOND: 1945,
    },
    EVENTS: [
      {
        YEAR: '1939',
        DESCRIPTION: `
          26 января — на знаменитой конференции по теоретической физике в Вашингтоне Нильс Бор объявил об открытии деления урана. 29 января — в СССР испытана ракета 212 класса «Земля — Земля»
          `,
      },
      {
        YEAR: '1940',
        DESCRIPTION: `
          Эдвард Теллер и другие, продолжали исследования в области ядерной физики, что в конечном итоге привело к разработке атомной бомбы в рамках Манхэттенского проекта. В этом году также был открыт элемент плутоний (Pu) в результате работы в Лос-Аламосской лаборатории.
          `,
      },
      {
        YEAR: '1941',
        DESCRIPTION: `
          Был открыт изотоп урана-235, который стал ключевым для разработки атомной энергии и атомного оружия.
          `,
      },
      {
        YEAR: '1942',
        DESCRIPTION: `
          В США под руководством Энрико Ферми была осуществлена первая контролируемая ядерная реакция в рамках Манхэттенского проекта. Это событие стало основой для дальнейших исследований в области ядерной физики и привело к созданию атомной бомбы.
          `,
      },
      {
        YEAR: '1943',
        DESCRIPTION: `
          Вернер фон Браун и его команда в Германии продолжали развивать технологии, связанные с ракетами, что в дальнейшем привело к созданию баллистических ракет и ракет для космических исследований.
          `,
      },
      {
        YEAR: '1944',
        DESCRIPTION: `
          Продолжались работы по созданию ракет, в том числе и в Германии, где разрабатывались ракеты типа V-2. Эти технологии впоследствии стали основой для ракетостроения и космических исследований.
          `,
      },
      {
        YEAR: '1945',
        DESCRIPTION: `
          16 июля 1945 года в Нью-Мексико была проведена первая успешная испытательная detonation атомной бомбы в рамках Манхэттенского проекта (испытание "Тринити"). Это событие положило начало ядерной эры и оказало огромное влияние на военные технологии, международные отношения и энергетику.
          `,
      },
    ],
  },
  'Item 2': {
    TITLE: 'Медицина',
    ANGLE: 240,
    AGE_INTERVAL: {
      FIRST: 1975,
      SECOND: 1981,
    },
    EVENTS: [
      {
        YEAR: '1975',
        DESCRIPTION: `
          Был разработан первый тест на беременность, основанный на использовании радиоиммунного анализа, что значительно упростило определение беременности и сделало его более доступным для женщин.
          `,
      },
      {
        YEAR: '1976',
        DESCRIPTION: `
          Введение в клиническую практику метода магнитно-резонансной томографии (МР// 1Т) стало важным шагом в визуализации внутренних органов и тканей, что улучшило диагностику различных заболеваний.
          `,
      },
      {
        YEAR: '1977',
        DESCRIPTION: `
          Открытие и внедрение в практику антиретровирусной терапии для лечения ВИЧ/СПИДа. Это стало основой для дальнейших исследований и разработок в области борьбы с вирусами.
          `,
      },
      {
        YEAR: '1978',
        DESCRIPTION: `
          Появление первой в мире "первой тест-трубки" (экстракорпоральное оплодотворение) в Великобритании, что открыло новые возможности для лечения бесплодия.
          `,
      },
      {
        YEAR: '1979',
        DESCRIPTION: `
          Разработка вакцины против гепатита B, что стало важным шагом в борьбе с вирусными инфекциями и улучшении общественного здоровья.
          `,
      },
      {
        YEAR: '1980',
        DESCRIPTION: `
          Введение в практику методов лапароскопической хирургии, что позволило проводить операции с минимальным вмешательством и сократило время восстановления пациентов.
          `,
      },
      {
        YEAR: '1981',
        DESCRIPTION: `
          Открытие синдрома приобретенного иммунодефицита (СПИДа) в США, что привело к значительным изменениям в подходах к лечению и профилактике инфекционных заболеваний.
          `,
      },
    ],
  },
  'Item 3': {
    TITLE: 'IT',
    ANGLE: 180,
    AGE_INTERVAL: {
      FIRST: 1991,
      SECOND: 1997,
    },
    EVENTS: [
      {
        YEAR: '1991',
        DESCRIPTION: `
          Запуск World Wide Web: создание системы гипертекстовых документов, доступных через интернет.
          Появление первой версии Linux: операционная система с открытым исходным кодом, разработанная Линусом Торвальдсом.
          `,
      },
      {
        YEAR: '1992',
        DESCRIPTION: `
          Появление первых веб-браузеров: таких как Line Mode Browser и ViolaWWW, что сделало интернет более доступным для пользователей.
          Разработка Java: язык программирования, который стал основой для многих веб-приложений.
          `,
      },
      {
        YEAR: '1993',
        DESCRIPTION: `
          Запуск Mosaic: первый графический веб-браузер, который значительно упростил доступ к интернету.
          Появление первых коммерческих веб-сайтов: начало коммерциализации интернета.
          `,
      },
      {
        YEAR: '1994',
        DESCRIPTION: `
          Создание Netscape Navigator: браузер, который быстро стал популярным и доминировал на рынке.
          Появление SSL (Secure Sockets Layer): протокол для обеспечения безопасной передачи данных в интернете.
          `,
      },
      {
        YEAR: '1995',
        DESCRIPTION: `
          Запуск Java: язык программирования, который стал основой для разработки кроссплатформенных приложений.
          Появление Amazon: один из первых интернет-магазинов, который изменил подход к электронной коммерции.
          `,
      },
      {
        YEAR: '1996',
        DESCRIPTION: `
          Появление поисковых систем: таких как AltaVista и Ask Jeeves, что упростило поиск информации в интернете.
          Разработка HTML 3.2: улучшенная версия языка разметки для веб-страниц.
          `,
      },
      {
        YEAR: '1997',
        DESCRIPTION: `
          Запуск Google: поисковая система, которая быстро завоевала популярность благодаря своей эффективности.
          Появление первой версии PHP: язык программирования, который стал основным для веб-разработки.
          `,
      },
    ],
  },
  'Item 4': {
    TITLE: 'Бизнес',
    ANGLE: 120,
    AGE_INTERVAL: {
      FIRST: 2000,
      SECOND: 2006,
    },
    EVENTS: [
      {
        YEAR: '2000',
        DESCRIPTION: `
          Запуск eBay в России: это дало старт развитию онлайн-торговли в стране.
          `,
      },
      {
        YEAR: '2001',
        DESCRIPTION: `
          Появление первого интернет-магазина в России: это открыло новые возможности для бизнеса и потребителей.
          Запуск Wikipedia: создание свободной энциклопедии, что изменило подход к получению информации.
          `,
      },
      {
        YEAR: '2002',
        DESCRIPTION: `
          Разработка и внедрение CRM-систем: это позволило компаниям лучше управлять взаимоотношениями с клиентами.
          Появление первых мобильных платежей: это начало эры мобильной коммерции.
          `,
      },
      {
        YEAR: '2003',
        DESCRIPTION: `
          Запуск Skype: это изменило способы общения и открыло новые возможности для бизнеса.
          Появление первых блогов: это дало возможность компаниям взаимодействовать с клиентами на новом уровне.
          `,
      },
      {
        YEAR: '2004',
        DESCRIPTION: `
          Запуск Facebook: создание социальной сети, которая впоследствии стала одной из самых влиятельных платформ в мире.
          Разработка Google AdSense: это изменило подход к интернет-рекламе и монетизации контента.
          `,
      },
      {
        YEAR: '2005',
        DESCRIPTION: `
          Появление YouTube: это изменило подход к видео-контенту и открыло новые возможности для бизнеса.
          Запуск Amazon Web Services: это дало старт облачным вычислениям и изменило подход к IT-инфраструктуре.
          `,
      },
      {
        YEAR: '2006',
        DESCRIPTION: `
          Появление Twitter: это изменило способы общения и взаимодействия в интернете.
          Разработка новых технологий для электронной коммерции: это способствовало росту онлайн-продаж и развитию интернет-магазинов.
          `,
      },
    ],
  },
  'Item 5': {
    TITLE: 'Политика',
    ANGLE: 60,
    AGE_INTERVAL: {
      FIRST: 2010,
      SECOND: 2016,
    },
    EVENTS: [
      {
        YEAR: '2010',
        DESCRIPTION: `
          ВВП Китая стал вторым в мире. 
          Политические реформы в Мьянме - Катастрофа польского Ту-154 в Смоленске: 10 апреля 2010 года потерпел крушение президентский самолет, погибли все 96 человек на борту, включая польского президента Л. Качиньского.
          `,
      },
      {
        YEAR: '2011',
        DESCRIPTION: `
          Реформа МВД: 1 марта 2011 года вступил в силу закон, переименовывающий милицию в полицию, что стало частью масштабной реформы МВД.
          Протесты против выборов: в конце 2011 года начались массовые протесты против фальсификаций на выборах в Госдуму.
          `,
      },
      {
        YEAR: '2012',
        DESCRIPTION: `
          Выборы президента России: 4 марта 2012 года Владимир Путин вновь стал президентом, получив 63,6% голосов.
          Вступление России в ВТО: 22 августа 2012 года Россия стала членом Всемирной торговой организации, что открыло новые возможности для торговли.
          `,
      },
      {
        YEAR: '2013',
        DESCRIPTION: `
          Закон Димы Яковлева: 1 января 2013 года вступил в силу закон, запрещающий усыновление российских детей гражданами США.
          Падение метеорита над Челябинском: 15 февраля 2013 года метеорит упал в Челябинской области, вызвав значительные разрушения.
          `,
      },
      {
        YEAR: '2014',
        DESCRIPTION: `
          Зимние Олимпийские игры в Сочи: с 7 по 23 февраля 2014 года в Сочи прошли Олимпийские игры, которые стали предметом международной критики.
          Присоединение Крыма к России: 18 марта 2014 года Крым был официально присоединен к России после референдума.
          `,
      },
      {
        YEAR: '2015',
        DESCRIPTION: `
          Начало военной операции России в Сирии: 30 сентября 2015 года Россия начала военные действия в Сирии по просьбе президента Башара Асада.
          Убийство Бориса Немцова: 27 февраля 2015 года был убит оппозиционный политик Борис Немцов, что вызвало широкий резонанс.
          `,
      },
      {
        YEAR: '2016',
        DESCRIPTION: `
          Образование Росгвардии: 5 апреля 2016 года была создана Росгвардия, отвечающая за безопасность и борьбу с терроризмом.
          Первый запуск с космодрома «Восточный»: 28 апреля 2016 года состоялся первый запуск ракеты с нового космодрома, что стало важным шагом для российской космонавтики.
          `,
      },
    ],
  },
  'Item 6': {
    TITLE: 'Новости',
    ANGLE: 0,
    AGE_INTERVAL: {
      FIRST: 2017,
      SECOND: 2023,
    },
    EVENTS: [
      {
        YEAR: '2017',
        DESCRIPTION: `
          Вступление в должность Дональда Трампа как президента США.
          Начало кризиса в отнош ениях между США и Северной Кореей.
          Ураган "Харви" нанес значительный ущерб Техасу, став одним из самых разрушительных ураганов в истории США.
          `,
      },
      {
        YEAR: '2018',
        DESCRIPTION: `
          Чемпионат мира по футболу прошел в России, привлекая внимание миллионов зрителей.
          Встреча между Дональдом Трампом и Ким Чен Ыном в Сингапуре, ставшая исторической.
          `,
      },
      {
        YEAR: '2019',
        DESCRIPTION: `
          Пожар в соборе Нотр-Дам в Париже, который вызвал международное осуждение и поддержку восстановления.
          Импичмент Дональда Трампа в Палате представителей США по обвинению в злоупотреблении властью.
          `,
      },
      {
        YEAR: '2020',
        DESCRIPTION: `
          Пандемия COVID-19 охватила мир, вызвав глобальный кризис здравоохранения и экономические последствия.
          Протесты Black Lives Matter в США после убийства Джорджа Флойда, что привело к обсуждению расовой справедливости.
          `,
      },
      {
        YEAR: '2021',
        DESCRIPTION: `
          Вступление Джо Байдена в должность президента США и его политика по борьбе с пандемией.
          Штурм Капитолия 6 января 2021 года сторонниками Трампа, что вызвало широкий резонанс.
          Начало вакцинации против COVID-19 в разных странах, что стало важным шагом в борьбе с пандемией.
          `,
      },
      {
        YEAR: '2022',
        DESCRIPTION: `
          Начало военной операции России в Украине 24 февраля, что привело к международным санкциям.
          Глобальный энергетический кризис, вызванный конфликтом в Украине и последствиями пандемии.
          Чемпионат мира по футболу в Катаре, который стал первым зимним чемпионатом мира.
          `,
      },
      {
        YEAR: '2023',
        DESCRIPTION: `
          Продолжение конфликта в Украине и его влияние на мировую политику и экономику.
          Обсуждение климатических изменений на международных форумах, включая COP27.
          Развитие технологий, таких как искусственный интеллект, и их влияние на различные сферы жизни.
          `,
      },
    ],
  },
};

/**
 * Скорость анимации - 1 секунда
 */
const DURATION_ROTATE = 1;

/**
 * Количество элементов в базе данных
 */
const ITEMS_COUNT = Object.keys(DATA).length;

/**
 * Все элементы в базе данных
 */
const ITEMS = Object.keys(DATA);

/**
 * Максимальное количество слайдов на экране. Для мобильной версии - 1, для декстопа - 3
 */
const MAX_SLIDE_COUNT_PER_VIEW = isMobile ? 1 : 3;

/**
 * Максимальное расстояние между слайдами. Для мобильной версии - 200 пикселей, для десктопа - 30 пикселей
 */
const MAX_SLIDE_DISTANCE = isMobile ? 200 : 30;

/**
 * Флаг навигации по слайдам. Стрелки влево и вправо. Для мобильной версии отлючено, для декстопа включено
 */
const NAVIGATION_SLIDE_FLAG = isMobile ? false : true;

/**
 * Флаг пагинации по слайдам. Для мобильной версии включено, для декстопа отключено
 */
const PAGINATION_SLIDE_FLAG = isMobile ? true : false;

/**
 * Домашнее название страницы
 */
const HOME_TITLE = 'Исторические даты';

export {
  PATHS,
  DURATION_ROTATE,
  ITEMS_COUNT,
  ITEMS,
  MAX_SLIDE_COUNT_PER_VIEW,
  MAX_SLIDE_DISTANCE,
  NAVIGATION_SLIDE_FLAG,
  PAGINATION_SLIDE_FLAG,
  HOME_TITLE,
  DATA,
};
