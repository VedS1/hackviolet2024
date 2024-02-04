import React from "react";
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
    const navigate = useNavigate();

    const loginHomeButton = () => navigate('/login');
    const signupHomeButton = () => navigate('/signup');
    const coursesButton = () => navigate('/courses');

    return (
        <div className="mainContainer">
              <img src="https://cdn.discordapp.com/attachments/1203398000903196692/1203441780301758494/file-kpzqVttXKO44f8v1p4j42kLE.png?ex=65d11b7f&is=65bea67f&hm=91a1bdb2a4e380b80930af4543e35c71e26924fdfc761742da941db2a604f271&" alt="alternatetext" width="300" height= "300"/>

            <div className="textContainer">
                <p>
                    At [TBA], we are dedicated to breaking down barriers in education and empowering individuals, especially
                women, in regions where access to learning is restricted.
                We believe that knowledge should be a universally accessible resource, transcending geographical and
                social constraints.
                Our mission is to create and translate a diverse range of educational courses, making them available in
                multiple languages,
                with a strong commitment to privacy and anonymity for places where access to education for women might
                be illegal.
                To do that, we enlist the help of volunteers, allowing the average person to make a difference just from
                their couch.
                </p>

                <div className="buttonContainer">
                    <input
                        className="LoginButton"
                        type="button"
                        onClick={loginHomeButton}
                        value="Log In"
                    />
                    <input
                        className="LoginButton"
                        type="button"
                        onClick={signupHomeButton}
                        value="Sign Up"
                    />
                    <input
                        className="LoginButton"
                        type="button"
                        onClick={coursesButton}
                        value="Courses List"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
