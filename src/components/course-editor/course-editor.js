import React, {useEffect} from 'react'
import './course-editor.style.css'
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import {combineReducers, createStore} from "redux";
import {connect, Provider} from "react-redux"
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import topicReducer from "../../reducers/topic-reducer";
import TopicPills from "./topic-pills";
import courseReducer from "../../reducers/course-reducer";
import CourseEditorNavbar from "./course-editor-navbar";
import widgetReducer from "../../reducers/widget-reducer";
import WidgetList from "../widgets/widget-list";

const reducer = combineReducers({
  moduleReducer,
  lessonReducer,
  topicReducer,
  courseReducer,
  widgetReducer
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
                <WidgetList/>
                {/*<br/>*/}
                {/*<div className="wbdv-editor-main">*/}
                {/*  Content intentionally left blank*/}
                {/*</div>*/}


              </div>
            </div>
      </Provider>
  )
}


export default CourseEditor