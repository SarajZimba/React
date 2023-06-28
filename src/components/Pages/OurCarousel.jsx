import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const OurCarousel = () => {
    let carousel_item = [{
        image: '245lady.jpg',
        text: 'Image 1'
    },
    {
        image: '630lady.jpg',
        text: 'Image 1'
    },
    {
        image: '640lady.jpg',
        text: 'Image 1'
    }]

    return (
        <Carousel autoPlay={true} interval={3000} infiniteLoop={true}>
            {


                carousel_item.map(item => {
                    return ( 
                    <div className="carousel">
                        <img src={`./${item.image}`} alt="" />
                        <p className="legend">{item.text}</p>
                    </div>
                    )

                })
            }
        </Carousel>

    )

}



export default OurCarousel

