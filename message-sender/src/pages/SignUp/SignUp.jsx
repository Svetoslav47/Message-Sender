import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useAuth } from '../../contexts/AuthContext';

import "./styles.css"
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const emailRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const { signUp, currentUser } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser != null) {
            console.log(currentUser);
            navigate("/");
        }
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        if (confirmPasswordRef.current.value === passwordRef.current.value) {
            signUp(emailRef.current.value, passwordRef.current.value, firstNameRef.current.value, lastNameRef.current.value).then(() => {
                document.querySelectorAll("input").forEach((input) => {
                    input.value = "";
                })
                navigate("/");
            })
        }
    }

    const changeShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const changeShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }

    return (
        <div className="signUpHolder">
            <div className="signUp">
                <form onSubmit={handleSubmit} className="form">
                    <h1 className="title">Sign Up</h1>
                    <input type="email" placeholder="Email" required ref={emailRef} className="input" />
                    <input type="text" placeholder="First Name" required ref={firstNameRef} className="input" />
                    <input type="text" placeholder="Last Name" required ref={lastNameRef} className="input" />
                    <div className="passwordHolder">
                        <input type={showPassword ? "text" : "password"} placeholder="Password" required ref={passwordRef} className="passwordInput" />
                        <span className="imageHolder" onClick={changeShowPassword}>
                            <FontAwesomeIcon icon={showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"} className="passwordImage" />
                        </span>
                    </div>
                    <div className="passwordHolder">
                        <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" required ref={confirmPasswordRef} className="passwordInput" />
                        <span className="imageHolder" onClick={changeShowConfirmPassword}>
                            <FontAwesomeIcon icon={showConfirmPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"} className="passwordImage" />
                        </span>
                    </div>
                    <a href="#" className="forgotPassowrd">Forgot Password?</a>
                    <button className="signInButton">Sign Up</button>
                </form>
                <p className="orGoogle"><span>OR</span></p>
                <button className="signInButton googleButton">Sign Up With Google</button>
            </div>
            <p className="newToMessageSender">Already have an account? <Link to="/signin">Sign In Now</Link></p>
        </div>
    );
}

export default SignUp;