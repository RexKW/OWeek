import React, { useState } from 'react';
import{Link} from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {

  const [openLinks, setOpenLinks] = useState(false);
  const toggleNav = () => {
    setOpenLinks(!openLinks)
  };

  return (
    <div className='navbar flex relative'>
      <div className='bg absolute flex top-0 z-1 gap-[100px] md:gap-[150px]'>
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
      <div className='drapes absolute z-0'>

      </div>
      <div className='darken relative absolute' id={openLinks ? "open" : "close"}>

      </div>
      <div className='left left-1 text-3xl top-5 absolute'><h1>hi</h1></div>
      <div className='Front flex absolute z-2 bottom-5 right-5'>
        
          <div className='hidden relative'  id={openLinks ? "open" : "close"}>
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/schedule"> Schedule </Link>
            <Link to="/rules"> Rules </Link>
          </div>
        <div className='right mr-5'>
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/schedule"> Schedule </Link>
          <Link to="/rules"> Rules </Link>
        </div>
        <button onClick={toggleNav} className='burger mr-5'>
          <ReorderIcon />
        </button>
      </div>
        
    </div>
  )
}

export default Navbar
