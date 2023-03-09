import React from "react";
import '../css/Profile.css';
export default function ProfileCard(props) {
    return (
        <div className="profile-container">
            <div className='profile-pic'>
                <img className="profile-img" src={props.profileImg} alt='profile' />
                <div className='profile-logo'>
                    <img className="logo" src={props.logo} alt='profile' />
                </div>

            </div>
            <div className="profile-desc" >
                <div className="desc-header">
                    <h2 style={{ "margin": "1%" }}>{props.name}</h2>
                    <p style={{ "margin": "1%" }}>{props.education}</p>
                    <p style={{ "margin": "1%" }}>{props.experience}</p>
                </div>
                <div style={{ "margin-top": "6%" }} className="desc-button">
                    <p>{props.content}</p>
                </div>
            </div>
        </div>
    );
}