import { useState } from "react";
import "./QuizStyle.css"
import React from "react";
import { type } from "os";


type answersCorrelate = {
  firstColumn: string[];
  secondColumn: string[];
}

type questions = {
    typeQuestions:  "Quiz" | "MultipleChoice" | "Correlate";
    answers: string[] | answersCorrelate;
}

type quizData = {
  id: number;
  titleQuiz: string;
  answers: questions[]
}

type QuizProps = {
  id:number;
}

type QuizState = {
  number: number;
  title: string;
  btnState: boolean;
}

const quizData: quizData = {
  id: 123654,
  titleQuiz: "Title  quiz 1!",
  answers: [
    {
      typeQuestions: "Quiz",
      answers: ["Asdasdasd", "Qweqweqwe", "Zxczxczxc", "Ghjghjghj"]
    },
    {
      typeQuestions: "Quiz",
      answers: ["sgdfgdfg", "Qwedfgdfgqweqwe", "dfgdg", "dfgdfg"]
    },
    {
      typeQuestions: "Quiz",
      answers: ["s346535645", "j6y87k87i", "rertert", "vcbcvbcv"]
    },
    {
      typeQuestions: "Quiz",
      answers: ["bnvnu,uo", "55675u76875", "dfghbdbv", "sdrtg3456"]
    },
    {
      typeQuestions: "Quiz",
      answers: ["324535", "Qweqweq4563463we", "nhfjnfj", "457327"]
    }
  ]
}

class Quiz extends React.Component<QuizProps, QuizState>{

  state: QuizState = {
    number: 1,
    title: "Default title!",
    btnState: false
  }

  constructor(props:QuizProps){
    super(props);
    titleQuiz: this.requestQuiz(props.id).titleQuiz;
    quantityAnswers: this.requestQuiz(props.id).answers.length;
  }

  requestQuiz(id:number){
    return quizData;
  }

  render(){
    return(
    <div className="wrapper__quiz">
      <div className="title__question">{this.state.number}. {this.state.title}</div>
        <Answers/>
      <div> {this.state.number} из {this.quantityAnswers} </div>
      <input type="button" value="Ответить" {/*disabled={this.state.btnState}*/} onClick={this.requestQuestion()} />
    </div>
  )
    }
}

function Answers(){
  return(
    <>{
      answers.map((answer, index) =>{
        <label>
				  <input key={index} className="input__radio" type="radio" name="answer" value={index} />
				  <span>{answer}</span>
			  </label>
      })
    }</>
  )
}

