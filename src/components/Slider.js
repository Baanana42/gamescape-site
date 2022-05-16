import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <div className='pl-2 pr-2'>
            <Carousel showArrows={false} showThumbs={false} autoPlay={true} showStatus={false} transitionTime={2}>
                <div>
                    <img src={"/images/1.jpg"} alt="sliderimg" className='sliderImg' />
                </div>
                <div>
                    <img src={"/images/2.jpg"} alt="sliderimg" className='sliderImg' />
                </div>
                <div>
                    <img src={"/images/3.jpg"} alt="sliderimg" className='sliderImg' />
                </div>
            </Carousel>
        </div>
    )
}

export default Slider