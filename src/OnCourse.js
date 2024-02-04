import React, { useState } from 'react';
import { List, ListItem, ListItemText, Paper } from '@mui/material/';

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
        width: '900px', // Set the desired width
        height: '50px', // Set the desired height
    };

    return (
        <List>
            {courses.map((course, index) => (
                <ListItem key={index}>
                    <Paper onClick={handlePaperClick} style={paperStyle}>
                        {course}
                    </Paper>
                </ListItem>
            ))}
        </List>
    )
}


export default OnCourse;
