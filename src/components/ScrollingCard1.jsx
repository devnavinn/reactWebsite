import React, { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';
import '../css/ScrollingCard.css';
import Carousel1Data from './assets/Carousel1Data';
import Card1 from "./Card1";
export default function ScrollingCard1() {

    const [width, setWidth] = useState(0);
    const carousel1 = useRef();
    useEffect(() => {
        setWidth(carousel1.current.scrollWidth - carousel1.current.clientWidth);
    }, []);
    return (
        <motion.div ref={carousel1} className="carousel1">
            <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="inner-carousel1">
                {
                    Carousel1Data.map((item) => {
                        return (
                            <Card1
                                key={item.id}
                                class={item.class}
                                backgroundImage={item.backgroundImage}
                                firstTitle={item.firtTitle}
                                secondTitle={item.secondTitle}
                                thirdTitle={item.thirdTitle}
                            />
                        );
                    })
                }
            </motion.div>
        </motion.div>
    );
}