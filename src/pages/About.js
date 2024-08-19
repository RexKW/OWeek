import React from 'react';
import '../styles/About.css';
import envBack from '../assets/envBack.svg';
import aboutLetter from '../assets/aboutLetter.svg';
import envFront from '../assets/envFront.svg';
import envBackM from '../assets/envBackM.svg';
import aboutLetterM from '../assets/aboutLetterM.svg';
import envFrontM from '../assets/envFrontM.svg';
import leftC from '../assets/leftCurtainwLight.svg';
import leftCM from '../assets/leftCurtainsM.svg';
import rightC from '../assets/rightCurtainwLight.svg';
import rightCM from '../assets/rightCurtainsM.svg';
import topC from '../assets/topCurtain_3.png';
import lightR from '../assets/lightRed.svg';
import lightP from '../assets/lightPink.svg';
import lightB from '../assets/lightBlue.svg';
import lightPr from '../assets/lightPurple.svg';

function About() {
  return (
    <div className='about'>
      <img src={lightR} className='lightR' loading="lazy" />
      <img src={lightP} className='lightP' loading="lazy" />
      <img src={lightB} className='lightB' loading="lazy" />
      <img src={lightPr} className='lightPr' loading="lazy" />
      <img src={leftC} className='leftCurtainA' loading="lazy" />
      <img src={leftCM} className='leftCurtainAM' loading="lazy" />
      <img src={rightC} className='rightCurtainA' loading="lazy" />
      <img src={topC} className='topCurtainA' loading="lazy" />
      <img src={rightCM} className='rightCurtainAM' loading="lazy" />
      <img src={envBack} className='envBack' loading="lazy" />
      <img src={envBackM} className='envBackM' loading="lazy" />
      <img src={aboutLetter} className='aboutLetter' loading="lazy" />
      <img src={aboutLetterM} className='aboutLetterM' loading="lazy" />
      <img src={envFront} className='envFront' loading="lazy" />
      <img src={envFrontM} className='envFrontM' loading="lazy" />
    </div>
  );
}

export default About;
