import React, { useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginFailed() {

    const navigate = useNavigate();

    const tryAgainButtonClick = () => {
        navigate('/login');
    };

    return(
        <div className="tryAgainContainer">
            <input
                className="TryAgainButton"
                type="button"
                onClick={tryAgainButtonClick}
                value="Try again"
            />
        </div>
    );
}

export default LoginFailed;