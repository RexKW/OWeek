import React, { useState } from 'react';
import Slider from 'react-slick';
import '../styles/Carousel.css';
import image1 from '../assets/1c218edb013d9231aa465e87a16eb8ec.jpg';
import image2 from '../assets/landscape-293chzhp3r67ag4a.jpg';
import image3 from '../assets/landscape-windows-11-lake-forest-day-time-1920x1080-8621.jpeg';

const images = [image1, image2, image3];

function CarouselVertical() {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    slidesToShow: 3,  // Ensures that the active slide is centered
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    autoplay: true,
    speed: 2500,
    arrows: false,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    pauseOnFocus: false,
    centerMode: true,
    cssEase: "linear",
    centerPadding: "0px",  // Ensure there is no padding so the slide is perfectly centered
    initialSlide: 1,  // Make sure initial slide is correctly set
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className={idx === imageIndex ? "slide activeSlide" : "slide"}
          >
            <img src={img} alt={`Slide ${idx}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselVertical;
