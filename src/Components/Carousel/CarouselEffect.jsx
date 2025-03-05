// import React from 'react'
import { Carousel } from "react-responsive-carousel";
import { img } from "./img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css/carousel.moduel.css";
 function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {
          img.map((Item,index) => {
            return <img src={Item} key={index } />
          })
        }
      </Carousel>
      <div className='hero_img'>

      </div>
    </div>
  )
}
export default CarouselEffect