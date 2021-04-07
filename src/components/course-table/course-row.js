import React, { useState }from 'react';
import {Link} from "react-router-dom";


const CourseRow =
    ({course, title, owner, lastModified, deleteCourse, updateCourse}) => {

      const [editing, setEditing] = useState(false)
      const [newTitle, setNewTitle] = useState(title)

      const saveTitle = () => {
        setEditing(false)
        const newCourse = {
          ...course,
          title: newTitle,
          lastModified: new Date().toLocaleDateString()
        }
        updateCourse(newCourse)
      }

      return (
          <tr>
            <td>
              {
                !editing &&
                <Link to={`/courses/table/edit/${course._id}`}>
                  <i className="far fa-file-alt wbdv-file-icon fa-fw"></i>
                  <span> {course.title}</span>
                </Link>
              }

              {
                editing &&
                <input
                    onChange={(event) => setNewTitle(event.target.value)}
                    value={newTitle}
                    className="form-control"/>
              }

            </td>
            <td className="d-none d-sm-table-cell">{owner}</td>
            <td className="d-none d-lg-table-cell">{lastModified}</td>
            <td>
              <Link
                  to={`/courses/${course._id}/quizzes`}>
                Quizzes
              </Link>

            </td>
            <td>
              {editing && <i onClick={() => saveTitle()} className="fas fa-check wbdv-icons"></i>}
              {editing && <i onClick={() => {setEditing(false); deleteCourse(course)}} className="far fa-trash-alt wbdv-icons"></i>}
              {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit wbdv-icons"></i>}
            </td>
          </tr>
      )
    }





export default CourseRow