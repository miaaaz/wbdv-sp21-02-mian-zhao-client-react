import React, {useEffect, useState} from "react";
import QuizService from "../../services/quiz-service";
import {useParams} from "react-router-dom";

const AttemptList = () => {

  const {quizId} = useParams()

  const [quiz, setQuiz] = useState([])
  const [attempts, setAttempts] = useState([])

  useEffect(() => {
    QuizService.findQuizById(quizId).then((quiz) => setQuiz(quiz))
    QuizService.findAttemptsByQuizId(quizId)
    .then((attempts) => setAttempts(attempts))
  }, [quizId])

  return (
      <div className={"container"}>
        <h3>{quiz.title} Attempts</h3>
        <ul className={"list-group"}>
          {
            attempts.map((attempt) => {
                  return (
                      <li
                          key={attempt._id}
                          className={"list-group-item"}>
                        Attempt Score: {attempt.score}%
                      </li>
                  )
                }
            )
          }
        </ul>

      </div>
  )
}

export default AttemptList