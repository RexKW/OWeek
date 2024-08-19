import React from 'react';
import '../styles/Home.css';
import { useParallax } from 'react-scroll-parallax';
import leftC from '../assets/leftCurtainwLight.svg';
import leftCM from '../assets/leftCurtainsM.svg';
import rightC from '../assets/rightCurtainwLight.svg';
import rightCM from '../assets/rightCurtainsM.svg';
import topC from '../assets/topCurtain_3.png';
import topCM from '../assets/topCurtainMCut.png';
import acqLogo from '../assets/acqLogo.svg';
import BEEGTENT from '../assets/BEEGTENT.svg';
import smolTent from '../assets/carnivalPhoneLong.png';
import BANNER from '../assets/tent banner-01.svg';
import ACQUIREWITHBG from '../assets/homeSign.png';
import ticket from '../assets/tickets dekstop 4.png';
import ticketM from '../assets/tickets with mascot phone.png';
import cannonL from '../assets/cannonL.svg';
import cannonR from '../assets/cannonR.svg';
import lights from '../assets/lights.svg';

const Home = () => {
  const { ref: parallaxRef1 } = useParallax({
    translateX: [35, -50],
    speed: 5,
    easing: 'linear',
  });
  const { ref: parallaxRef2 } = useParallax({
    translateX: [-25, 35],
    speed: 5,
    easing: 'linear',
  });
  const { ref: parallaxRef5 } = useParallax({
    speed: 20,
    easing: 'linear',
  });
  const { ref: parallaxRef8 } = useParallax({
    speed: 15,
    easing: 'linear',
  });
  const { ref: parallaxRef9 } = useParallax({
    speed: 20,
    easing: 'linear',
  });
  const { ref: parallaxRef10 } = useParallax({
    translateX: [50, -25],
    easing: 'linear',
  });
  const { ref: parallaxRef11 } = useParallax({
    translateX: [-30, 10],
    easing: 'linear',
  });
  const { ref: parallaxRef12 } = useParallax({
    speed: 10,
    easing: 'linear',
  });
  const { ref: parallaxRef13 } = useParallax({
    translateX: [45, -50],
    speed: 5,
    easing: 'linear',
  });
  const { ref: parallaxRef14 } = useParallax({
    translateX: [-25, 25],
    speed: 5,
    easing: 'linear',
  });
  const { ref: parallaxRef15 } = useParallax({
    speed: 2,
    easing: 'linear',
  });
  const { ref: parallaxRef16 } = useParallax({
    speed: 20,
    easing: 'linear',
  });
  const { ref: parallaxRef17 } = useParallax({
    speed: 15,
    easing: 'linear',
  });

  const { ref: parallaxRef18 } = useParallax({
    speed: 20
  });


  return (
    <div className='home'>
      <img src={topC} className='topCurtain' ref={parallaxRef12} loading="lazy" />
      <img src={leftC} className='leftCurtain' ref={parallaxRef1} loading="lazy" />
      <img src={leftCM} className='leftCurtainM' ref={parallaxRef13} loading="lazy" />
      <img src={rightC} className='rightCurtain' ref={parallaxRef2} loading="lazy" />
      <img src={rightCM} className='rightCurtainM' ref={parallaxRef14} loading="lazy" />
      <img src={topCM} className='topCurtainM' ref={parallaxRef15} loading="lazy" />
      <img src={acqLogo} className='acqLogo' loading="lazy" />
      <div className='acqGlow'></div>
      <div id='container' className='flex relative m-[8%]'>
        <div className='contentLeft z-0 mt-[-50%] mx-auto'>
          <div className='boxContent mt-5'>
            <img src={ACQUIREWITHBG} className='SIGN' loading="lazy" />
          </div>
        </div>
      </div>
      <img src={BEEGTENT} className='tent' ref={parallaxRef5} loading="lazy" />
      <img src={smolTent} className='tentM' ref={parallaxRef16} loading="lazy" />
      <img src={lights} className='spotLight' loading="lazy" ref={parallaxRef18}/>
      <img src={cannonL} className='leftCannon' ref={parallaxRef11} loading="lazy" />
      <img src={cannonR} className='rightCannons' ref={parallaxRef10} loading="lazy" />
      <img src={BANNER} className='BANNER' ref={parallaxRef8} loading="lazy" />
      <img src={ticket} className='tickets' ref={parallaxRef9} loading="lazy" />
      <img src={ticketM} className='ticketsM' ref={parallaxRef17} loading="lazy" />
    </div>
  );
};

export default Home;
