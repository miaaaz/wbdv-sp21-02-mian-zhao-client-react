const initialState = {
  lessons: []
}

const lessonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_LESSON":
      return {
        ...state,
        lessons: [
          ...state.lessons,
          action.lesson
        ]
      }
    case "DELETE_LESSON":
      return {
        ...state,
        lessons: state.lessons.filter(lesson => {
          if (lesson._id !== action.deleteItem._id) {
            return true
          } else {
            return false
          }
        })
      }
    case "UPDATE_LESSON":
      return {
        ...state,
        lessons: state.lessons.map(lesson => {
          if (lesson._id === action.updatedLesson._id) {
            return action.updatedLesson
          } else {
            return lesson
          }
        })
      }
    case "FIND_LESSONS_FOR_MODULE":
      return {
        ...state,
        lessons: action.lessons
      }
    case "CLEAN_LESSON":
      return {
        ...state,
        lessons: []
      }
    default:
      return state
  }
}

export default lessonReducer