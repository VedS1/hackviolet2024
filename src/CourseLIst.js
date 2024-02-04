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
                <CourseBlock
                    imagePath="./courseImages/courseImage_2.jpg"
                    title="Quantum Reality Hacking"
                    description="Dive deep into the fascinating world of quantum mechanics!"
                />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock
                    imagePath="./courseImages/courseImage_1.png"
                    title="Neural Emojiology"
                    description="Express emotions through emojis."
                />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock
                    imagePath="./courseImages/courseImage_3.jpg"
                    title="AI Astral Projection"
                    description="AI explores alternate dimensions."
                />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock
                    imagePath="./courseImages/courseImage_4.jpg"
                    title="DNA Customization"
                    description="Genetic engineering and CRISPR."
                />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock
                    imagePath="./courseImages/courseImage_5.jpg"
                    title="Blockchain Time Travel"
                    description="Explore time using ledgers."
                />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock
                    imagePath="./courseImages/courseImage_6.jpg"
                    title="Alien Language Diplomacy"
                    description=" Decode alien communication."
                />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock
                    imagePath="./courseImages/courseImage_7.jpg"
                    title="Cyber Reality Sculpting"
                    description="Shape digital reality."
                />
            </Grid>

            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock
                    imagePath="./courseImages/courseImage_8.jpg"
                    title="Cryptocurrency Alchemy"
                    description="Turn crypto into gold."
                />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock
                    imagePath="./courseImages/courseImage_9.jpg"
                    title="Bioluminescent Coding"
                    description="Create glowing organisms."
                />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock
                    imagePath="./courseImages/courseImage_10.png"
                    title="Nanobot Choreography"
                    description="Control nanobots with precision."
                />
            </Grid>
            <Grid item xs={12} sm={6} md={1} lg={2} style={gridItemStyle}> {/* Grid item for each CourseBlock */}
                <CourseBlock
                    imagePath="./courseImages/courseImage_11.png"
                    title="Psycho-Neuro Robotics"
                    description="Merge psychology and robotics for AI with human-like emotions."
                />
            </Grid>



            {/* Add more CourseBlocks as needed */}
            {/* Each Grid item represents a CourseBlock and how it behaves on different screen sizes */}
        </Grid>

    );
}

export default CourseList;
