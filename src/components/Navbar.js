import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useWindowSize } from 'react-use';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import logo from '../assets/LogoACQ.svg';

function Navbar() {

  const [openLinks, setOpenLinks] = useState(false);
  const { width } = useWindowSize();
  const toggleNav = () => {
    setOpenLinks(!openLinks);
  };

  const closeNav = () => {
    setOpenLinks(false);
  };

  useEffect(() => {
    if (openLinks && width < 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openLinks, width]);
  

  return (
    <div className='navbar flex'>
      <div className='bg absolute flex gap-[150px] md:gap-[150px]'>
        <div className='stripe'></div>
        <div className='stripe'></div>
        <div className='stripe'></div>
        <div className='stripe'></div>
        <div className='stripe'></div>
        <div className='stripe'></div>
        <div className='stripe'></div>
        <div className='stripe'></div>
        <div className='stripe'></div>
        <div className='stripe'></div>
        <div className='stripe'></div>
        <div className='stripe'></div>
        <div className='stripe'></div>
        <div className='stripe'></div>
        <div className='stripe'></div>
        <div className='stripe'></div>
        <div className='stripe'></div>
        <div className='stripe'></div>
        <div className='stripe'></div>
        <div className='stripe'></div>
        <div className='stripe'></div>
      </div>
      <div className='drapes absolute flex gap-[-205px]'>
        <div className='drape'>
          <div className='lights'></div>
        </div>
        <div className='drape'>
          <div className='lights'></div>
        </div>
        <div className='drape'>
          <div className='lights'></div>
        </div>
        <div className='drape'>
          <div className='lights'></div>
        </div>
        <div className='drape'>
          <div className='lights'></div>
        </div>
        <div className='drape'>
          <div className='lights'></div>
        </div>
        <div className='drape'>
          <div className='lights'></div>
        </div>
        <div className='drape'>
          <div className='lights'></div>
        </div>
        <div className='drape'>
          <div className='lights'></div>
        </div>
        <div className='drape'>
          <div className='lights'></div>
        </div>
        <div className='drape'>
          <div className='lights'></div>
        </div>
        <div className='drape'>
          <div className='lights'></div>
        </div>
        <div className='drape'>
          <div className='lights'></div>
        </div>
        <div className='drape'>
          <div className='lights'></div>
        </div>
        <div className='drape'>
          <div className='lights'></div>
        </div>
        <div className='drape'>
          <div className='lights'></div>
        </div>
        <div className='drape'>
          <div className='lights'></div>
        </div>
        <div className='drape'>
          <div className='lights'></div>
        </div>
      </div>
      <div className='darken relative absolute' id={openLinks ? "open" : "close"} onClick={closeNav}></div>
      <div className='left left-1 text-3xl top-5 absolute'>
        <img src={logo} className='w-[8vw] h-[8vh] ml-0 mt-[-2vh] md:ml-[-20%] md:mt-[-14%]' />
      </div>
      <div className='Front flex absolute bottom-5 right-5'>
        <div className='hidden' id={openLinks ? "open" : "close"}>
        <Link to="/countdown" onClick={closeNav} className=' entry raffle' id='raffle-red'> Countdown </Link>
          <Link to="/" onClick={closeNav}> Home </Link>
          <Link to="/about" onClick={closeNav}> About </Link>
          <Link to="/schedule" onClick={closeNav}> Schedule </Link>
          <Link to="/rules" onClick={closeNav}> Rules </Link>
          <div className='navMascot'></div>
        </div>
        <div className='right mr-2 mb-[-7%]'>
        <Link to="/countdown"> Countdown </Link>
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/schedule"> Schedule </Link>
          <Link to="/rules"> Rules </Link>
        </div>
        <button onClick={toggleNav} id="burger" className='burger mb-2 mr-1'>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
