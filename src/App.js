import logo from './logo.svg';
import './App.css';

import React, { useState } from "react";
import {Routes, Route } from 'react-router-dom';
import Home from '.Pages/home';

import axios from 'axios';

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');




    const onButtonClick = async () => {
        try{
            const response = await axios.post('http://localhost:3001/login',{email, password});
            console.log(response.data);
            <Routes>
                <Route path='/' element={ <Home />}></Route>
            </Routes>
        } catch (error)
        {
            console.error(error);
        }

    };

    const signUpButtonClick = async () => {
        try{
            const newUser = {username, email, password};
            const response = await axios.post('http://localhost:3001/signup', {user: newUser});
            console.log(response.data);
        } catch (error)
        {
            console.error(error);
        }

    };


    return (


        <div className="mainContainer">
            <div className="emailContainer">
                <input
                    placeholder="Enter your email here"
                    className={"inputBox"}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="passwordContainer">
                <input
                    placeholder="Enter your password here"
                    className={"inputBox"}/>
                    onChange={(e) => setPassword(e.target.value)}
            </div>


            <div className="userContainer">
                <input
                    placeholder="Enter your username here"
                    className={"inputBox"}/>
                    onChange={(e) => setUsername(e.target.value)}
            </div>


            <div className={"buttonContainer"}>
                <input
                    className={"loginButton"}
                    type={"button"}
                    onClick={onButtonClick}
                    value={"log in"}
                />
            </div>


            <div className={"signupContainer"}>
                <input
                    className={"signupButton"}
                    type={"button"}
                    onClick={signUpButtonClick}
                    value={"Sign up"}
                />
            </div>


        </div>
    );

}

export default App;
