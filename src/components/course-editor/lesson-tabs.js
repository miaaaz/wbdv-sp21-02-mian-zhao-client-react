import React, {useEffect} from "react";
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import LessonService from "../../services/lesson-service";

const LessonTabs = (
    {
      lessons=[],
      createLesson,
      updateLesson,
      deleteLesson,
      findLessonsForModule,
      cleanLessons
    }) => {
  const {layout, courseId, moduleId, lessonId} = useParams()


  useEffect(() => {
    if (typeof moduleId !== "undefined") {
      findLessonsForModule(moduleId)
    } else {
      cleanLessons()
    }

  }, [findLessonsForModule, cleanLessons, moduleId])

  return (
      <div className="wbdv-editor-nav wbdv-editor-lessons">
        <ul className="nav nav-tabs">
          {
            lessons.map(lesson =>
                <li key={lesson._id} className="nav-item">
                  <EditableItem
                      to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                      item={lesson}
                      updateItem={updateLesson}
                      deleteItem={deleteLesson}
                      isActive={lesson._id === lessonId ? "active" : ""}
                  />
                </li>
            )
          }
          <button onClick={() => createLesson(moduleId)} className="btn wbdv-grey-color"
                  type="submit">
            <i className="fas fa-plus"></i>
          </button>
        </ul>

        <div>

        </div>

      </div>
  )
}


const mapStateToProps = state => {
  return {
    lessons: state.lessonReducer.lessons
  }
}

const mapDispatchToProps = dispatch => ({
  createLesson: (moduleId) => {
    if (moduleId !== undefined) {
      LessonService.createLesson(moduleId, {title: "New Lesson"})
      .then(theActualLesson => dispatch({
        type: "CREATE_LESSON",
        lesson: theActualLesson
      }))
    } else {
      alert("Please select a module first")
    }
  },
  updateLesson: (lesson) =>
      LessonService.updateLesson(lesson._id, lesson)
      .then(status => dispatch({
        type: "UPDATE_LESSON",
        updatedLesson: lesson
      })),
  deleteLesson: (lessonToDelete) => {
    LessonService.deleteLesson(lessonToDelete._id).then(
        (status) => dispatch({ type: 'DELETE_LESSON', deleteItem: lessonToDelete })
    )

  },
  findLessonsForModule: (moduleId) => {
    LessonService.findLessonsForModule(moduleId)
    .then(theLessons => dispatch({
      type: "FIND_LESSONS_FOR_MODULE",
      lessons: theLessons
    }))
  },
  cleanLessons: () =>
      dispatch({
        type: "CLEAN_LESSON"
      })
})

export default connect(mapStateToProps, mapDispatchToProps)
(LessonTabs)