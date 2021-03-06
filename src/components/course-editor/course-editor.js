import React, {useEffect} from 'react'
import './course-editor.style.css'
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import {combineReducers, createStore} from "redux";
import {connect, Provider} from "react-redux"
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import {Link, useParams} from "react-router-dom";
import CourseService from "../../services/course-service"
import topicReducer from "../../reducers/topic-reducer";
import TopicPills from "./topic-pills";
import LessonService from "../../services/lesson-service";
import courseReducer from "../../reducers/course-reducer";
import CourseManagerNavbar from "../course-manager/course-manager-navbar";
import CourseEditorNavbar from "./course-editor-navbar";

const reducer = combineReducers({
  moduleReducer,
  lessonReducer,
  topicReducer,
  courseReducer
})

const store = createStore(reducer)

const CourseEditor = () => {


  return (
      <Provider store={store}>
        <CourseEditorNavbar/>
            <div className="row">
              <ModuleList/>

              <div className="col-10 wbdv-editor-wrapper">
                <LessonTabs/>
                <TopicPills/>
                <br/>
                <div className="wbdv-editor-main">
                  Content intentionally left blank
                </div>


              </div>
            </div>
      </Provider>
  )
}


export default CourseEditor