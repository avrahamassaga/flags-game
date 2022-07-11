import React,{useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import FlagContext from '../../../GameData/Function/ContextApi/PlayContext'
import './KeysConteiner.css'
export default function KeyBtn(props) {
  const{nextFlag}=useContext(FlagContext)
  const nav = useNavigate();
  return (
    <div className='key-btn'>
        <button onClick={()=>nextFlag(props.ans,nav)}>{props.ans.name}</button>
    </div>
  )
}
