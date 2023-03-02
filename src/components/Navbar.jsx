import React from "react";
import logo from './img/logo.png'
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-logo">
                <a href="/#"> <img src={logo} alt="logo" ></img> </a>
            </div>
            <div className="nav-items">
                <a href="/#" >New From Bose</a>
                <a href="/#" >Headphones</a>
                <a href="/#" >Speakers</a>
                <a href="/#" >Audio Sunglasses</a>
                <a href="/#" >Sleep</a>
                <a href="/#" >Stories</a>
            </div>
        </div>
    );
}