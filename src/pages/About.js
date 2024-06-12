import React from 'react';
import '../styles/About.css';
import CarouselVertical from '../components/CarouselVertical';
import CarouselHorizontal from '../components/CarouselHorizontal';

function About() {
  return (
    <div className='about'>
      <div className='galleryHorizontal'>
        <CarouselHorizontal />
      </div> 
      
      <div className='aboutBox'>
        <h2 className='text-3xl font-bold'>About</h2>
        <p className='mt-5'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
      </div>
        <div className='galleryVertical'>
          <CarouselVertical/>
        </div> 
    </div>
  )
}

export default About
