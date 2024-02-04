import React, {useState} from 'react';

import { Toolbar, AppBar, Typography, IconButton } from '@mui/material/';

import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import ScheduleIcon from '@mui/icons-material/Schedule';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SearchBar from "./SearchBar"



function Navbar() {



    const [searchValue, setSearchValue] = useState(''); // State for the name TextField

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };




    const handleHomeIconClick = () => {
        // Handle HomeIcon click event here
        console.log('Home Icon Clicked');
    };

    const handleBookmarkIconClick = () => {
        // Handle BookmarkIcon click event here
        console.log('Bookmark Icon Clicked');
    };

    const handleScheduleIconClick = () => {
        // Handle ScheduleIcon click event here
        console.log('Schedule Icon Clicked');
    };

    const handleSearchIconClick = () => {
        // Handle SearchIcon click event here
        console.log('Search Icon Clicked');
    };

    const handleAddIconClick = () => {
        // Handle AddIcon click event here
        console.log('Add Icon Clicked');
    };

    return (

        <AppBar position="static">
            <Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="h6" component="div" style={{ flex: 1 }}>
                    Bridge
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'space-between', flex: 3 }}>

                    <SearchBar />
                    <IconButton color="inherit" aria-label="home" onClick={handleHomeIconClick}>
                        <HomeIcon />
                    </IconButton>
                    <IconButton color="inherit" aria-label="bookmark" onClick={handleBookmarkIconClick}>
                        <BookmarkIcon />
                    </IconButton>
                    <IconButton color="inherit" aria-label="schedule" onClick={handleScheduleIconClick}>
                        <ScheduleIcon />
                    </IconButton>
                    <IconButton color="inherit" aria-label="search" onClick={handleSearchIconClick}>
                        <SearchIcon />
                    </IconButton>
                    <IconButton color="inherit" aria-label="add" onClick={handleAddIconClick}>
                        <AddIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );

}

export default Navbar;
