type PropsAnswers = {
  answers: string[];
}

export default function Answers(PropsAnswers:PropsAnswers){
  return(
    PropsAnswers.answers.map((answer, index) =>{
      <>
        <label>
				  <input key={index} className="input__radio" type="radio" name="answer" value={index} />
				  <span>{answer}</span>
			  </label>
      </>
    })
  )
}
