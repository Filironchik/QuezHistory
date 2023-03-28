import { questions } from "../QuizType";

type PropsAnswers = {
  answers: questions;
}


export default function Answers(Answers: PropsAnswers) {
  const listAnswers = Answers.answers.answers.map((answer, index) => {
    <>
      <label>
        <input key={index} className="input__radio" type="radio" name="answer" value={index} />
        <span>{answer}</span>
      </label>
    </>
  });

  return <>{listAnswers}</>
}
