import React, { useRef, useState }  from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Grid, Paper } from '@mui/material/';
import TextField from '@mui/material/TextField';



function CourseCreator() {



    const inputRef = useRef(null);
    const [ image, setImage ] = useState("")
    const handleImageClick = () => {
        inputRef.current.click();
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        setImage(event.target.files[0]);
    }


    const [nameValue, setNameValue] = useState(''); // State for the name TextField
    const [courseValue, setCourseValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');
    const handleNameChange = (event) => {
        setNameValue(event.target.value);
    };

    const handleCourseChange = (event) => {
        setCourseValue(event.target.value);
    };


    // Implement handleChange for the description TextField
    const handleDescriptionChange = (event) => {
        setDescriptionValue(event.target.value);
    };


    return (
        <Grid container spacing={2}>



            <Grid item xs={8}>
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <Grid item xs={12} sm={6} md={4} style={{ marginTop: '20px', marginLeft: '20px' }}>
                            <TextField
                                label="Enter your name"
                                variant="outlined"
                                value={nameValue}
                                onChange={handleNameChange}
                            />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid item xs={12} sm={6} md={4} style={{ marginTop: '20px', marginLeft: '20px' }}>
                            <TextField
                                label="Enter course value"
                                variant="outlined"
                                value={courseValue}
                                onChange={handleCourseChange}
                            />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid item xs={12} sm={6} md={4} style={{ marginTop: '20px', marginLeft: '20px' }}>
                            <TextField
                                label="Description"
                                multiline
                                rows={4} // Sets the minimum number of visible rows
                                variant="outlined"
                                value={descriptionValue}
                                onChange={handleDescriptionChange}
                                fullWidth // Optional: Makes the text field take the full width of its container
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <div onClick={handleImageClick}>

                    {image ? (
                        <img src={URL.createObjectURL(image)}  width="300" height="300"/>
                    ) : (
                        <img src="./photo.png" width="300" height="300"/>
                    )}

                    <input
                        type="file"
                        ref={inputRef}
                        onChange={handleImageChange}
                        style={{display: "none"}}
                    />

                </div>
            </Grid>







        </Grid>





    );
}

export default CourseCreator;
