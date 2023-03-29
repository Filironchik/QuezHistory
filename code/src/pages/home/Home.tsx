import './styleHome.css';

import { NavLink } from 'react-router-dom';



export default function Home() {
  return (
    <div className="wrap">
      <div className="wrapper__home ">
        <div className="header">INTERESTING QUIZZES</div>
        <div className="buttons">
          <NavLink className="button_link button" id="btn1" type="button" to={"/catalog"}>Пройти викторину</NavLink>
          <input className="button" id="btn2" type="button" value="Создать викторину" onClick={() => alert("В разработке. Разработчик https://t.me/FILIkR")} />
        </div>
      </div>
    </div >
  );
}
