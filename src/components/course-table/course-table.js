import React from 'react';
import CourseRow from "./course-row";
import './course-table.style.css'
import {Link} from "react-router-dom";

class CourseTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div className='container'>
          <div className="wbdv-table-wrapper shadow-sm rounded">
            <table
                className="table table-hover table-borderless responsive">

              <thead className="wbdv-thead">
              <tr>
                <td>Title</td>
                <td className="d-none d-sm-table-cell">Owned by</td>
                <td className="d-none d-lg-table-cell">Last Modified</td>
                <td></td>
                <td>
                  <i className="fas fa-folder wbdv-icons"></i>
                  <i className="fas fa-sort-alpha-up wbdv-icons"></i>
                  <Link to="/courses/grid">
                    <i className="fas fa-th fa-sm wbdv-icons"></i>
                  </Link>

                </td>
              </tr>
              </thead>

              <tbody>
              {this.props.courses.map((course) =>
                  <CourseRow
                    key={course._id}
                    course={course}
                    updateCourse={this.props.updateCourse}
                    deleteCourse={this.props.deleteCourse}
                    owner={course.owner}
                    lastModified={course.lastModified}
                    title={course.title}/>
              )}
              </tbody>
            </table>
          </div>
        </div>

    )
  }
}

export default CourseTable