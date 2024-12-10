import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageSlider = () => {
  // Sample slider data - replace with your actual images and content
  const slides = [
    {
      image: '../../assets/images/goods.jpg',
      title: 'Help Sandip end the suffering of abandoned elderly parents',
      buttonText: 'Donate now'
    },
    {
      image: '../../assets/images/goods.jpg',
      title: 'Support education for underprivileged children',
      buttonText: 'Contribute now'
    },
    {
      image: '/api/placeholder/1200/500',
      title: 'Join us in providing healthcare to rural communities',
      buttonText: 'Help now'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500); // Match this with CSS transition duration
  };

  const goToNext = () => {
    if (isAnimating) return;
    const nextIndex = (currentIndex + 1) % slides.length;
    goToSlide(nextIndex);
  };

  const goToPrevious = () => {
    if (isAnimating) return;
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(prevIndex);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(goToNext, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Slides Container */}
      <div 
        className="relative w-full h-full transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute top-0 left-0 w-full h-full"
            style={{
              transform: `translateX(${index * 100}%)`,
            }}
          >
            {/* Slide Background */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>

            {/* Slide Content */}
            <div className="relative z-10 flex flex-col h-full px-16 justify-center">
              <h2 className="max-w-2xl text-5xl font-bold text-white leading-tight">
                {slide.title}
              </h2>
              <button className="px-8 py-3 mt-8 text-white bg-red-500 rounded-full w-fit hover:bg-red-600 transition-colors">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-red-500 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-red-500 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentIndex === index 
                ? 'bg-red-500' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;