import { transition } from '@chakra-ui/react';
import React, { useState } from 'react';


const ContentSlider = ({ slides }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

 const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      (prevIndex + 1) % slides.length
    
    );
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlideIndex(index);
  };

  return (
    
    <div className="inner-container">
       
      <button className="circle1" onClick={prevSlide}>
      <h4 className='h4-icon'>^</h4>
      </button>
     
      <div className="slide">
        {slides[currentSlideIndex]}
      </div>
      
      <button className="circle2" onClick={nextSlide}>
      <h4 className="h4-icon2">^</h4>
      </button>
      {/* <div className="slider-navigation">
        {slides.map((_, index) => (
          <button
            key={index}
            className=""
            onClick={() => goToSlide(index)}
          >
            
          </button>
        ))}
      </div> */}
      <div/>
 </div>
  );
};

export default ContentSlider;