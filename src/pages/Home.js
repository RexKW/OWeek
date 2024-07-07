import React from 'react';
import '../styles/Home.css';
import Black from '../assets/Black.png';

function Home() {
  return (
    <div className='home'>
      <div id='container' className='flex relative m-[8%]'>
        <div id="contentTop" className=''>
          <img src={Black} className='w-[250px] h-[375px] ' />
        </div>
        <div className='contentLeft z-0 my-auto'>
          <div className='boxContent mt-5'>
            <div className='boxContentHeader'>
              <h2 className='text-4xl font-bold md:text-5xl'><span id='line1'>Welcome to</span><span id='line2'> O-WEEK 2024</span></h2>
            </div>
            <div className='boxContentText flex'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
          </div>
        </div>
        <div id="contentRight" className=''>
          <img src={Black} className='w-[300px] h-[450px] ' />
        </div>
      </div>
    </div>
  )
}

export default Home
