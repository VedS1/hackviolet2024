import React, {useState} from 'react';
import {useNavigate } from 'react-router-dom';

import { Toolbar, AppBar, Typography, IconButton } from '@mui/material/';

import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import ScheduleIcon from '@mui/icons-material/Schedule';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import TextField from "@mui/material/TextField";



function Navbar() {
    const navigate = useNavigate();



    const [searchValue, setSearchValue] = useState(''); // State for the name TextField

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };




    const handleHomeIconClick = () => {
        navigate('/');
        console.log('Home Icon Clicked');

    };

    const handleBookmarkIconClick = () => {
        navigate('/bookmark');
        console.log('Bookmark Icon Clicked');
    };

    const handleScheduleIconClick = () => {
        navigate('/schedule');
        console.log('Schedule Icon Clicked');
    };

    const handleSearchIconClick = () => {
        navigate('/search');
        console.log('Search Icon Clicked');
    };

    const handleAddIconClick = () => {
        navigate('/coursecreator');
        console.log('Add Icon Clicked');
    };

    return (

        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" style={{ marginLeft: "10px" }}>
                    My Navbar
                </Typography>
                <IconButton edge="start" color="inherit" aria-label="menu" style={{ marginLeft: "10px" }} onClick={handleHomeIconClick}>
                    <HomeIcon />
                </IconButton>
                <IconButton edge="start" color="inherit" aria-label="menu" style={{ marginLeft: "10px" }} onClick={handleBookmarkIconClick}>
                    <BookmarkIcon />
                </IconButton>
                <IconButton edge="start" color="inherit" aria-label="menu" style={{ marginLeft: "10px" }} onClick={handleScheduleIconClick}>
                    <ScheduleIcon />
                </IconButton>
                <IconButton edge="start" color="inherit" aria-label="menu" style={{ marginLeft: "10px" }} onClick={handleSearchIconClick}>
                    <SearchIcon />
                </IconButton>
                <IconButton edge="start" color="inherit" aria-label="menu" style={{ marginLeft: "10px" }} onClick={handleAddIconClick}>
                    <AddIcon />
                </IconButton>
            </Toolbar>
        </AppBar>

)
    ;
}

export default Navbar;
