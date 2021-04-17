import React, {useState} from "react";

const TrueFalseQuestion = ({question, isGraded, setQuestionsWithAns}) => {
  const [answer, setAnswer] = useState(null)

  return (
      <div>
        <span className={"h5"}>
          {question.question}
        </span>

        <span className={"float-right"}>
           {
             isGraded &&
             answer === question.correct &&
             <i className="fas fa-check m-0"></i>
           }
          {
            isGraded &&
            answer !== question.correct &&
            <i className="fas fa-times text-danger"></i>
          }
        </span>

        <ul className="list-group pt-2">
          <li className={
            `list-group-item
                    ${isGraded && question.correct === "true" ? "list-group-item-success" : ""}
                    ${isGraded && question.correct !== "true" && answer === "true" ? "list-group-item-danger" : ""}
                    `}>
            <input
                type="radio"
                disabled={isGraded}
                onClick={() => {
                  setAnswer("true")
                  setQuestionsWithAns((prev) =>
                      prev.map((q) => {
                            if (q._id === question._id) {
                              return {...q, answer: "true"}
                            } else {
                              return q
                            }
                          }

                      )
                  )
                }}
                name={question._id}/>
            <label className="form-check-label ml-2">
              True
            </label>
            {
              isGraded && question.correct === "true" &&
              <i className={"fas fa-check float-right m-0"}></i>
            }
            {
              isGraded && question.correct !== "true" && answer === "true" &&
              <i className={"fas fa-times float-right"}></i>
            }
          </li>


          <li className={
            `list-group-item
                    ${isGraded && question.correct === "false" ? "list-group-item-success" : ""}
                    ${isGraded && question.correct !== "false" && answer === "false" ? "list-group-item-danger" : ""}

                    `}>
            <input
                type="radio"
                disabled={isGraded}
                onClick={() => {
                  setAnswer("false")
                  setQuestionsWithAns((prev) =>
                      prev.map((q) => {
                            if (q._id === question._id) {
                              return {...q, answer: "false"}
                            } else {
                              return q
                            }
                          }

                      )
                  )
                }}
                name={question._id}/>
            <label className="form-check-label ml-2">
              False
            </label>
            {
              isGraded && question.correct === "false" &&
              <i className={"fas fa-check float-right m-0"}></i>
            }
            {
              isGraded && question.correct !== "false" && answer === "false" &&
              <i className={"fas fa-times float-right"}></i>
            }
          </li>

        </ul>

        <p className={"mt-3"}>
          Your answer: {answer}
        </p>


      </div>
  )
}

export default TrueFalseQuestion;