import "./QuizStyle.css";

import { useState } from "react";

import { arrQuizData } from "../../QuizType";
import { NavLink, useParams } from "react-router-dom";

export default function Quiz() {

  const { id } = useParams();

  const data = arrQuizData[changeData(id)];
  function changeData(_id: string | undefined) {
    if (_id !== undefined) {
      return parseInt(_id)
    } else return 0;
  }

  const [correctUserAnswer, setCorrectUserAnswer] = useState(0);
  const addCorrectUserAnswer = () => setCorrectUserAnswer(correctUserAnswer + 1)

  const [number, setNumber] = useState(1);
  const addNumber = () => setNumber(number + 1);

  const [title, setTitle] = useState(data.answers[number - 1].titleQuest);
  const changeTitle = () => setTitle(data.answers[number].titleQuest);

  const [answer, setAnswers] = useState(data.answers[number - 1].questions);
  const changeAnsvers = () => setAnswers(data.answers[number].questions);

  const [correctAnswer, setCorrectAnswer] = useState([0, 0]);
  const openAnswer = (correct: number, incorrect: number) => setCorrectAnswer([correct, incorrect]);

  const [stateResponse, setStateResponse] = useState(false);
  const changeStateResponse = () => setStateResponse(!stateResponse);

  const [valueClick, setValueClick] = useState(0);
  const giveValueClick = (value: number) => setValueClick(value);

  const [disabled, setDisabled] = useState(false);
  const changeDisabled = () => setDisabled(!disabled)

  const [stateQuiz, setStateQuiz] = useState(true);
  const changeStateQuiz = () => setStateQuiz(!stateQuiz)

  const toAnswer = (num: number) => {
    if (num === data.correctAnswers[number - 1]) {
      openAnswer(num, 0);
      addCorrectUserAnswer();
    } else openAnswer(data.correctAnswers[number], num);
    giveValueClick(num);
    changeStateResponse();
    changeDisabled();
  }

  const nextAnswer = () => {
    if (number < data.answers.length) {
      addNumber();
      changeTitle();
      changeAnsvers();
      changeStateResponse();
      changeDisabled();
    } else changeStateQuiz();
  }



  function setClassName(num: number) {
    if (correctAnswer[0] === 0) return ""
    else if (correctAnswer[0] === num && disabled === true) return "correctAnswer"
    else if (num === valueClick && disabled === true) return "incorrectAnswer"
  }

  if (stateQuiz === true) {
    return (
      <div className="wrap">
        <div className="wrapper__quiz">
          <p className="title__question">{title}</p>
          <div className="answers">
            <button onClick={() => { toAnswer(1); }} className={setClassName(1) + " btn__quiz"} disabled={disabled}>{answer[0]}</button>
            <button onClick={() => { toAnswer(2); }} className={setClassName(2) + " btn__quiz"} disabled={disabled}>{answer[1]}</button>
            <button onClick={() => { toAnswer(3); }} className={setClassName(3) + " btn__quiz"} disabled={disabled}>{answer[2]}</button>
            <button onClick={() => { toAnswer(4); }} className={setClassName(4) + " btn__quiz"} disabled={disabled}>{answer[3]}</button>
          </div>
          <div className="wrap_box">
            <p className="information">{correctUserAnswer} правильных из {data.answers.length}</p>
            <input type="button" value="Дальше" onClick={() => { nextAnswer() }} className={disabled === false ? "hide btnNext" : "btnNext"} />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="wrap">
        <div className="wrapper__quiz">
          <p className="title__question">Викторина: {data.titleQuiz}!</p>
          <p className="result">Вы ответили приавльно на {correctUserAnswer} вопросов из {data.answers.length}</p>
          <div className="wrap_box">
            <div className="btn" >
              <NavLink className="link2" type="button" to={"/catalog"}>Другие викторины</NavLink></div>
            <div className="btn">
              <NavLink className="link" type="button" to={"/"}>На главную</NavLink></div>
          </div>
        </div>
      </div>
    )
  }
}

