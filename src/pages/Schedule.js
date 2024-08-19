import React, { useEffect, useRef, useState, useCallback } from 'react';
import '../styles/Schedule.css';
import ActivityCard from '../components/ActivityCard';
import Carousel from 'react-bootstrap/Carousel';
import { ActivityListD } from '../helpers/ActivityListD';
import PopUp from '../components/PopUp';
import leftC from '../assets/leftCurtainwLight.svg';
import leftCM from '../assets/leftCurtainsM.svg';
import rightC from '../assets/rightCurtainwLight.svg';
import rightCM from '../assets/rightCurtainsM.svg';
import Chicks from '../assets/3Chicks-min.png';
import scheduleSign from '../assets/schedule board copy.png';
import Rundown from '../helpers/Rundown';
import DressCode from '../helpers/Dresscode';
import Penugasan from '../helpers/Penugasan';
import Ketentuan from '../helpers/Ketentuan';

function Schedule() {
  const [day, setSelectedDay] = useState('');
  const [activityList, setActivityList] = useState(ActivityListD);
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
  const [buttonPopUp, setButtonPopUp] = useState(false);
  const [dressCodePopUp, setDressCodePopUp] = useState(false);
  const [penugasanPopUp, setPenugasanPopUp] = useState(false);
  const [ketentuanPopUp, setKetentuanPopUp] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const intervalRef = useRef(null);
  const [dressCode, setDressCode] = useState('0');
  const [runDown, setRunDown] = useState('0');

  const calculateCurrentActivityIndex = (list) => {
    const now = new Date();
    const index = list.findIndex((activity) => {
      const { timeStart, timeEnd } = activity;
      if (!(timeStart instanceof Date) || !(timeEnd instanceof Date)) {
        console.error('timeStart and timeEnd should be Date objects');
        return false;
      }
      if (timeStart <= timeEnd) {
        return timeStart <= now && now <= timeEnd;
      } else {
        return now >= timeStart || now <= timeEnd;
      }
    });
    return index === -1 ? 0 : index;
  };

  const getActivityListAndDay = (index) => {
    if (index === 0) {
      return { activityList: ActivityListD, day: '16 Aug', dressCode: '16', runDown: '16Aug' };
    } else if (index === 1) {
      return { activityList: ActivityListD, day: '17 Aug', dressCode: '17', runDown: '17Aug' };
    }else if (index === 2){
      return { activityList: ActivityListD, day: '17 Aug', dressCode: '17', runDown:'17Aug'};
    } else if (index === 3) {
      return { activityList: ActivityListD, day: 'Day 1', dressCode: '1', runDown: '2Sep' };
    } else if (index === 4) {
      return { activityList: ActivityListD, day: 'Day 2', dressCode: '2', runDown: '3Sep' };
    } else if (index === 5) {
      return { activityList: ActivityListD, day: 'Day 3', dressCode: '3', runDown: '4Sep' };
    } else if (index === 6) {
      return { activityList: ActivityListD, day: 'Day 4', dressCode: '4', runDown: '5Sep' };
    } else if (index === 7) {
      return { activityList: ActivityListD, day: 'Day 5', dressCode: '5', runDown: '6Sep' };
    } else if (index === 8) {
      return { activityList: ActivityListD, day: 'Day 6', dressCode: '6', runDown: '7Sep' };
    }
  };

  useEffect(() => {
    const updateActivityIndex = () => {
      const newIndex = calculateCurrentActivityIndex(activityList);
      setCurrentActivityIndex(newIndex);
    };

    updateActivityIndex(); 

    const now = new Date();
    const msUntilMidnight = (24 - now.getHours()) * 3600000 - now.getMinutes() * 60000 - now.getSeconds() * 1000;
    setTimeout(() => {
      updateActivityIndex();
      intervalRef.current = setInterval(updateActivityIndex, 86400000); // Update every 24 hours
    }, msUntilMidnight);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [activityList]);

  useEffect(() => {
    const { activityList, day, dressCode, runDown } = getActivityListAndDay(currentActivityIndex);
    setActivityList(activityList);
    setDressCode(dressCode);
    setRunDown(runDown);
    setSelectedDay(day);
  }, [currentActivityIndex]);

  const openPopUp = useCallback((type, activity) => {
    setSelectedActivity(activity);
    if (type === 'dressCode') setDressCodePopUp(true);
    if (type === 'penugasan') setPenugasanPopUp(true);
    if (type === 'ketentuan') setKetentuanPopUp(true);
  }, []);

  const closePopUps = () => {
    setDressCodePopUp(false);
    setPenugasanPopUp(false);
    setKetentuanPopUp(false);
    setSelectedActivity(null);
  };

  return (
    <div className='schedule'>
      <img src={leftCM} className='leftCurtainSM' alt="Left Curtain Small" loading="lazy"/>
      <img src={rightCM} className='rightCurtainSM' alt="Right Curtain Small" loading="lazy"/>
      <img src={leftC} className='leftCurtainS' alt="Left Curtain" loading="lazy"/>
      <img src={rightC} className='rightCurtainS' alt="Right Curtain" loading="lazy"/>
      <div className='flex justify-center'>
        <img src={scheduleSign} className='scheduleSign' alt="Schedule Sign" loading="lazy"/>
      </div>
      <button className="viewFull text-xs md:text-sm" onClick={() => setButtonPopUp(true)}>View Full Schedule</button>
      <PopUp className="absolute" trigger={buttonPopUp} setTrigger={setButtonPopUp}>
        <Rundown runDown={runDown} currentActivityIndex={currentActivityIndex} />
      </PopUp>
      
      {dressCodePopUp && (
        <PopUp className="absolute" trigger={dressCodePopUp} setTrigger={closePopUps} loading="lazy">
          <p>{selectedActivity?.dressCode}</p>
        </PopUp>
      )}
      {penugasanPopUp && (
        <PopUp className="absolute" trigger={penugasanPopUp} setTrigger={closePopUps} loading="lazy">
          <p>{selectedActivity?.penugasan}</p>
        </PopUp>
      )}
      {ketentuanPopUp && (
        <PopUp className="absolute" trigger={ketentuanPopUp} setTrigger={closePopUps} loading="lazy">
          <p>{selectedActivity?.ketentuan}</p>
        </PopUp>
      )}

      <img src={Chicks} className='iChick' alt="Chicks" loading="lazy"/>
      <div className='bottomContainer relative'>
        <div className='absolute left-[5%] flex justify-start top-[1%] md:top-[5%]'></div>
        <div className='activities'>
          <Carousel
            indicators={false}
            activeIndex={currentActivityIndex}
            interval={null}
            touch={!buttonPopUp}
            slide={true}
            wrap={false}
            onSelect={(index) => !buttonPopUp && setCurrentActivityIndex(index)}
          >
            {activityList.map((activity, key) => (
              <Carousel.Item key={key} loading="lazy">
                <ActivityCard
                  day={activity.day}
                  dressCode={<DressCode dressCode={dressCode} />}
                  name={activity.name}
                  type={activity.type}
                  date={activity.date}
                  timeStart={activity.timeStart}
                  timeEnd={activity.timeEnd}
                  timeStart2={activity.timeStart2}
                  timeEnd2={activity.timeEnd2}
                  penugasan={<Penugasan dressCode={dressCode} currentActivityIndex={currentActivityIndex} />}
                  ketentuan={<Ketentuan dressCode={dressCode} currentActivityIndex={currentActivityIndex}/>}
                  location={activity.location}
                  contact={activity.contact}
                  onOpenPopUp={openPopUp}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
