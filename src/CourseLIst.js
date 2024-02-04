import React, { useRef, useState }  from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Grid, Paper } from '@mui/material/';
import TextField from '@mui/material/TextField';
import CourseBlock from "./CourseBlock";

const gridItemStyle = {
    marginTop: '20px',
    marginLeft: '10px', // Adjust this value to control horizontal spacing
    marginRight: '10px', // Adjust this value to control horizontal spacing
    justifyContent: 'center', // Center items horizontally
    alignItems: 'center',
};



function CourseList() {

    return (

        <Grid container spacing={2}> {/* Grid container with spacing */}

            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock />
            </Grid>

            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock />
            </Grid>

            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock />
            </Grid>

            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock />
            </Grid>


            {/* Add more CourseBlocks as needed */}
            {/* Each Grid item represents a CourseBlock and how it behaves on different screen sizes */}
        </Grid>

    );
}

export default CourseList;
