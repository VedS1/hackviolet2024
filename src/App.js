import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import LoginFailed from "./pages/LoginFailed";
import Home from "./pages/Home";
import Course from "./pages/MainCoursePage";
import CourseCreator from "./pages/CourseCreator";
import Bookmark from "./pages/BookMark";
import Schedule from "./pages/Schedule";
import SearchBar from "./pages/SearchBar";
import OnCourse from "./OnCourse"

function App() {
    return (
        <div className = "App">


            <Router>
                <Routes>

                    <Route path = "/" element = {<Home/>}/>
                    <Route path = "/login" element = {<Login/>}/>
                    <Route path = "/signup" element = {<SignUp/>}/>
                    <Route path = "/loginfailed" element = {<LoginFailed/>}/>
                    <Route path ="/courses" element = {<Course/>}/>
                    <Route path ="/coursecreator" element = {<CourseCreator/>}/>
                    <Route path ="/bookmark" element = {<Bookmark/>}/>
                    <Route path ="/schedule" element = {<Schedule/>}/>
                    <Route path ="/search" element = {<SearchBar/>}/>
                    <Route path ="/oncourse" element = {<OnCourse/>}/>


                </Routes>
            </Router>
        </div>
    );
}

export default App;
