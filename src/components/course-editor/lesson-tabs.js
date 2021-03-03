import React from "react";
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";

const LessonTabs = ({lessons=[], createModule, updateModule, deleteModule}) => {
  const {layout, courseId, moduleId, lessonId} = useParams()

  return (
      <div className="wbdv-editor-nav">
        <ul className="nav nav-tabs">
          {lessonId}
          {
            lessons.map(lesson =>
                <li className="nav-link">
                  <EditableItem
                      to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                      item={lesson}/>
                </li>
            )
          }

        </ul>
      </div>
  )
}


const mapStateToProps = state => {
  return {
    lessons: state.lessonReducer.lessons
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)
(LessonTabs)