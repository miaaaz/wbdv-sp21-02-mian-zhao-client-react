import React from 'react';
import './course-manager.style.css'
import CourseTable from "../course-table/course-table";
import {Route} from "react-router-dom";
import CourseGrid from "../course-grid/course-grid";
import CourseEditor from "../course-editor/course-editor";
import CourseService from "../../services/course-service";
import CourseManagerNavbar from "../course-manager-navbar";

class CourseManager extends React.Component {

  initialSate = {
    title: "",
    owner: "me",
    lastModified: new Date().toLocaleDateString()
  }

  state = {
    courses: [],
    courseToAdd: this.initialSate
  }

  onCourseChange = (e) => {
    this.setState({
      courseToAdd: {
        title: e.target.value,
        owner: "me",
        lastModified: new Date().toLocaleDateString()
      }
    })
  }

  addCourse = (event) => {
    const defaultCourse = {
      title: "New Course",
      owner: "me",
      lastModified: new Date().toLocaleDateString()
    }

    const newCourse = this.state.courseToAdd.title.trim() === ""
        ? defaultCourse
        : this.state.courseToAdd

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
    this.setState({courseToAdd: this.initialSate})
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
    CourseService.updateCourse(course._id, course)
    .then(status => this.setState((prevState) => ({
      ...prevState,
      courses: prevState.courses.map(
          (c) => c._id === course._id ? course : c)
    })))
  }

  componentDidMount = () => {
    CourseService.findAllCourses().then((courses) => this.setState({courses}))
  }

  render() {
    return (
        <div>
          <Route path="/courses/table">
            <CourseManagerNavbar title={this.state.courseToAdd.title}
                                 addCourse={this.addCourse}
                                 onCourseChange={this.onCourseChange}/>
            <CourseTable
                updateCourse={this.updateCourse}
                deleteCourse={this.deleteCourse}
                courses={this.state.courses}/>
          </Route>

          <Route path="/courses/grid">
            <CourseManagerNavbar title={this.state.courseToAdd.title}
                                 addCourse={this.addCourse}
                                 onCourseChange={this.onCourseChange}/>
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