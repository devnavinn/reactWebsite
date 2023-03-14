import React from "react";
import { motion } from "framer-motion";
export default function ProductCard(props) {
    return (
        <motion.div className="cardType4">
            <div className="product-img">
                <a href="/#">
                    <img src={props.productImg} alt="productImg"></img>
                </a>
            </div>
            <div className="divContent">
                <p className='contentParagraph'>New</p>
                <h4 style={{ "margin-top": "3%" }} className='contentH1' >{props.productName}</h4>
                <p style={{ "margin-top": "15%" }} className='contentH2'>{props.productPrice}</p>
            </div>
        </motion.div>
    )
}