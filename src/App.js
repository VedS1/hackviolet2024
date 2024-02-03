import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const onButtonClick = () => {

}

function App() {
    return (
        <div className="mainContainer">
            <div className="inputContainer">
                <input
                    placeholder="Enter your email here"
                    className={"inputBox"}
                />
            </div>
            <div className="inputContainer">
                <input
                    placeholder="Enter your password here"
                    className={"inputBox"}/>
            </div>
            <div className={"inputContainer"}>
                <input
                    className={"loginButton"}
                    type={"button"}
                    onClick={onButtonClick}
                    value={"log in"}/>
            </div>
        </div>
    );

}

export default App;
