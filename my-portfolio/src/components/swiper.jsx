import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



export const Slideshow = ({data}) => {
    return (
    
      <Carousel>
     {data.map((img,i)=>{
       return <div key={i}>
       <img src={img} alt='' />
   </div>
     })
    }
  </Carousel>
      
    )
}