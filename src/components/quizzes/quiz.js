import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Question from "./questions/question";
import QuestionService from "../../services/question-service"
import QuizService from "../../services/quiz-service"

const Quiz = () => {

  const {courseId, quizId} = useParams()

  const [quiz, setQuiz] = useState([])
  const [questions, setQuestions] = useState([])
  const [isGraded, setIsGraded] = useState(false)
  const [curScore, setCurScore] = useState(null)
  const [questionsWithAns, setQuestionsWithAns] = useState([])



  const handleSubmit = () => {
    if (questions) {
      QuizService.submitQuiz(quizId, questions)
    }

  }

  useEffect(() => {
    QuestionService.findQuestionsForQuiz(quizId)
    .then((question) => {
      setQuestions(question)
      setQuestionsWithAns(question)
    })
    QuizService.findQuizById(quizId).then((quiz) => setQuiz(quiz))
  }, [quizId])

  return (
      <div className={"container"}>
        <h3>{quiz.title}</h3>
        <ul className={"list-group mb-2"}>
          {
            questions.map((question) => {
              return (
                  <li
                      key={question._id}
                      className={"list-group-item"}>
                    <Question
                        question={question}
                        isGraded={isGraded}
                        setQuestionsWithAns={setQuestionsWithAns}
                    />


                  </li>
              )
            })
          }
          <li className={"list-group-item"}>
            {
              isGraded &&
              <span className="h3">
                Score: {curScore}%
              </span>
            }
            <button
                onClick={() => {
                  setIsGraded(true)
                  if (!isGraded) {
                    QuizService.submitQuiz(quizId, questionsWithAns).then(attempt => setCurScore(attempt.score))
                  }

                }}
                type="button"
                className="btn btn-success float-right">
              Submit
            </button>
          </li>
        </ul>

        <Link
            to={`/courses/${courseId}/quizzes/${quiz._id}/attempts`}>
          View past attempts
        </Link>


      </div>
  )
}

export default Quiz