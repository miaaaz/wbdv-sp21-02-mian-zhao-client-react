import React from "react";
import {connect} from 'react-redux'
import EditableItem from "../editable-item";

const LessonTabs = ({lessons=[]}) =>
    <div className="wbdv-editor-nav">
      <ul className="nav nav-tabs">
        {
          lessons.map(lesson =>
              <li className="nav-link">
                <EditableItem item={lesson}/>
              </li>
          )
        }

      </ul>
    </div>

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