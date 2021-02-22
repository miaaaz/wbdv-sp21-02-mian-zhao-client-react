import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";
import './course-grid.style.css'

const CourseGrid = ({courses, updateCourse, deleteCourse}) =>
    <div className="container">
      <div className="row mb-2">
        <span className="col d-none d-md-table-cell">Recent Documents</span>
        <span className="col text-center d-none d-md-table-cell">
          Owned by me
          <i className="fas fa-sort-down ml-1"></i>
        </span>
        <div className="col align-middle">
          <Link to="/courses/table">
            <i className="fas fa-list fa-sm wbdv-icons float-right"></i>
          </Link>
          <a href="#">
            <i className="fas fa-sort-alpha-up wbdv-icons float-right"></i>
          </a>
          <a href="#">
            <i className="fas fa-folder wbdv-icons float-right"></i>
          </a>

        </div>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
        {
          courses.map((course, index) =>
              <CourseCard
                  key={index}
                  updateCourse={updateCourse}
                  deleteCourse={deleteCourse}
                  course={course}/>
          )
        }
      </div>
    </div>

export default CourseGrid