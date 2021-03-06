const initialState = {
  selected: null,
  modules: []
}

const moduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_MODULE":
      return {
        ...state,
        modules: [
            ...state.modules,
            action.module
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
    case "FIND_MODULES_FOR_COURSE":
      return {
        ...state,
        modules: action.modules
      }
    case "SELECT_MODULE":
      return {
        ...state,
        selected: action.updatedModule._id
      }
    default:
      return state
  }
}

export default moduleReducer