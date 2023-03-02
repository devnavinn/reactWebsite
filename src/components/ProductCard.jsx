import React from "react";
import { motion } from "framer-motion";
export default function ProductCard(props) {
    return (
        <motion.div className={props.class}>
            <div className="product-img">
                <a href="/#">
                    <img src={props.productImg} alt="productImg"></img>
                </a>
            </div>
            <div className="divContent">
                <p className='contentParagraph'>New</p>
                <h1 className='contentH1' >{props.productName}</h1>
                <h2 className='contentH2'>{props.productPrice}</h2>
            </div>
        </motion.div>
    )
}