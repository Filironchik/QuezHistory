import "./QuizStyle.css";

import { useState } from "react";

import { propsQuiz, quizData, typeQuizData } from "./QuizType";
import Answers from "./quiz_components/answers";


export default function Quiz(id: propsQuiz) {
  const data: typeQuizData = quizData; //Запрос по id, получить объект типа quizData

  const [number, setNumber] = useState(1);
  const addNumber = () => setNumber(number + 1);

  const [title, setTitle] = useState(data.answers[number].titleQuest);
  const changeTitle = () => setTitle(data.answers[number].titleQuest);

  const [answers, setAnswers] = useState(data.answers[number]);
  const changeAnsvers = () => setAnswers(data.answers[number]);

  // const [btnState, setBtnState] = useState(false);
  // const changeBtnState = () => setBtnState(btnState == true ? false : true)


  return (
    <div className="wrapper__quiz">
      <p className="title__question">{title}</p>
      <Answers answers={answers} />
      <p>{number} из {data.answers.length}</p>
      <input type="button" value="Ответить" onClick={() => {
        addNumber();
        changeTitle();
        changeAnsvers();
        //changeBtnState();
      }} />
    </div>
  )
}

