export type propsQuiz = {
  id: number;
}

export type answersCorrelate = {
  firstColumn: string[];
  secondColumn: string[];
}

export type questions = {
  titleQuest: string;
  typeQuestions: "Quiz" | "MultipleChoice" | "Correlate";
  answers: string[];
}

export type typeQuizData = {
  id: number;
  titleQuiz: string;
  answers: questions[]
}

export const quizData: typeQuizData = {
  id: 123654,
  titleQuiz: "Title  quiz 1!",
  answers: [
    {
      titleQuest: "Title quest 1",
      typeQuestions: "Quiz",
      answers: ["Asdasdasd", "Qweqweqwe", "Zxczxczxc", "Ghjghjghj"]
    },
    {
      titleQuest: "Title quest 2",
      typeQuestions: "Quiz",
      answers: ["sgdfgdfg", "Qwedfgdfgqweqwe", "dfgdg", "dfgdfg"]
    },
    {
      titleQuest: "Title quest 3",
      typeQuestions: "Quiz",
      answers: ["s346535645", "j6y87k87i", "rertert", "vcbcvbcv"]
    },
    {
      titleQuest: "Title quest 4",
      typeQuestions: "Quiz",
      answers: ["bnvnu,uo", "55675u76875", "dfghbdbv", "sdrtg3456"]
    },
    {
      titleQuest: "Title quest 5",
      typeQuestions: "Quiz",
      answers: ["324535", "Qweqweq4563463we", "nhfjnfj", "457327"]
    }
  ]
}


