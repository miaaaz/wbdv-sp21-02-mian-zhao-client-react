import CourseManager from "./components/course-manager/course-manager";
import {Route} from "react-router-dom";
import Home from "./components/home"

function App() {
  return (
        <div className="container-fluid">
          <Route path="/" exact={true}>
            <Home/>
          </Route>
          <Route path="/courses">
            <CourseManager/>
          </Route>
        </div>
  );
}

export default App;
