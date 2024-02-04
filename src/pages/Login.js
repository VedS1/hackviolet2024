import React, { useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import Home from './Pages/Home'; // Uncomment and correct the path if Home component is used

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const onButtonClick = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        try {
            const response = await axios.post('http://localhost:3001/login', { email, password });
            console.log(response.data);
            // Redirect or handle login success here
        } catch (error) {
            console.error(error);
        }
    };

    const signUpButtonClick = () => {
        navigate('/signup');
    };



    return (
        <div className="mainContainer">
            <form onSubmit={onButtonClick}> {/* Add form tag */}
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
                        className="loginButton"
                        type="submit"
                        value="log in"
                    />
                </div>
            </form>
            <div className="signupContainer">
                <input
                    className="signupButton"
                    type="button"
                    onClick={signUpButtonClick}
                    value="Sign up"
                />
            </div>
        </div>
    );
}

export default Login;
