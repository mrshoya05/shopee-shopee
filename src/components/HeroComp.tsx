'use client';

import React, { useState } from 'react';

const HeroComp: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const banners = [
    { src: 'image2.jpg', caption: 'Shop the Latest Fashion Trends' },
    { src: 'image2.jpg', caption: 'Exclusive Deals on Shoes' },
    { src: 'image3.jpg', caption: 'Up to 50% Off Your Next Purchase' },
  ];

  // Handle next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
  };

  // Handle previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? banners.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative rounded-xl">
      {/* Slider Container */}
      <div className="relative overflow-hidden rounded-xl ">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {banners.map((banner, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {/* Image container with fixed height */}
              <div className="relative h-[500px]"> {/* Increased height */}
                <img
                  src={banner.src}
                  alt={`Banner ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Caption Overlay */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-white px-4">
                  <h2 className="text-4xl font-bold">{banner.caption}</h2> {/* Large Caption Text */}
                  <p className="mt-4 text-lg">Shop Now and Save Big!</p> {/* Optional Subtext */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev & Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-gray-600 p-4 rounded-full focus:outline-none"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-gray-600 p-4 rounded-full focus:outline-none"
      >
        &gt;
      </button>
    </div>
  );
};

export default HeroComp;
