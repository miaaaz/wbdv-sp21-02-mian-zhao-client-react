import React from 'react';
import {Link} from "react-router-dom";

class CourseManagerNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
        <div className="sticky-top">
          <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container-fluid">
              <Link to="/">
                <i className="fas fa-bars wbdv-nav-menu"/>
              </Link>
              <span className="navbar-brand collapse navbar-collapse">Course Manager</span>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0"/>
              <form className="d-flex" onSubmit={this.props.addCourse}>
                <input className="form-control mr-2 wbdv-input" type="text"
                       value={this.props.title}
                       placeholder="New Course Title"
                       onChange={this.props.onCourseChange}/>
                <button className="btn btn-sm wbdv-nav-add" type="submit"><i
                    className="fas fa-plus fa-sm wbdv-nav-plus"/></button>
                <div className="wbdv-bottom-fixed-btn">
                  <button className="btn btn-sm wbdv-nav-add" type="submit">
                    <i className="fas fa-plus fa-sm wbdv-nav-plus"/>
                  </button>
                </div>
              </form>
            </div>
          </nav>



        </div>

    )
  }
}


export default CourseManagerNavbar