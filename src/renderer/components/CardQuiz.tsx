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

const Quiz = () => {
  const port = process.env.PORT || 1212;


  const { quizid } = useParams();

  const [quizdata, quizdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:" + port + "/quiz/" + quizid).then((res) =>{
        return res.json();
    }).then((resp)=>{
      quizdatachange(resp);
    }).catch((err) => {
        console.log(err.message);
    })
  }, []);
  return(
    <div className="wrapperCard">
        <p className="title__card">{quizdata.title}</p>
        <p className="description__card">{quizdata.description}</p>
        <div className="tag__card">{quizdata.tag}</div>
        <input className="button__card" type="button" value="Посмотрть" id={quizdata.id} />
      </div>
  )
}

export default Quiz;

// class CardQuiz extends React.Component<CounterProps>{



//   render() {
//     return (
//       <div className="wrapperCard">
//         <img className="img__card" src={this.props.img} alt={this.props.title} />
//         <p className="title__card">{this.props.title}</p>
//         <p className="description__card">{this.props.description}</p>
//         <div className="tag__card">{this.props.tag}</div>
//         <input className="button__card" type="button" value="Посмотрть" id={this.props.id} />
//       </div>
//     )
//   }
// }

// export default CardQuiz;
