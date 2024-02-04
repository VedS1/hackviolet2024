import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
// import Home from './Pages/Home'; // Uncomment and correct the path if Home component is used
import './App.css';
import Navbar from "./Navbar";
import MainCoursePage from "./MainCoursePage";
import CourseBlock from "./CourseBlock";
import CourseCreator from "./CourseCreator";
import CourseList from "./CourseLIst";
import OnCourse from "./OnCourse";


function App() {






    return (
        <div className="mainContainer">


            <Navbar/>
            {/*<MainCoursePage/>*/}
            <CourseList />


        </div>
    );
}

export default App;
