import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import '../styles/CarouselH.css';
import image1 from '../assets/1c218edb013d9231aa465e87a16eb8ec.jpg';
import image2 from '../assets/landscape-293chzhp3r67ag4a.jpg';
import image3 from '../assets/landscape-windows-11-lake-forest-day-time-1920x1080-8621.jpeg';

const images = [image1, image2, image3];

function CarouselHorizontal() {
  const [slideIndex, setSlideIndex] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); // Change interval as needed

    return () => clearInterval(intervalId);
  }, [slideIndex]);

  useEffect(() => {
    // Append the first slide to the end of the track dynamically
    if (trackRef.current) {
      const firstSlide = trackRef.current.querySelector('.carousel-slideH');
      const clonedSlide = firstSlide.cloneNode(true);
      trackRef.current.appendChild(clonedSlide);
    }

    return () => {
      // Clean up the cloned slide when the component unmounts
      if (trackRef.current) {
        const lastSlide = trackRef.current.lastChild;
        if (lastSlide.classList.contains('carousel-slideH')) {
          trackRef.current.removeChild(lastSlide);
        }
      }
    };
  }, []);

  function nextSlide() {
    if (trackRef.current) {
      const newIndex = slideIndex === images.length - 1 ? 0 : slideIndex + 1;
      setSlideIndex(newIndex);
      trackRef.current.style.transition = 'transform 0.5s ease-in-out';
      trackRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
    }
  }


  return (
    <div className="carousel-containerH">
      <div className="carousel-trackH" ref={trackRef}>
        {images.map((image, index) => (
          <div className="carousel-slideH" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );

}

export default CarouselHorizontal;
