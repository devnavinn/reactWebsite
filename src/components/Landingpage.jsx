import React from "react";
import Landingimg from './img/landingpage.png'
export default function Landingpage() {
    return (
        <div className="landing-img" style={{ "width": "100%", "height": "470px" }}>
            <img style={{ "width": "100%", "height": "100%", "objectFit": "cover" }} src={Landingimg} alt="landinpage" ></img>
        </div>
    );
}