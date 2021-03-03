const initialState = {
  modules: [
    {title: "CS5610", _id: "123"},
    {title: "CS5610", _id: "456"},
    {title: "CS5610", _id: "789"},
    {title: "CS5610", _id: "000"},
  ]
}

const moduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_MODULE":
      const newModule = {
        title: "New Course",
        _id: (new Date()).getTime()
      }
      return {
        ...state,
        modules: [
            ...state.modules,
            newModule
        ]
      }
    case "DELETE_MODULE":
      return {
        ...state,
        modules: state.modules.filter(module => {
          if (module._id !== action.deleteItem._id) {
            return true
          } else {
            return false
          }
        })
      }
    case "UPDATE_MODULE":
      return {
        ...state,
        modules: state.modules.map(module => {
          if (module._id === action.updatedModule._id) {
            return action.updatedModule
          } else {
            return module
          }
        })
      }
    default:
      return state
  }
}

export default moduleReducer