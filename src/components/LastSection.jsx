import React, { useState } from "react";
import LastProductCard from "./LastProductCard";
import ProductCard from "./ProductCard";
import LastImg1 from './img/LastImg1.png';
import tcimg1 from './img/tcImg1.png';
import tcimg2 from './img/tcImg2.png';
import tcimg3 from './img/tcimg3.png';

export default function LastSection() {
    const [isclicked, setIsclicked] = useState(true);
    const handleClick = () => {
        setIsclicked((preValue) => {
            return !preValue;
        });
    }
    const productInfo = [
        {
            productImg: tcimg1,
            productName: "AirPods Pro (2nd generation)",
            productPrice: "MRP ₹26900.00 (Incl. of all taxes)"
        },
        {
            productImg: tcimg2,
            productName: "AirPods Pro (2nd generation)",
            productPrice: "MRP ₹26900.00 (Incl. of all taxes)"
        },
        {
            productImg: tcimg3,
            productName: "AirPods Pro (2nd generation)",
            productPrice: "MRP ₹26900.00 (Incl. of all taxes)"
        }];


    return (
        <div className="main-container">
            <LastProductCard
                handleClick={handleClick}
                className="cardType4"
                backgroundImage={LastImg1}
                firstTitle="HOLIDAY ACCESSORIES"
                secondTitle="Get all the trimmings."
                thirdTitle="Shop accessories for their favourite products."
            />
        </div>
    );

}