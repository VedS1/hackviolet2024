import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="mainContainer">
            <div className="inputContainer">
                <input
                    placeholder="Enter your password here"
                    className={"inputBox"}
                />
            </div>
            <div className="inputContainer">
                <input
                    placeholder="Enter your email here"
                    className={"inputBox"}/>
            </div>
        </div>
);

}

export default App;
