export type propsQuiz = {
  id: number;
}

export type CounterProps = {
  id: string,
  title: string,
  description: string,
  tag: string
}

export type answersCorrelate = {
  firstColumn: string[];
  secondColumn: string[];
}

export type questions = {
  titleQuest: string;
  typeQuestions: "Quiz" | "MultipleChoice" | "Correlate";
  questions: string[]
}

export type typeQuizData = {
  id: number;
  titleQuiz: string;
  description: string;
  tag: string;
  answers: questions[];
  correctAnswers: number[];
}

const quizData1: typeQuizData = {
  id: 0,
  titleQuiz: "Иван 3",
  description: "Время правления Ивана 3",
  tag: "История",
  answers: [
    {
      titleQuest: "Сколько раз был женат Иван 3?",
      typeQuestions: "Quiz",
      questions: ["Ни разу", "Один раз", "Два раза", "Три раза"]
    },
    {
      titleQuest: "В каком году родился Иван 3?",
      typeQuestions: "Quiz",
      questions: ["1420 год", "1430 год", "1440 год", "1450 год"]
    },
    {
      titleQuest: "В каком году умер Иван 3?",
      typeQuestions: "Quiz",
      questions: ["1490 год", "1505 год", "1510 год", "1520 год"]
    },
    {
      titleQuest: "Сколько лет правил Иван 3?",
      typeQuestions: "Quiz",
      questions: ["23 года", "33 года", "43 года", "53 года"]
    },
    {
      titleQuest: "Как звали первую жену Ивана 3?",
      typeQuestions: "Quiz",
      questions: ["Мария Борисовна", "Марина Владимировна", "Мария Олеговна", "Наталья Александровна"]
    },
    {
      titleQuest: "Как звали вторую жену Ивана 3?",
      typeQuestions: "Quiz",
      questions: ["Светлана Ферапонтова", "Гюльчатай Адамовна", "Мария Ярославна", "Софья Фоминична"]
    },
    {
      titleQuest: "В каком году произошло Великое стояние на реке Угре?",
      typeQuestions: "Quiz",
      questions: ["1480 год", "1500 год", "1525 год", "1537 год"]
    },
    {
      titleQuest: "Как именно умер Иван 3?",
      typeQuestions: "Quiz",
      questions: ["Погиб в бою с Крымским ханством", "Заболел - ослеп на один глаз, наступил частичный паралич одной руки и одной ноги", "Отравили недоброжелатели", "Совершил суицид"]
    },
    {
      titleQuest: "Где принимал Иван 3 иностранных послов?",
      typeQuestions: "Quiz",
      questions: ["В Кремле", "В Грановитой палате", "В Успенском соборе", "У себя дома"]
    },
    {
      titleQuest: "Кто является предшественником Ивана 3?",
      typeQuestions: "Quiz",
      questions: ["Василий 3", "Иван 4", "Василий 2 Тёмный", "Иван 1 Калита"]
    }
  ],
  correctAnswers: [3, 3, 2, 3, 1, 4, 1, 2, 2, 3]
}
const quizData2: typeQuizData = {
  id: 1,
  titleQuiz: "Иван 4",
  description: "Время правления Ивана 4",
  tag: "История",
  answers: [
    {
      titleQuest: "Какое прозвище было у Ивана 4? ",
      typeQuestions: "Quiz",
      questions: ["Тоскливый", "Зверствующий", "Грозный", "Недоверчивый"]
    },
    {
      titleQuest: 'Причиной прозвища "Грозный" у Ивана 4 было:',
      typeQuestions: "Quiz",
      questions: ['Его "Грозеный" характер', "Он родился в грозовую ночь ", "Он сам себе выбрал это прозвище", "Он всем грозил"]
    },
    {
      titleQuest: "В каком году родился Иван 4? ",
      typeQuestions: "Quiz",
      questions: ["1530 год", "1540 год", "1545 год", "1552 год"]
    },
    {
      titleQuest: "В каком году состоялось венчание на царство Ивана 4? ",
      typeQuestions: "Quiz",
      questions: ["1525 год", "1533 год", "1537 год", "1547 год"]
    },
    {
      titleQuest: "Как стал именоваться после венчания Иван 4? ",
      typeQuestions: "Quiz",
      questions: ["Монархом всея Руси", "Самодержцем всея Руси", "Императором всея Руси", "Царëм и великим князем всея Руси"]
    },
    {
      titleQuest: "Войско, созданное в правление Ивана Грозного? ",
      typeQuestions: "Quiz",
      questions: ["Гусарское", "Стрелецкое ", "Драгунское", "Рекрутское"]
    },
    {
      titleQuest: "Большая роль в деятельности Избранной рады принадлежала?",
      typeQuestions: "Quiz",
      questions: ["Андрею Курбскому", "Алексею Адашеву", "Александру Меньшикову", "Борису Годунову"]
    },
    {
      titleQuest: "Через какой город велась торговля России со странами Западной Европы? ",
      typeQuestions: "Quiz",
      questions: ["Петроград", "Новгород", "Архангельск ", "Астрахань"]
    },
    {
      titleQuest: "Современниками Ивана 4 были?",
      typeQuestions: "Quiz",
      questions: ["Николай 2, Григорий Распутин", "Елена Глинская, митрополит Макарий", "Протопоп Аввакум, патриарх Никон", "Хан Батый, литовский князь Миндовг"]
    },
    {
      titleQuest: "Как звали мать Ивана 4?",
      typeQuestions: "Quiz",
      questions: ["Софья Палеолог", "Елена Глинская", "Мария Борисовна", "Елена Дмитровская"]
    }
  ],
  correctAnswers: [3, 2, 1, 4, 4, 2, 2, 3, 2, 2]
}
const quizData3: typeQuizData = {
  id: 2,
  titleQuiz: "Title  quiz 3!",
  description: "Description this quiz!",
  tag: "Historu",
  answers: [
    {
      titleQuest: "Title quest 1",
      typeQuestions: "Quiz",
      questions: ["Asdasdasd", "Qweqweqwe", "Zxczxczxc", "Ghjghjghj"]
    },
    {
      titleQuest: "Title quest 2",
      typeQuestions: "Quiz",
      questions: ["sgdfgdfg", "Qwedfgdfgqweqwe", "dfgdg", "dfgdfg"]
    },
    {
      titleQuest: "Title quest 3",
      typeQuestions: "Quiz",
      questions: ["s346535645", "j6y87k87i", "rertert", "vcbcvbcv"]
    },
    {
      titleQuest: "Title quest 4",
      typeQuestions: "Quiz",
      questions: ["bnvnu,uo", "55675u76875", "dfghbdbv", "sdrtg3456"]
    },
    {
      titleQuest: "Title quest 5",
      typeQuestions: "Quiz",
      questions: ["324535", "Qweqweq4563463we", "nhfjnfj", "457327"]
    }
  ],
  correctAnswers: [1, 1, 1, 1, 1]
}
const quizData4: typeQuizData = {
  id: 3,
  titleQuiz: "Title  quiz 4!",
  description: "Description this quiz!",
  tag: "Historu",
  answers: [
    {
      titleQuest: "Title quest 1",
      typeQuestions: "Quiz",
      questions: ["Asdasdasd", "Qweqweqwe", "Zxczxczxc", "Ghjghjghj"]
    },
    {
      titleQuest: "Title quest 2",
      typeQuestions: "Quiz",
      questions: ["sgdfgdfg", "Qwedfgdfgqweqwe", "dfgdg", "dfgdfg"]
    },
    {
      titleQuest: "Title quest 3",
      typeQuestions: "Quiz",
      questions: ["s346535645", "j6y87k87i", "rertert", "vcbcvbcv"]
    },
    {
      titleQuest: "Title quest 4",
      typeQuestions: "Quiz",
      questions: ["bnvnu,uo", "55675u76875", "dfghbdbv", "sdrtg3456"]
    },
    {
      titleQuest: "Title quest 5",
      typeQuestions: "Quiz",
      questions: ["324535", "Qweqweq4563463we", "nhfjnfj", "457327"]
    }
  ],
  correctAnswers: [1, 1, 1, 1, 1]
}

export const arrQuizData: typeQuizData[] = [quizData1, quizData2]


