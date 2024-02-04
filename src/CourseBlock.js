import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material/';




function CourseBlock() {

    const handleCardClick = () => {
        // Handle the card click event here
        console.log('Card Clicked');
    };





    return (

        <Card style={{ width: '200px', height: '250px' }}  onClick={handleCardClick}>
            <CardMedia
                component="img"
                height="100"
                width="300"
                image='./testImage.jpg'
            />

            {/* Image won't display; it may be possible that the script is firing before it loads*/}
            <CardContent>
                <Typography variant="h6" component="div">
                    Example title

                </Typography>
                <Typography variant="body2" color="textSecondary">
                    This is my typography
                </Typography>



            </CardContent>
        </Card>
    )

}

export default CourseBlock;
