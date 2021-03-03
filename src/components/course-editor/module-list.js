import React from "react";
import {connect} from 'react-redux'
import EditableItem from "../editable-item";

const ModuleList = ({modules=[], createModule, updateModule, deleteModule}) =>
    <nav className="col-md-2 d-md-block wbdv-sidebar-wrapper collapse">
      <div className="wbdv-module-nav">
        <ul className="wbdv-sidebar">
          {
            modules.map(module =>
                <li className="wbdv-sidebar-item d-flex justify-content-between align-items-center">
                  {/*<a className="" href="#">*/}
                  {/*  {module.title}*/}
                  {/*</a>*/}
                  <EditableItem
                      updateItem={updateModule}
                      item={module}
                      deleteItem={deleteModule}
                  />
                  {/*<a className="" href="#"><i*/}
                  {/*    className="fas fa-times wbdv-module-delete-icon"></i></a>*/}
                </li>
            )
          }

        </ul>
        <div className="wbdv-module-add-div gap-2">
          <button onClick={createModule} className="btn wbdv-module-add-btn wbdv-button-on-hover"
                  type="submit">
            <i className="fas fa-plus wbdv-module-add-icon"></i>
          </button>
        </div>
      </div>

    </nav>

const mapStateToProps = state => {
  return {
    modules: state.moduleReducer.modules
  }
}

const mapDispatchToProps = (dispatch) => ({
    createModule: () => dispatch({ type: 'CREATE_MODULE' }),
    updateModule: (newItem) => dispatch({ type: 'UPDATE_MODULE', updatedModule: newItem }),
  deleteModule: (deleteItem) => dispatch({ type: 'DELETE_MODULE', deleteItem: deleteItem })
})

export default connect(mapStateToProps, mapDispatchToProps)
(ModuleList)