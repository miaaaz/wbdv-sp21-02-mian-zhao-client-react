import React from 'react'
import './course-editor.style.css'

const CourseEditor = ({history}) =>
  <div>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid d-flex justify-content-between">
        <div className="nav-item">
          <i onClick={() => history.goBack()}
             className="fas fa-arrow-left wbdv-grey-color nav-link wbdv-btn-close"/>
        </div>
        <a className="navbar-brand" href="#">
          <i className="fas fa-edit"/>
           <span className="ml-2">
             New Course
           </span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
        <span className="navbar-toggler-icon">
          <i className="fas fa-bars"/>
        </span>
        </button>
        <div className="collapse navbar-collapse wbdv-nav-items"
             id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 flex-row wbdv-nav-group">
            <li className="nav-item wbdv-nav-item">
              <a className="nav-link active" aria-current="page"
                 href="#">Build</a>
            </li>
            <li className="nav-item wbdv-nav-item">
              <a className="nav-link" href="#">Pages</a>
            </li>
            <li className="nav-item wbdv-nav-item">
              <a className="nav-link" href="#">Theme</a>
            </li>
            <li className="nav-item wbdv-nav-item">
              <a className="nav-link" href="#">Store</a>
            </li>
            <li className="nav-item wbdv-nav-item">
              <a className="nav-link" href="#">Apps</a>
            </li>
            <li className="nav-item wbdv-nav-item">
              <a className="nav-link" href="#">Settings</a>
            </li>
          </ul>
          <form className="d-flex">
            <button className="btn wbdv-grey-color" type="submit"><i
                className="fas fa-plus"></i></button>
          </form>
        </div>
      </div>
    </nav>

    <div>
      <div className="row">
        <nav className="col-md-2 d-md-block wbdv-sidebar-wrapper collapse">
          <div className="wbdv-module-nav">
            <ul className="wbdv-sidebar">
              <li className="wbdv-sidebar-item d-flex justify-content-between align-items-center">
                <a className="" href="#">Module1 </a>
                <a className="" href="#"><i
                    className="fas fa-times wbdv-module-delete-icon"></i></a>

              </li>
              <li className="wbdv-sidebar-item active d-flex justify-content-between align-items-center">
                <a className="active" href="#">Module2</a>
                <a className="active" href="#"><i
                    className="fas fa-times wbdv-module-delete-icon"></i></a>
              </li>
              <li className="wbdv-sidebar-item d-flex justify-content-between align-items-center">
                <a href="#">Module3</a>
                <a className="" href="#"><i
                    className="fas fa-times wbdv-module-delete-icon"></i></a>
              </li>
              <li className="wbdv-sidebar-item d-flex justify-content-between align-items-center">
                <a href="#">Module4</a>
                <a className="" href="#"><i
                    className="fas fa-times wbdv-module-delete-icon"></i></a>
              </li>
              <li className="wbdv-sidebar-item d-flex justify-content-between align-items-center">
                <a href="#">Module5</a>
                <a className="" href="#"><i
                    className="fas fa-times wbdv-module-delete-icon"></i></a>
              </li>

            </ul>
            <div className="wbdv-module-add-div gap-2">
              <button className="btn wbdv-module-add-btn wbdv-button-on-hover"
                      type="submit">
                <i className="fas fa-plus wbdv-module-add-icon"></i>
              </button>
            </div>
          </div>

        </nav>
        <div className="col-10 wbdv-editor-wrapper">
          <div className="wbdv-editor-nav">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page"
                   href="#">Topic1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">Topic2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-plus wbdv-add-topic"></i>
                </a>
              </li>
            </ul>
          </div>
          <br/>
          <div className="wbdv-editor-main">
            Content intentionally left blank
          </div>

        </div>
      </div>
    </div>
  </div>



export default CourseEditor