import React from "react";
import '../css/CardHeading.css';
export default function CardHeading(props) {
    return (
        <div className={props.class}>
            <h1> <span className="cardHeadingLeft">{props.leftText}</span>
                <span className="cardHeadingRight">&nbsp;{props.rightText} </span>
            </h1>
        </div>
    );
}