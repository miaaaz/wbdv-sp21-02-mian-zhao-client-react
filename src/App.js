import CourseManager from "./components/course-manager/course-manager";
import {Route} from "react-router-dom";
import Home from "./components/home"
import CourseEditor from "./components/course-editor/course-editor";
import React from "react";
import QuizzesList from "./components/quizzes/quizzes-list";
import Quiz from "./components/quizzes/quiz";

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
            "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
            "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"
            ]}
                 exact={true}>
            <CourseEditor/>
          </Route>
          <Route path={"/courses/:courseId/quizzes"} exact={true}>
            <QuizzesList/>
          </Route>
          <Route path={"/courses/:courseId/quizzes/:quizId"} exact={true}>
            <Quiz/>
          </Route>
        </div>
  );
}

export default App;
