import React, { useState, useEffect } from 'react';
import{Link} from 'react-router-dom';
import { useWindowSize } from 'react-use';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {

  const [openLinks, setOpenLinks] = useState(false);
  const { width } = useWindowSize();
  const toggleNav = () => {
    setOpenLinks(!openLinks)
  };

  useEffect(() => {
    if (openLinks && width < 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openLinks, width]);
  

  return (
    <div className='navbar flex relative'>
      <div className='bg absolute flex top-0 gap-[150px] md:gap-[150px] '>
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
      <div className='darken relative absolute' id={openLinks ? "open" : "close"}>

      </div>
      <div className='left left-1 text-3xl top-5 absolute'><h1>hi</h1></div>
      <div className='Front flex absolute bottom-5 right-5'>
          <div className='hidden'  id={openLinks ? "open" : "close"}>
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/schedule"> Schedule </Link>
            <Link to="/rules"> Rules </Link>
            <div className='navMascot'></div>
          </div>
        <div className='right mr-5 mb-[-7%]'>
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/schedule"> Schedule </Link>
          <Link to="/rules"> Rules </Link>
        </div>
        <button onClick={toggleNav} id="burger" className='burger mr-5'>
          <ReorderIcon/>
        </button>
      </div>
        
    </div>
  )
}

export default Navbar
