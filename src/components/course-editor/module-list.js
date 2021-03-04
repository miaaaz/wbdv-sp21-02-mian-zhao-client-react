import React, { useEffect } from "react";
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import { useParams } from "react-router-dom";
import moduleService from "../../services/module-service"

const ModuleList = (
    {
      modules=[],
      createModule,
      updateModule,
      deleteModule,
      findModulesForCourse
    }) => {
  const {layout, courseId, moduleId} = useParams()

  useEffect(() => {
    findModulesForCourse(courseId)
  }, [])

  return (
      <nav className="col-md-2 d-md-block wbdv-sidebar-wrapper collapse">
        <div className="wbdv-module-nav">
          <ul className="wbdv-sidebar">
            {
              modules.map(module =>
                  <li key={module._id} className="wbdv-sidebar-item d-flex justify-content-between align-items-center">
                    {/*<a className="" href="#">*/}
                    {/*  {module.title}*/}
                    {/*</a>*/}
                    <EditableItem
                        to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                        updateItem={updateModule}
                        item={module}
                        isActive={"active"}
                        deleteItem={deleteModule}
                    />
                  </li>
              )
            }

          </ul>
          <div className="wbdv-module-add-div gap-2">
            <button onClick={() => createModule(courseId)} className="btn wbdv-module-add-btn wbdv-button-on-hover"
                    type="submit">
              <i className="fas fa-plus wbdv-module-add-icon"></i>
            </button>
          </div>
        </div>


      </nav>
  )
}


const mapStateToProps = state => {
  return {
    modules: state.moduleReducer.modules
  }
}

const mapDispatchToProps = (dispatch) => ({
  createModule: (courseId) => {
    moduleService.createModule(courseId, {title: "New Module"})
    .then(theActualModule => dispatch({
      type: "CREATE_MODULE",
      module: theActualModule
    }))
  },
    updateModule: (module) =>
        moduleService.updateModule(module._id, module)
        .then(status => dispatch({
          type: "UPDATE_MODULE",
          updatedModule: module
        })),
    deleteModule: (moduleToDelete) => {
      moduleService.deleteModule(moduleToDelete._id).then(
          (status) => dispatch({ type: 'DELETE_MODULE', deleteItem: moduleToDelete })
      )

    },
    findModulesForCourse: (courseId) => {
      moduleService.findModulesForCourse(courseId)
      .then(theModules => dispatch({
        type: "FIND_MODULES_FOR_COURSE",
        modules: theModules
      }))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)
(ModuleList)