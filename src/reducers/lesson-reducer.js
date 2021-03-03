const initialState = {
  lessons: [
    {title: "lesson 1", _ID: "123"},
    {title: "lesson 2", _ID: "456"},
    {title: "lesson 3", _ID: "789"},
  ]
}

const lessonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_LESSON":
    case "DELETE_LESSON":
    case "UPDATE_LESSON":
    default:
      return state
  }
}

export default lessonReducer