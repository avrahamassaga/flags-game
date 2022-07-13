import React from 'react'
import './Head.css'
import {globusGif} from '../../../assets/MediaData'
export default function Head() {
  function restRec(){
    localStorage.setItem('recordPlayer',0)
  }
  return (
    <div className='head-container flex-center-col' >
        <div className="title-game" onClick={restRec}>
            <h1>משחק הדגלים</h1>
        </div>
        <img src={globusGif} alt="globus" />
    </div>
  )
}
