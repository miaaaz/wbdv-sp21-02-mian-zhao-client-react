import React from 'react';
import CourseService from "../services/course-service";

class CourseManagerNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top">
          <div className="container-fluid">
            <a href="../index.html">
              <i className="fas fa-bars wbdv-nav-menu"/>
            </a>
            <span className="navbar-brand collapse navbar-collapse">Course Manager</span>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"/>
            <form className="d-flex" onSubmit={this.addCourse}>
              <input className="form-control mr-2 wbdv-input" type="text"
                     placeholder="New Course Title"
                     onChange={this.onCourseChange}/>
              <button className="btn btn-sm wbdv-nav-add" type="submit"><i
                  className="fas fa-plus fa-sm wbdv-nav-plus"/></button>
            </form>
          </div>
        </nav>
    )
  }
}


export default CourseManagerNavbar