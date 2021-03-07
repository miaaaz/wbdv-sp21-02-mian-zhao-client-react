const initialState = {
  topics: []
}

const topicReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_TOPIC":
      return {
        ...state,
        topics: [
          ...state.topics,
          action.topic
        ]
      }
    case "DELETE_TOPIC":
      return {
        ...state,
        topics: state.topics.filter(topic => {
          if (topic._id !== action.deleteItem._id) {
            return true
          } else {
            return false
          }
        })
      }
    case "UPDATE_TOPIC":
      return {
        ...state,
        topics: state.topics.map(topic => {
          if (topic._id === action.updatedTopic._id) {
            return action.updatedTopic
          } else {
            return topic
          }
        })
      }
    case "FIND_TOPICS_FOR_LESSON":
      return {
        ...state,
        topics: action.topics
      }
    case "CLEAN_TOPIC":
      return {
        ...state,
        topics: []
      }
    default:
      return state
  }
}

export default topicReducer