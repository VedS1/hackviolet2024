

import axios from "axios";
import React, { useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';


function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signUpButtonClick = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        try {

            const newUser = { username, email, password };
            const response = await axios.post('http://localhost:3001/signup', { user: newUser });
            console.log(response.data);
            // Handle signup success here
        } catch (error) {
            console.error(error);
        }
        navigate('/login');
    };


    return (
        <div className="mainContainer">
            <form onSubmit={SignUp}> {/* Add form tag */}
                <div className="emailContainer">
                    <input
                        placeholder="Enter your email here"
                        className="inputBox"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="passwordContainer">
                    <input
                        placeholder="Enter your password here"
                        className="inputBox"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="userContainer">
                    <input
                        placeholder="Enter your username here"
                        className="inputBox"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="buttonContainer">
                    <input
                        className="SignUpSubmit"
                        type="submit"
                        value="Submit"
                        onClick={signUpButtonClick}
                    />
                </div>
            </form>
        </div>
    )
        ;

}

export default SignUp;
