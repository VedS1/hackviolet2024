import React from 'react';

import { Toolbar, AppBar, Typography, IconButton } from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import ScheduleIcon from '@mui/icons-material/Schedule';
import BookmarkIcon from '@mui/icons-material/Bookmark';



function Navbar() {
    return (

        <AppBar position="static">
            <Toolbar>


                <IconButton edge="start" color="inherit" aria-label="menu">
                    <HomeIcon />
                </IconButton>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <BookmarkIcon />
                </IconButton>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <ScheduleIcon />
                </IconButton>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <SearchIcon />
                </IconButton>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <AddIcon />
                </IconButton>


                <Typography variant="h6" component="div">
                    My Navbar
                </Typography>


            </Toolbar>
        </AppBar>

)
    ;
}

export default Navbar;
