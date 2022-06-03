import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useAuth } from '../../contexts/AuthContext';

import "./styles.css"

import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);

    const emailRef = useRef();
    const passwordRef = useRef();

    const { signIn, currentUser } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser != null) {

            navigate("/");
        }
    }, [])

    const handleSubmit = () => {
        signIn(emailRef.current.value, passwordRef.current.value).then(() => {
            document.querySelectorAll("input").forEach((input) => {
                input.value = "";
            })
            navigate("/");
        })
    }

    const changeShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="signInHolder">
            <div className="signIn">
                <h1 className="title">Sign in</h1>
                <input type="text" placeholder="Email" required ref={emailRef} className="emailInput" />
                <div className="passwordHolder">
                    <input type={showPassword ? "text" : "password"} placeholder="Password" required ref={passwordRef} className="passwordInput" />
                    <span className="imageHolder" onClick={changeShowPassword}>
                        <FontAwesomeIcon icon={showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"} className="passwordImage" />
                    </span>
                </div>
                <a href="#" className="forgotPassowrd">Forgot Password?</a>
                <button className="signInButton" onClick={handleSubmit}>Sign In</button>
                <p className="orGoogle"><span>OR</span></p>
                <button className="signInButton googleButton" onClick={handleSubmit}>Sign In With Google</button>
            </div>
            <p className="newToMessageSender">New to message sender? <Link to="/signup">Sign Up Now</Link></p>
        </div>
    );
}

export default SignIn;