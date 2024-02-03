import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material/';



function CourseBlock() {
    return (

        <Card>
            <CardMedia
                component="img"
                height="200"
                image='./testImage.png'
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
