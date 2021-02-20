import React from 'react';
import './course-manager.css'
import CourseTable from "../course-table/course-table";
import {Route} from "react-router-dom";
import CourseGrid from "../course-grid";
import CourseEditor from "../course-editor/course-editor";
import CourseService from "../../services/course-service";
import CourseManagerNavbar from "../course-manager-navbar";

class CourseManager extends React.Component {
  state = {
    courses: [],
    courseToAdd: {
      title: "",
      owner: "me",
      lastModified: "Today"
    }
  }

  onCourseChange = (e) => {
    this.setState({
      courseToAdd: {
        title: e.target.value,

      }
    })
}

  addCourse = (event) => {

    const newCourse = this.state.courseToAdd
    CourseService.createCourse(newCourse)
    .then(course => this.setState(
        (prevState) => ({
          ...prevState,
          courses: [
            ...prevState.courses,
            course
          ]
        })))
    // Clear input field
    this.setState({courseToAdd: {title: ""}})
    event.preventDefault()
  }



  deleteCourse = (courseToDelete) => {
    CourseService.deleteCourse(courseToDelete._id)
    .then(status => {
      this.setState((prevState) => ({
        ...prevState,
        courses: prevState.courses.filter
        (course => course !== courseToDelete)
      }))
    })
  }

  updateCourse = (course) => {
    console.log(course)
    CourseService.updateCourse(course._id, course)
    .then(status => this.setState((prevState) => ({
      ...prevState,
      courses: prevState.courses.map(
          (c) => c._id === course._id ? course : c)
    })))
  }

  componentDidMount() {
    CourseService.findAllCourses().then((courses) => this.setState({courses}))
  }

  render() {
    return (
        <div>
          {/*<form>*/}
          {/*  <button onClick={this.addCourse}>Add Course</button>*/}
          {/*</form>*/}

          <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container-fluid">
              <a href="../index.html">
                <i className="fas fa-bars wbdv-nav-menu"/>
              </a>
              <span className="navbar-brand collapse navbar-collapse">Course Manager</span>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0"/>
              <form className="d-flex" onSubmit={this.addCourse}>
                <input className="form-control mr-2 wbdv-input" type="text"
                       value={this.state.courseToAdd.title}
                       placeholder="New Course Title"
                       onChange={this.onCourseChange}/>
                <button className="btn btn-sm wbdv-nav-add" type="submit"><i
                    className="fas fa-plus fa-sm wbdv-nav-plus"/></button>
              </form>
            </div>
          </nav>
          <Route path="/courses/table">
            {/*<CourseManagerNavbar addCourse={this.addCourse}/>*/}
            <CourseTable
                updateCourse={this.updateCourse}
                deleteCourse={this.deleteCourse}
                courses={this.state.courses}/>
          </Route>

          <Route path="/courses/grid">
            {/*<CourseManagerNavbar addCourse={this.addCourse}/>*/}
            <CourseGrid
                updateCourse={this.updateCourse}
                deleteCourse={this.deleteCourse}
                courses={this.state.courses}/>
          </Route>


          <Route path="/courses/editor"
                 render={(props) => <CourseEditor {...props}/>}>
          </Route>
        </div>

    )
  }
}

export default CourseManager