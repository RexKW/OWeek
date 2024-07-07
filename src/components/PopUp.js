import React from 'react'
import '../styles/PopUp.css'

function PopUp(props) {
  return(props.trigger) ? (
    <div className='popup'>
      <div className='popupInner'>
        <button className='closeButton' onClick={() => props.setTrigger(false)}>close</button>
        {props.children}

      </div>
    </div>
  ) : "";
}

export default PopUp
