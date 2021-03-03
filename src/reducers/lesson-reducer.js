const initialState = {
  lessons: [
    {title: "lesson 1", _id: "123"},
    {title: "lesson 2", _id: "456"},
    {title: "lesson 3", _id: "789"},
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