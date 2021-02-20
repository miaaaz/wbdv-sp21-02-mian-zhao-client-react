import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = ({course, updateCourse, deleteCourse}) => {
  const [editing, setEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(course.title)

  const saveTitle = () => {
    setEditing(false)
    const newCourse = {
      ...course,
      title: newTitle
    }
    updateCourse(newCourse)
  }

  return (
      <div className="col mb-4">
        <div className="card">
          <img src="https://dummyimage.com/600x400/000/fff.jpg"
               className="card-img-top" alt="..."/>
          <div className="card-body">
            {
              !editing &&
              <Link to="/courses/editor" className="card-title">{course.title}</Link>
            }

            {
              editing &&
              <input
                  onChange={(event) => setNewTitle(event.target.value)}
                  value={newTitle}
                  className="form-control mb-2"/>
            }

            <p className="card-text">Some description</p>
            <Link to="/courses/editor" className="btn wbdv-button">{course.title}</Link>
          </div>
          <div className="card-footer">
            <div className="float-right">
              {editing && <i onClick={() => saveTitle()} className="fas fa-check wbdv-icons"></i>}
              {editing && <i onClick={() => {setEditing(false); deleteCourse(course)}} className="far fa-trash-alt wbdv-icons"></i>}
              {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit wbdv-icons"></i>}
            </div>
          </div>
        </div>
      </div>
  )
}







export default CourseCard