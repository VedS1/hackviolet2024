import React, {useState} from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material/';

import { Routes, Route, useNavigate } from 'react-router-dom';



function CourseBlock({ imagePath, title, description }) {

    const navigate = useNavigate();
    const handleCardClick = () => {
        // Handle the card click event here
        console.log('Card Clicked');
        navigate('/oncourse')
    };


    const [isHovered, setIsHovered] = useState(false);
    const cardStyle = {
        width: '200px',
        height: '250px',
        transition: '0.3s',
        boxShadow: isHovered ? '0px 4px 20px rgba(0,0,0,0.2)' : '',
        transform: isHovered ? 'scale(1.05)' : '',
        cursor: isHovered ? 'pointer' : '',
    };


    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };



    return (

        <Card
            style={ cardStyle }
            onClick={handleCardClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >

            <CardMedia
                component="img"
                height="100"
                width="300"
                image={imagePath}

            />

            {/* Image won't display; it may be possible that the script is firing before it loads*/}
            <CardContent>
                <Typography variant="h6" component="div">
                    {title}

                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {description}
                </Typography>



            </CardContent>
        </Card>
    )

}

export default CourseBlock;
