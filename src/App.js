import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import LoginFailed from "./pages/LoginFailed";
import Home from "./pages/Home";
//import Course from "./pages/Course" // Uncomment after Course implementation then add this to routes:
//
// <Route path ="/courses" element = {<Course/>}/>

function App() {
    return (
        <div className = "App">
            <Router>
                <Routes>
                    <Route path = "/home" element = {<Home/>}/>
                    <Route path = "/login" element = {<Login/>}/>
                    <Route path = "/signup" element = {<SignUp/>}/>
                    <Route path = "/loginfailed" element = {<LoginFailed/>}/>



                </Routes>
            </Router>
        </div>
    );
}

export default App;
