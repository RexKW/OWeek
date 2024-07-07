import React, { useEffect, useRef, useState } from 'react';
import '../styles/Schedule.css';
import ActivityCard from '../components/ActivityCard';
import { ActivityList1 } from '../helpers/ActivityList1';
import { ActivityList2 } from '../helpers/ActivityList2';
import { ActivityList3 } from '../helpers/ActivityList3';
import { ActivityList4 } from '../helpers/ActivityList4';
import Carousel from 'react-bootstrap/Carousel';

function Schedule() {
  const [time, setTime] = useState('00:00:00');
  const [day, setSelectedDay] = useState('');
  const [activityList, setActivityList] = useState(ActivityList1);
  const [progress, setProgress] = useState(0);
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
  const interval = useRef();
  const targetTime = '18:00:00'; // adjust this to your desired target time

  const calculateCurrentActivityIndex = (list) => {
    const now = new Date();
    const currentTimeInSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

    // Find the first activity that hasn't ended yet
    const index = list.findIndex((activity) => {
      const { timeStart, timeEnd } = activity;

      if (!(timeStart instanceof Date) || !(timeEnd instanceof Date)) {
        console.error('timeStart and timeEnd should be Date objects');
        return false;
      }

      const activityStartInSeconds = timeStart.getHours() * 3600 + timeStart.getMinutes() * 60;
      const activityEndInSeconds = timeEnd.getHours() * 3600 + timeEnd.getMinutes() * 60;

      return currentTimeInSeconds < activityEndInSeconds;
    });
    console.log("Current Activity Index:", index);

    return index === -1 ? 0 : index; // default to the first activity if none are found
  };

  const getActivityListAndDay = () => {
    const today = new Date();
    const date = today.getDate();
    const month = today.getMonth() + 1;

    if (month === 6) {
      switch (date) {
        case 15:
          return { activityList: ActivityList1, day: 'Day 1' };
        case 16:
          return { activityList: ActivityList2, day: 'Day 2' };
        case 17:
          return { activityList: ActivityList3, day: 'Day 3' };
        case 18:
          return { activityList: ActivityList4, day: 'Day 4' };
        default:
          return { activityList: ActivityList1, day: 'Day 1' };
      }
    }

    return { activityList: ActivityList1, day: 'Day 1' }; // default case
  };

  const startTimer = () => {
    interval.current = setInterval(() => {
      const now = new Date();
      const hours = `0${now.getHours()}`.slice(-2);
      const minutes = `0${now.getMinutes()}`.slice(-2);
      const seconds = `0${now.getSeconds()}`.slice(-2);

      const currentTime = `${hours}:${minutes}:${seconds}`;
      const currentTimeInSeconds = currentTime.split(':').reduce((acc, val) => acc * 60 + parseInt(val), 0);
      const targetTimeInSeconds = targetTime.split(':').reduce((acc, val) => acc * 60 + parseInt(val), 0);

      const progressPercentage = (currentTimeInSeconds / targetTimeInSeconds) * 100;
      if (progressPercentage < 100) {
        setProgress(progressPercentage);
      } else {
        setProgress(100);
      }

      setTime(`${hours} : ${minutes} : ${seconds}`);
    }, 1000);
  };

  useEffect(() => {
    const { activityList, day } = getActivityListAndDay();
    setActivityList(activityList);
    setSelectedDay(day);
    const currentIndex = calculateCurrentActivityIndex(activityList);
    setCurrentActivityIndex(currentIndex);
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className='schedule'>
      <div className='topContainer relative'>
        <div className='dayCard absolute left-0 '>
          <p className='text-4xl mx-auto mt-20 md:mt-40'>{day}</p>
          <p className='text-4xl mx-auto mt-3 md:mt-5'>{time}</p>
          <div className='progressBar relative'>
            <div className='bar absolute' style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <div className='mascot absolute right-10 '>
          hi
        </div>
      </div>

      <div className='bottomContainer relative mt-3 md:mt-5'>
        <div>
          <p className='text-5xl text-start'>Activity</p>
        </div>
        <div className='activities'>
          <Carousel indicators={false} defaultActiveIndex={currentActivityIndex} interval={null} touch={true}>
            {activityList.map((activity, key) => (
              <Carousel.Item key={key}>
                <ActivityCard
                  name={activity.name}
                  type={activity.type}
                  timeStart={activity.timeStart}
                  timeEnd={activity.timeEnd}
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
