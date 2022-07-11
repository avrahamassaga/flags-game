import React,{useContext} from 'react';
import { coutries } from '../../../GameData/Data/Countries';
import './PlayBtn.css';
import {useNavigate} from 'react-router-dom';
import FlagContext from '../../../GameData/Function/ContextApi/PlayContext';
export default function PlayBtn() {
  const nav =useNavigate();
  const{playerRecord}=useContext(FlagContext)
  return (
    <div className='playBtn-Container flex-center-col'>
      <div className="details">
        <p>:הידע שלך על העולם</p>
        <p>{(playerRecord*coutries.length)/100}%</p>
        <p>{playerRecord} :שיא</p>
      </div>
        <br />
        <button onClick={()=>nav('game')}>התחל</button>
    </div>
  )
}
