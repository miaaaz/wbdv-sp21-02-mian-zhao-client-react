import CourseManager from "./components/course-manager/course-manager";
import {Route} from "react-router-dom";
import Home from "./components/home"
import CourseEditor from "./components/course-editor/course-editor";
import React from "react";

function App() {
  return (
        <div className="container-fluid">
          <Route path="/" exact={true}>
            <Home/>
          </Route>
          <Route path="/courses">
            <CourseManager/>
          </Route>
          <Route path={["/courses/:layout/edit/:courseId",
            "/courses/:layout/edit/:courseId/modules/:moduleId",
            "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId"
            ]}
                 exact={true} render={(props) => <CourseEditor {...props}/>}>
          </Route>
        </div>
  );
}

export default App;
