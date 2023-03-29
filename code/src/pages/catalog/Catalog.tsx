import './StyleCatalog.css';
import CardQuiz from '../../components/CardQuiz'
import { arrQuizData } from '../../QuizType';
import { NavLink } from 'react-router-dom';

export default function Catalog() {
  const listCardQuiz = arrQuizData.map((quiz) =>
    <CardQuiz id={quiz.id.toString()} title={quiz.titleQuiz} description={quiz.description} tag={quiz.tag} />
  )

  return (
    <div className="wrapper__catalog">
      {listCardQuiz}
      <div className="btn">
        <NavLink className="link" type="button" to={"/"}>На главную</NavLink></div>
    </div>
  );
}
