import React, { useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
// import Home from './Pages/Home'; // Uncomment and correct the path if Home component is used

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const loginUser = (event) =>{
        event.preventDefault();
        axios.post("http://localhost:3001/login", {
            password:password,
            email: email,
        }).then(response => {
            if(response.data.email == "EXIT_CODE")
            {
                console.log("FAILED!")
                navigate('/loginfailed');


            }
            else{
                console.log("WORKED!")
                //const id = response.data.shift();
                //indow.localStorage.setItem('token', id._id);
                navigate('/coursecreator');
            }
        });};


    const signUpButtonClick = () => {
        navigate('/loginfailed');
    };



    return (
        <div className="mainContainer">
            <form onSubmit={loginUser}> {/* Add form tag */}
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
