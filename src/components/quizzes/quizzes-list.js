import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import QuizService from "../../services/quiz-service"

const QuizzesList = () => {

  const {courseId} = useParams()
  const [quizzes, setQuizzes] = useState([])

  useEffect(() => {
    QuizService.findAllQuizzes()
    .then((quizzes) => setQuizzes(quizzes))
  }, [courseId])

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

                        <Link
                            className={"btn btn-success float-right mr-2"}
                            to={`/courses/${courseId}/quizzes/${quiz._id}/attempts`}>
                          Show attempts history
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