import React, {useState} from "react";

const MultipleChoiceQuestion = ({question, isGraded, setQuestionsWithAns}) => {

  const [answer, setAnswer] = useState([])

  return(
      <div>
        <span className={"h5"}>{question.question}</span>
        <span className={"float-right"}>
          {
            isGraded &&
            question.correct === answer &&
            <i className={"fas fa-check m-0"}></i>
          }
          {
            isGraded &&
            question.correct !== answer &&
            <i className={"fas fa-times text-danger"}></i>
          }
        </span>
        {
          <ul className="list-group pt-2">
            {question.choices.map((choice) => {
              return (
                  <li
                      key={choice}
                      className={
                    `list-group-item
                    ${isGraded && question.correct === choice ? "list-group-item-success" : ``}
                    ${isGraded && question.correct !== choice && choice === answer ? "list-group-item-danger" : ``}
                    
                    `}>
                    <input type="radio"
                           name={question._id}
                           disabled={isGraded}
                           onClick={() => {
                             setAnswer(choice)
                             setQuestionsWithAns((prev) =>
                               prev.map((q) => {
                                 if (q._id === question._id) {
                                   return {...q, answer: choice}
                                 } else {
                                   return q
                                 }
                               }

                               )
                             )
                           }}
                    />
                    <label className="form-check-label ml-2" htmlFor="gridRadios2">
                      {choice}
                    </label>
                    {
                      isGraded && question.correct === choice &&
                      <i className={"fas fa-check float-right m-0"}></i>
                    }
                    {
                      isGraded && question.correct !== choice && choice === answer &&
                      <i className={"fas fa-times float-right"}></i>
                    }


                  </li>

              )
            })}
          </ul>

        }
        <p className={"mt-3"}>
          Your answer: {answer}
        </p>


      </div>
  )
}

export default MultipleChoiceQuestion;