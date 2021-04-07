import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Question from "./questions/question";
import QuestionService from "../../services/question-service"
import QuizService from "../../services/quiz-service"

const Quiz = () => {

  const {quizId} = useParams()

  const [quiz, setQuiz] = useState([])
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    QuestionService.findQuestionsForQuiz(quizId)
    .then((question) => {
      setQuestions(question)
    })
    QuizService.findQuizById(quizId).then((quiz) => setQuiz(quiz))

  })

  return (
      <div className={"container"}>
        <h3>{quiz.title}</h3>
        <ul className={"list-group"}>
          {
            questions.map((question) => {
              return (
                  <li
                      key={question._id}
                      className={"list-group-item"}>
                    <Question
                        question={question}
                    />

                  </li>
              )
            })
          }
        </ul>
      </div>
  )
}

export default Quiz