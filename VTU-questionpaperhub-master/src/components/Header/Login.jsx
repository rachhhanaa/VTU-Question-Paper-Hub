import { useNavigate } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import images from "../../constants/images";

const Login = () => {
    const [collegeId, setCollegeId] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setIsLoggedIn } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate credentials
        if (
            collegeId.trim() &&
            username === 'projectqpaper@gmail.com' &&
            password === '123'
        ) {
            setIsLoggedIn(true); 
            navigate('/home');   
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className="header" style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${images.header_bg}) center/cover no-repeat`
        }}>
            <div className="container">
                <div className="header__content text__center text__light flex flex__center">
                    <div className="header__content--left">
                        <h1 className="header__title fw__6">Welcome to VTU Question Paper Hub</h1>
                        <p className="para__text">
                        VTU Question Paper Hub is committed to supporting B.Tech students by providing convenient access to an extensive collection of previous years' question papers. Our platform is thoughtfully designed to serve as a valuable resource, helping students prepare thoroughly for their exams, gain confidence in their studies, and achieve academic excellence.
                        </p>
                    </div>
                    <div className="header__content--right">
                        <div className="login-container">
                            <form className="login-form" onSubmit={handleSubmit}>
                                <p className="heading">Login</p>
                                <p className="paragraph">Login to your account</p>
                                <div className="input-group">
                                    <input
                                        required
                                        placeholder="College ID"
                                        id="collegeId"
                                        type="text"
                                        value={collegeId}
                                        onChange={(e) => setCollegeId(e.target.value)}
                                    />
                                </div>
                                <div className="input-group">
                                    <input
                                        required
                                        placeholder="Username"
                                        id="username"
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="input-group">
                                    <input
                                        required
                                        placeholder="Password"
                                        name="password"
                                        id="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <button type="submit">Login</button>
                                <div className="bottom-text">
                                    <p>Don't have an account? <a href="#">Sign Up</a></p>
                                    <p><a href="#">Forgot password?</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default Login;
