import React, { useEffect, useState, useRef } from 'react';
import '../styles/Timer.css'

function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });


  const intervalRef = useRef();

  const startTimer = () => {
    const targetDate = new Date('September 2, 2024 00:07:00').getTime();

    intervalRef.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(intervalRef.current);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days: days < 10 ? '0' + days : days.toString(),
          hours: hours < 10 ? '0' + hours : hours.toString(),
          minutes: minutes < 10 ? '0' + minutes : minutes.toString(),
          seconds: seconds < 10 ? '0' + seconds : seconds.toString(),
        });
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className='timer'>
      <div className='timerLights timerBorder '>
      </div>
      <p className='oweekLogo'>O-WEEK 2024</p>
      <section className='containerT'>
        <p>{timeLeft.days}</p>
        <p className='descT'><small>Days</small></p>
      </section>
      <span className='dividerT'>:</span>
      <section className='containerT'>
        <p>{timeLeft.hours}</p>
        <p className='descT'><small>Hours</small></p>
      </section>
      <span className='dividerT'>:</span>
      <section className='containerT'>
        <p>{timeLeft.minutes}</p>
        <p className='descT'><small>Minutes</small></p>
      </section>
      <span className='dividerT'>:</span>
      <section className='containerT'>
        <p>{timeLeft.seconds}</p>
        <p className='descT'><small>Seconds</small></p>
      </section>
    </div>
  );
}

export default Timer;
