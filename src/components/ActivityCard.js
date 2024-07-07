import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import PopUp from './PopUp';
import '../styles/ActivityCard.css';

function ActivityCard({ name, type, timeStart, timeEnd }) {
  const now = new Date();
  const timeStartString = timeStart.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const timeEndString = timeEnd.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const [buttonPopUp, setButtonPopUp] = useState(false);
  const getStatus = () => {
    if (timeStart < now && timeEnd > now) {
      return 'Ongoing';
    } else if (timeStart > now) {
      return 'Upcoming';
    } else if (now > timeEnd) {
      return 'Passed';
    }
  };


  if(type===1){
    if(getStatus() === 'Ongoing'){
      return (
        <div className="activity1 w-full carousel-item" data-carousel-item="active">
          <div className='desc'>
            <p className='text-3xl md:text-5xl'>{name}</p>
            <div className='lineInfo flex'>
              <p className='text-xl md:text-3xl'>{getStatus()}</p>
              <button className='popUpButton' onClick={() => setButtonPopUp(true)}>hi</button>
            </div>
            <p className='text-2xl md:text-4xl'>{timeStartString} - {timeEndString}</p>
          </div>
          <div className='mascotAct'>

          </div>
          <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
            <h1>Info</h1>
          </PopUp>
            
        </div>
      )

    }else{
      return(
        <div className="activity1 w-full carousel-item" data-carousel-item="active">
          <div className='desc'>
            <p className='text-3xl md:text-5xl'>{name}</p>
            <div className='lineInfo flex'>
              <p className='text-xl md:text-3xl'>{getStatus()}</p>
              <button className='popUpButton' onClick={() => setButtonPopUp(true)}></button>
            </div>
            <p className='text-2xl md:text-4xl'>{timeStartString} - {timeEndString}</p>
          </div>
          <div className='mascotAct'>

          </div>
          <PopUp className='absolute' trigger={buttonPopUp} setTrigger={setButtonPopUp}>
            <p className='text-3xl'>{name}</p>
            <p>Lorem ipsum i dont know what to put here lol. Imma just yap in this paragraph</p>
          </PopUp>
        </div>
    )
    }
    
  }else if(type===2){
    if(getStatus()=== 'Ongoing'){
      return (
        <div className="activity2 w-full carousel-item" data-carousel-item="active">
          <div className='desc'>
            <p className='text-3xl md:text-5xl'>{name}</p>
            <div className='lineInfo flex'>
              <p className='text-xl md:text-3xl'>{getStatus()}</p>
              <button className='popUpButton' onClick={() => setButtonPopUp(true)}></button>
            </div>
            <p className='text-2xl md:text-4xl'>{timeStartString} - {timeEndString}</p>
          </div>
          <div className='mascotAct'>

          </div>
          <PopUp className='absolute' trigger={buttonPopUp} setTrigger={setButtonPopUp}>
            <p className='text-3xl'>{name}</p>
            <p>Lorem ipsum i dont know what to put here lol. Imma just yap in this paragraph</p>
          </PopUp>
        </div>
      )

    }else{
      return(
        <div className="activity2 w-full carousel-item" data-carousel-item="active">
          <div className='desc'>
            <p className='text-3xl md:text-5xl'>{name}</p>
            <div className='lineInfo flex'>
              <p className='text-xl md:text-3xl'>{getStatus()}</p>
              <button className='popUpButton' onClick={() => setButtonPopUp(true)}></button>
            </div>
            <p className='text-2xl md:text-4xl'>{timeStartString} - {timeEndString}</p>
          </div>
          <div className='mascotAct'>

          </div>
          <PopUp className='absolute' trigger={buttonPopUp} setTrigger={setButtonPopUp}>
            <p className='text-3xl'>{name}</p>
            <p>Lorem ipsum i dont know what to put here lol. Imma just yap in this paragraph</p>
          </PopUp>
        </div>
    )
    }
  }else if(type===3){
    if(getStatus()=== 'Ongoing'){
      return (
        <div className="activity3 w-full carousel-item" data-carousel-item="active">
          <div className='desc'>
            <p className='text-3xl md:text-5xl'>{name}</p>
            <div className='lineInfo flex'>
              <p className='text-xl md:text-3xl'>{getStatus()}</p>
              <button className='popUpButton' onClick={() => setButtonPopUp(true)}></button>
            </div>
            <p className='text-2xl md:text-4xl'>{timeStartString} - {timeEndString}</p>
          </div>
          <div className='mascotAct'>

          </div>
          <PopUp className='absolute' trigger={buttonPopUp} setTrigger={setButtonPopUp}>
            <p className='text-3xl'>{name}</p>
            <p>Lorem ipsum i dont know what to put here lol. Imma just yap in this paragraph</p>
          </PopUp>
        </div>
      )

    }else{
      return(
        <div className="activity3 w-full carousel-item" data-carousel-item="active">
          <div className='desc'>
            <p className='text-3xl md:text-5xl'>{name}</p>
            <div className='lineInfo flex'>
              <p className='text-xl md:text-3xl'>{getStatus()}</p>
              <button className='popUpButton' onClick={() => setButtonPopUp(true)}></button>
            </div>
            <p className='text-2xl md:text-4xl'>{timeStartString} - {timeEndString}</p>
          </div>
          <div className='mascotAct'>

          </div>
          <PopUp className='absolute' trigger={buttonPopUp} setTrigger={setButtonPopUp}>
            <p className='text-3xl'>{name}</p>
            <p>Lorem ipsum i dont know what to put here lol. Imma just yap in this paragraph</p>
          </PopUp>
        </div>
    )
    }
  }

}

ActivityCard.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  timeStart: PropTypes.instanceOf(Date).isRequired,
  timeEnd: PropTypes.instanceOf(Date).isRequired,
};

export default ActivityCard;
