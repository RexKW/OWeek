import React from 'react'
import '../styles/PopUp.css'
import { RxCross2 } from "react-icons/rx";

function PopUp(props) {
  return(props.trigger) ? (
    <div className='popup'>
      <div className='popupInner'>
        <button onClick={() => props.setTrigger(false) } className='closeButton'><RxCross2 className='closeButtonIcon'/></button>
        {props.children}

      </div>
    </div>
  ) : "";
}

export default PopUp
