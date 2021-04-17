// const QUIZZES_URL = "https://wbdv-sp21-mian-server-node.herokuapp.com/api/quizzes";
const QUIZZES_URL = process.env.REACT_APP_QUIZ_URL

const findQuestionsForQuiz = (qid) => {
  return fetch(`${QUIZZES_URL}/${qid}/questions`)
  .then(response => response.json())
}

export default {
  findQuestionsForQuiz
}
