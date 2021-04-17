import React from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = ({question, isGraded, setQuestionsWithAns}) => {
  return(
      <div>
        {
          question.type === "TRUE_FALSE" &&
          <TrueFalseQuestion
              setQuestionsWithAns={setQuestionsWithAns}
              isGraded={isGraded}
              question={question}/>
        }
        {
          question.type === "MULTIPLE_CHOICE" &&
          <MultipleChoiceQuestion
              setQuestionsWithAns={setQuestionsWithAns}
              isGraded={isGraded}
              question={question}/>
        }
      </div>
  )
}

export default Question;