import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3001/login', { email, password });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSignup = async () => {
        try {
            const newUser = { username, email, password };
            const response = await axios.post('http://localhost:3001/signup', { user: newUser });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="mainContainer">
            <input
                placeholder="Username"
                className="inputBox"
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="email"
                placeholder="Enter your email here"
                className="inputBox"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Enter your password here"
                className="inputBox"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleSignup}>Signup</button>
        </div>
    );
}

export default App;
