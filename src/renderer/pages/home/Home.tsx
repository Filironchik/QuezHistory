import logo from './computer.svg';
import './style.css';

import { NavLink, Route } from 'react-router-dom';

export default function Home() {
  return (
    <div className="wrapper ">
      <div className="header">INTERESTING QUIZZES</div>
      <img src={logo} alt="logo" className="logo" />
      <div className="buttons">
        <NavLink className="button" id="btn1" type="button" to={"/catalog"}>Пройти викторину</NavLink>
        <input className="button" id="btn2" type="button" value="Создать викторину" />
      </div>
    </div>
  );
}
