import React from "react";
import '../css/LoginSignup.css';
import loginButton from './img/LoginButton.png';
export default function LoginSignup() {
    return (
        <div className="loginSignup">
            <div className="contentlogin">
                <h1 className="loginSignupHeading">Corporate/B2B Partners</h1>
                <p className="loginSignupTagline">Join the Best Corporate Marketplace</p>
            </div>
            <a className="loginbutton" href="/#"><img src={loginButton} alt=""></img> </a>
        </div>
    );
}