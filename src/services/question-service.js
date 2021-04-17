const QUIZZES_URL = process.env.REACT_APP_QUIZ_URL
// const QUIZZES_URL = 'http://localhost:4000/api/quizzes';

const findQuestionsForQuiz = (qid) => {
  return fetch(`${QUIZZES_URL}/${qid}/questions`)
  .then(response => response.json())
}

export default {
  findQuestionsForQuiz
}
