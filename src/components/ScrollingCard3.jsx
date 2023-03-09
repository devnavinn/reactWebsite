import React, { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';
import ProductCard from "./ProductCard";
import Card1 from "./Card1";
import tcImg1 from './img/tcImg1.png';
import tcImg2 from "./img/tcImg2.png";
import tcImg3 from "./img/tcimg3.png";
export default function ScrollingCard3() {
    const [width, setWidth] = useState(0);
    const carousel3 = useRef();
    useEffect(() => {
        setWidth(carousel3.current.scrollWidth - carousel3.current.clientWidth);
    }, []);
    return (
        <motion.div ref={carousel3} className="carousel3">
            <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="inner-carousel3">
                <Card1

                    class="cardType3"
                    backgroundImage={tcImg1}
                    firstTitle="HOLIDAY ACCESSORIES"
                    secondTitle="Shop accessories for their favourite products."
                    thirdTitle="Shop accessories for their favourite products."
                />
                <ProductCard


                    productImg={tcImg2}
                    productName="AirPods Pro (2nd generation)"
                    productPrice="MRP ₹26900.00 (Incl. of all taxes)"
                />
                <ProductCard


                    productImg={tcImg3}
                    productName="Apple TV 4K Wi‑Fi + Ethernet with 128GB storage"
                    productPrice="MRP ₹16900.00 (Incl. of all taxes)"
                />
                <ProductCard


                    productImg={tcImg2}

                    productName="iPhone 14 Pro Max Leather Case with MagSafe - Forest Green"
                    productPrice="MRP ₹5900.00 (Incl. of all taxes)"
                />
                <Card1

                    class="cardType3"
                    backgroundImage={tcImg1}
                    firstTitle="HOLIDAY ACCESSORIES"
                    secondTitle="Shop accessories for their favourite products."
                    thirdTitle="Shop accessories for their favourite products."
                />
                <ProductCard


                    productImg={tcImg2}
                    productName="AirPods Pro (2nd generation)"
                    productPrice="MRP ₹26900.00 (Incl. of all taxes)"
                />
                <ProductCard


                    productImg={tcImg3}
                    productName="Apple TV 4K Wi‑Fi + Ethernet with 128GB storage"
                    productPrice="MRP ₹16900.00 (Incl. of all taxes)"
                />
                <ProductCard
                    productImg={tcImg2}

                    productName="iPhone 14 Pro Max Leather Case with MagSafe - Forest Green"
                    productPrice="MRP ₹5900.00 (Incl. of all taxes)"
                />


            </motion.div>
        </motion.div>
    );
}