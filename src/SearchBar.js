import React, { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <TextField

            variant="outlined"
            placeholder="Search for Courses"
            value={searchQuery}
            onChange={handleSearchChange}

            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
            style={{ width: '800px', background: 'white' }} // Adjust width as needed
        />
    );
}

export default SearchBar;
