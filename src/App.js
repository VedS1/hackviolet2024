import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import LoginFailed from "./pages/LoginFailed";
import Home from "./pages/Home";
import Course from "./pages/MainCoursePage";
import courseCreator from "./pages/CourseCreator";
import OnCourse from "./OnCourse";


function App() {
    return (
        <div className = "App">
            <OnCourse />


            <Router>
                <Routes>

                    <Route path = "/" element = {<Home/>}/>
                    <Route path = "/login" element = {<Login/>}/>
                    <Route path = "/signup" element = {<SignUp/>}/>
                    <Route path = "/loginfailed" element = {<LoginFailed/>}/>
                    <Route path ="/courses" element = {<Course/>}/>
                    <Route path ="/coursecreator" element = {<courseCreator/>}/>


                </Routes>
            </Router>
        </div>
    );
}

export default App;
