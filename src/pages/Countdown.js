import React, { useState } from 'react'
import Timer from '../components/Timer';
import '../styles/Countdown.css';
import leftC from '../assets/leftCurtainwLight.svg';
import leftCM from '../assets/leftCurtainsM.svg';
import rightC from '../assets/rightCurtainwLight.svg';
import rightCM from '../assets/rightCurtainsM.svg';
import lightR from '../assets/lightRed.svg'
import lightP from '../assets/lightPink.svg'
import lightB from '../assets/lightBlue.svg'
import lightPr from '../assets/lightPurple.svg'

function Countdown() {
  return (
    <div className='countdown'>
      <img src={lightR} className='lightR'/>
      <img src={lightP} className='lightP'/>
      <img src={lightB} className='lightB'/>
      <img src={lightPr} className='lightPr'/>
        <img src={leftC} className='leftCR'/>
      <img src={leftCM} className='leftCRM'/>
      <img src={rightC} className='rightCR'/>
      <img src ={rightCM} className='rightCRM'/>
        <Timer className='timerCountdown'/>

        
    
    </div>
  )
}

export default Countdown
