import React from "react";
import '../css/ScrollingCard.css';


export default function LastProductCard(props) {
    return (
        <div onClick={() => props.handleClick()} className={props.class} style={{ backgroundImage: `url(${props.backgroundImage})` }}>

            <div className="divContent">
                <p className='contentParagraph'>{props.firstTitle}</p>
                <h1 className='contentH1' >{props.secondTitle}</h1>
                <h2 className='contentH2'>{props.thirdTitle}</h2>
            </div>
        </div >
    );
}