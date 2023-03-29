import React from "react";

import './styleCardQuiz.css'
import { CounterProps } from "../QuizType";
import { NavLink } from "react-router-dom";

class CardQuiz extends React.Component<CounterProps>{
  render() {
    return (
      <div className="wrapperCard">
        <p className="title__card">{this.props.title}</p>
        <p className="description__card">{this.props.description}</p>
        <div className="tag__card">{this.props.tag}</div>
        <NavLink className="button__card" type="button" id={this.props.id} to={"/quiz/" + this.props.id}>Пройти</NavLink>
      </div>
    )
  }
}

export default CardQuiz;
