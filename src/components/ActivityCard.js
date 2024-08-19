import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ActivityCard.css';
import { PiShirtFoldedLight } from "react-icons/pi";

function ActivityCard({ day, dressCode, name, type, date, timeStart, timeEnd, timeStart2, timeEnd2, penugasan, ketentuan, location, contact, onOpenPopUp }) {
  const timeStartString = timeStart.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const timeEndString = timeEnd.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const renderDayText = () => (
    day.split('').map((char, index) => (
      <span key={index}>
        {char === ' ' ? <><br /></> : char}
      </span>
    ))
  );

  const renderTime = () => {
    if (!timeStart2) {
      return (
        <div>
          <p className="time md:text-3xl">{timeStartString} - {timeEndString}</p>
        </div>
      );
    } else {
      const timeStartString2 = timeStart2.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const timeEndString2 = timeEnd2.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      return (
        <div>
          <p className="timeK">Kloter 1: {timeStartString} - {timeEndString}</p>
          <p className="timeK">Kloter 2: {timeStartString2} - {timeEndString2}</p>
        </div>
      );
    }
  };

  const renderActivityCard = (activityClass) => (
    <div className="wrapperCard" loading="lazy">
      <div className={`${activityClass} w-full carousel-item`} data-carousel-item="active">
        <div className="desc">
          <div className="flex">
            {}
          </div>
          <p className="actName " loading="lazy">{name}</p>
          <p className='date' loading="lazy">{date}</p>
          <p className='loc' loading="lazy">{location}</p>
          {renderTime()}
          <div className='mt-2 md:mt-3'>
            <button onClick={() => onOpenPopUp('penugasan', { penugasan })} className='extras'>Penugasan</button>
            <button onClick={() => onOpenPopUp('ketentuan', { ketentuan })} className='ml-4 extras'>Ketentuan</button>
          </div>
          <p className='contact' loading="lazy">{contact}</p>
        </div>
        <p className="dayText flex-col">
          {renderDayText()}
          <button className="infoSchedule" onClick={() => onOpenPopUp('dressCode', { dressCode })}>
              <PiShirtFoldedLight className='iconDC' loading="lazy"/>
            </button>
        </p>
      </div>
    </div>
  );

  return (
    <>
      {type === 1 && renderActivityCard("activity1")}
      {type === 2 && renderActivityCard("activity2")}
      {type === 3 && renderActivityCard("activity3")}
    </>
  );
}

ActivityCard.propTypes = {
  day: PropTypes.string.isRequired,
  dressCode: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  timeStart: PropTypes.instanceOf(Date).isRequired,
  timeEnd: PropTypes.instanceOf(Date).isRequired,
  penugasan: PropTypes.string.isRequired,
  ketentuan: PropTypes.string.isRequired,  
  location: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  onOpenPopUp: PropTypes.func.isRequired
};

export default ActivityCard;
