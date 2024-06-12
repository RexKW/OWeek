import React, { useState } from 'react';
import Slider from 'react-slick';
import '../styles/CarouselH.css';
import image1 from '../assets/1c218edb013d9231aa465e87a16eb8ec.jpg';
import image2 from '../assets/landscape-293chzhp3r67ag4a.jpg';
import image3 from '../assets/landscape-windows-11-lake-forest-day-time-1920x1080-8621.jpeg';

const images = [image1, image2, image3];

function CarouselHorizontal() {
  const [imageIndex, setImageIndex] = useState(0);
  
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    speed: 1500,
    arrows: false,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    pauseOnFocus: false,
    centerMode: true,
    cssEase: "linear",
    centerPadding: "50px", // Adjust as needed
    initialSlide: 1,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="slider-containerH">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className={idx === imageIndex ? "slideH activeSlideH" : "slideH"}
          >
            <img src={img} alt={`Slide ${idx}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselHorizontal;
