import React from 'react';
import './course-manager.css'
import CourseTable from "../course-table/course-table";
import {BrowserRouter} from "react-router-dom";

class CourseManager extends React.Component {
  state = {
    courses: [
      {title: 'CS5610', owner: 'me', lastModified: '2021/5/21'},
      {title: 'CS5610', owner: 'me', lastModified: '2021/5/21'},
      {title: 'CS5002', owner: 'me', lastModified: '2021/5/21'}
    ]
  }

  addCourse = () => {
    const newCourse = {
      title: 'New',
      owner: 'me',
      lastModified: 'today'
    }
    this.state.courses.push(newCourse)
    this.setState(this.state)
  }


  render() {
    return (
        <div>
          <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container-fluid">
              <a href="../index.html">
                <i className="fas fa-bars wbdv-nav-menu"/>
              </a>
              <span className="navbar-brand collapse navbar-collapse">Course Manager</span>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0"/>
              <form className="d-flex">
                <input className="form-control mr-2 wbdv-input" type="text"
                       placeholder="New Course Title"/>
                <button className="btn btn-sm wbdv-nav-add" type="submit"><i
                    className="fas fa-plus fa-sm wbdv-nav-plus"
                    onClick={this.addCourse}/></button>
              </form>
            </div>
          </nav>
          <CourseTable courses={this.state.courses}/>
        </div>

    )
  }
}

export default CourseManager