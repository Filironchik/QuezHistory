import React from "react";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import './style.css'

type CounterProps = {
  id: string,
  img: string,
  title: string,
  description: string,
  tag: string
}

class CardQuiz extends React.Component<CounterProps>{
  render() {
    return (
      <div className="wrapperCard">
        <img className="img__card" src={this.props.img} alt={this.props.title} />
        <p className="title__card">{this.props.title}</p>
        <p className="description__card">{this.props.description}</p>
        <div className="tag__card">{this.props.tag}</div>
        <input className="button__card" type="button" value="Посмотрть" id={this.props.id} />
      </div>
    )
  }
}

export default CardQuiz;
