import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import myntra1 from "../images/myntra1.png"
import myntra2 from "../images/myntra2.png"
import myntra3 from "../images/myntra3.png"


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