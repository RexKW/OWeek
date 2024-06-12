import React from 'react';
import '../styles/Home.css';
import Black from '../assets/Black.png';

function Home() {
  return (
    <div className='home'>
      <div id='container' className='flex relative m-[8%] bg-red-100'>
        <div id="contentTop" className=''>
          <img src={Black} className='w-[300px] h-[450px] ' />
        </div>
        <div className='contentLeft z-10 my-auto'>
          <div className='boxContent mt-5'>
            <div className='boxContentHeader'>
              <h2 className='text-3xl font-bold'>Welcome to O-WEEK 2024</h2>
            </div>
            <div className='boxContentText'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
