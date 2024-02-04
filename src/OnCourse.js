import React, { useState } from 'react';
import {List, ListItem, ListItemText, Typography, Paper} from '@mui/material/';
import {Grid} from "@mui/material";
import CourseBlock from "./CourseBlock";


function OnCourse() {
    // Initialize state with an array of courses
    const [courses, setCourses] = useState(["Course 1"]);

    const handlePaperClick = () => {
        // New course name (you might want to make this more dynamic)
        const newCourse = `Course ${courses.length + 1}`;

        // Update the courses array with the new course
        setCourses([...courses, newCourse]);

        console.log('Paper clicked');
    };

    const paperStyle = {
        width: '450px', // Set the desired width
        height: '50px', // Set the desired height
        backgroundColor: 'lightgrey'
    };




    return (

        <Grid container spacing={2}> {/* Grid container with spacing */}

            <Grid item xs={12} sm={6} md={1} lg={2}> {/* Grid item for each CourseBlock */}
                <Typography variant="h5">Quantum Computing</Typography>
                <Typography variant="h5">Dive deep into the fascinating world of quantum computing!</Typography>
            </Grid>
            <List>
                <ListItem>
                    <Paper style={paperStyle}>
                        <Typography variant="h6">Unit 1</Typography>
                    </Paper>
                </ListItem>
                <ListItem>
                    <Paper style={paperStyle}>
                        <Typography variant="h6">Unit 2</Typography>
                    </Paper>
                </ListItem>
                <ListItem>
                    <Paper style={paperStyle}>
                        <Typography variant="h6">Unit 3</Typography>
                    </Paper>
                </ListItem>
                <ListItem>
                    <Paper style={paperStyle}>
                        <Typography variant="h6">Unit 4</Typography>
                    </Paper>
                </ListItem>
                <ListItem>
                    <Paper style={paperStyle}>
                        <Typography variant="h6">Unit 5</Typography>
                    </Paper>
                </ListItem>
                <ListItem>
                    <Paper style={paperStyle}>
                        <Typography variant="h6">Unit 6</Typography>
                    </Paper>
                </ListItem>
            </List>





        </Grid>

    );


}


export default OnCourse;
