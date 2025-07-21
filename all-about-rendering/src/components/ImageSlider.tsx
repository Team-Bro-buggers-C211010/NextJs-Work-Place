"use client";

import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export const ImageSlider = () => {
  const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
            <img
                src="https://picsum.photos/400/200"
                alt="Image 1"
                className="slider-image w-full h-full"
            />
        </div>
        <div>
            <img
                src="https://picsum.photos/400/200"
                alt="Image 2"
                className="slider-image w-full h-full"
            />
        </div>
        <div>
            <img
                src="https://picsum.photos/400/200"
                alt="Image 3"
                className="slider-image w-full h-full"
            />
        </div>
      </Slider>
    </div>
  );
}