import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import QuizService from "../../services/quiz-service"

const QuizzesList = () => {

  const {courseId} = useParams()
  const [quizzes, setQuizzes] = useState([])

  useEffect(() => {
    QuizService.findAllQuizzes()
    .then((quizzes) => setQuizzes(quizzes))
  }, [])

  return (
      <div className={"container"}>
        <h3>Quizzes</h3>
        <ul className={"list-group"}>
          {
            quizzes.map((quiz) => {
                  return (
                      <li
                          key={quiz._id}
                          className={"list-group-item"}>
                        <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                          {quiz.title}
                        </Link>
                        <Link
                            className={"btn btn-primary float-right"}
                            to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                          Start
                        </Link>

                      </li>
                  )
                }
            )
          }
        </ul>

      </div>

  )
}

export default QuizzesList