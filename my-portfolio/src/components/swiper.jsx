import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


export const Slideshow = ({data}) => {
    return (
      <div className="slide-container">
        <Slide>
         {data.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <img src={slideImage} alt="" />
            </div>
          ))} 
        </Slide>
      </div>
    )
}