import React, { useState } from 'react';
import Navbar from "../Navbar";

import CourseList from "../CourseLIst";
import { Paper } from '@mui/material/';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";



const paperWithImageStyle = {
    backgroundImage: 'url("./headerPic.jpg")', // Replace with the actual image path
    backgroundSize: 'cover', // You can adjust this property to control how the image is displayed
    backgroundPosition: 'center',
    minHeight: '300px', // Set a minimum height for your Paper component
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',


};



/*

Change the database to allow users to select a category to place their courses under
Change the

 */


function MainCoursePage() {



    return (


        <div>

            <Navbar />
            <Paper style={paperWithImageStyle}>
                {/* Your content goes here */}


            </Paper>

            <FormControl variant="filled" style={{ minWidth: 200 }}>
                <InputLabel id="course-category-label">Category</InputLabel>
                <Select
                    labelId="course-category-label"
                    id="course-category-select"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'technology'}>Technology</MenuItem>
                    <MenuItem value={'business'}>Business</MenuItem>
                    <MenuItem value={'art'}>Art</MenuItem>
                    {/* Add more categories as needed */}
                </Select>
            </FormControl>

            <h1>Trending</h1>


            <CourseList />
        </div>




    )

}

export default MainCoursePage;
