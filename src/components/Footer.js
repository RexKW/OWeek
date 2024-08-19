import React from 'react';
import '../styles/Footer.css';
import acqLogo from '../assets/AcqLogo.png'
import ucLogo from '../assets/Emblem UC Surabaya-min.png'
import oLogo from '../assets/Logo Oweek Putih.png'

function Footer() {
  return (
    <div className='footer'>
      <div className='left'>
        <img src={ucLogo} id='ucLogo'/>
        <img src={oLogo} id='oLogo'/>
      </div>
      <div className='middle'>
        <img src={acqLogo} id='acqLogoF'/>
      </div>
      <div className='right flex flex-col sm:text-base'>
        <p>Contact Person</p>
        <p>Line CP: @593ddleh</p>
      </div>
    </div>
  )
}

export default Footer
