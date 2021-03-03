import React from 'react'
import './course-editor.style.css'
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux"
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import {useParams} from "react-router-dom";
import CourseService from "../../services/course-service"

const reducer = combineReducers({
  moduleReducer: moduleReducer,
  lessonReducer: lessonReducer
})

const store = createStore(reducer)

const CourseEditor = ({history, modules}) => {
  const {layout, courseId, moduleId} = useParams();

  return (
      <Provider store={store}>
        <div>
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid d-flex justify-content-between">
              <div className="nav-item">
                <i onClick={() => history.goBack()}
                   className="fas fa-arrow-left wbdv-grey-color nav-link wbdv-btn-close"/>
              </div>
              <a className="navbar-brand" href="#">
                <i className="fas fa-edit"/>
                <span className="ml-2">

           </span>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent" aria-expanded="false"
                      aria-label="Toggle navigation">
        <span className="navbar-toggler-icon">
          <i className="fas fa-bars"/>
        </span>
              </button>
              <div className="collapse navbar-collapse wbdv-nav-items"
                   id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0 flex-row wbdv-nav-group">
                  <li className="nav-item wbdv-nav-item">
                    <a className="nav-link active" aria-current="page"
                       href="#">Build</a>
                  </li>
                  <li className="nav-item wbdv-nav-item">
                    <a className="nav-link" href="#">Pages</a>
                  </li>
                  <li className="nav-item wbdv-nav-item">
                    <a className="nav-link" href="#">Theme</a>
                  </li>
                  <li className="nav-item wbdv-nav-item">
                    <a className="nav-link" href="#">Store</a>
                  </li>
                  <li className="nav-item wbdv-nav-item">
                    <a className="nav-link" href="#">Apps</a>
                  </li>
                  <li className="nav-item wbdv-nav-item">
                    <a className="nav-link" href="#">Settings</a>
                  </li>
                </ul>
                <form className="d-flex">
                  <button className="btn wbdv-grey-color" type="submit"><i
                      className="fas fa-plus"></i></button>
                </form>
              </div>
            </div>
          </nav>

          <div>
            <div className="row">
              <ModuleList/>

              <div className="col-10 wbdv-editor-wrapper">
                <LessonTabs/>
                <div className="wbdv-editor-nav">
                  <ul className="nav nav-pills">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page"
                         href="#">Topic1</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="#">Topic2</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="fas fa-plus wbdv-add-topic"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <br/>
                <div className="wbdv-editor-main">
                  Content intentionally left blank
                </div>

              </div>
            </div>
          </div>
        </div>
      </Provider>
  )
}




export default CourseEditor