import React, { useRef, useState }  from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material/';
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

    return (
        <>

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

        </>

    );
}

export default CourseCreator;
