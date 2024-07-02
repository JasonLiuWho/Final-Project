import React, { useState } from "react";
import CarouselData from "./CarouselData";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Carousel =({ items })=> {
    
    const[current, setCurrent] = useState(0)
    const length = items.length
    
    const nextSlide =()=> {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide =()=> {
        setCurrent(current === 0 ? length -1 : current - 1)
    }

    if (!Array.isArray(items) || items.length <= 0) {
        return null;
    }

    return (
        <section className="slides">
            <FaArrowAltCircleLeft className="left" onClick={prevSlide}/>
            <FaArrowAltCircleRight className="right" onClick={nextSlide}/>
            {CarouselData.map((item, idx) => {
                return (
                    <div 
                        className={idx === current ? 'slide active' : 'slide'} key={idx}
                    >
                        {idx === current && (<img src={item.picture} alt="manga bookshelf" className="picture img-fluid"/>)}
                    
                    </div>
                )
            })}
        </section>
    );
}

export default Carousel