import React, { useContext } from "react";
import {AiFillHeart,AiFillStar} from 'react-icons/ai'
import{IoIosArrowBack} from 'react-icons/io'
import {useNavigate} from 'react-router-dom'
import FlagContext from "../../../GameData/Function/ContextApi/PlayContext";
import "./Board.css";
export default function Board() {
  const nav = useNavigate();
  const { playFlag,misTakes,gameLevel,restGame} = useContext(FlagContext);
  const flag = `https://flagcdn.com/w320/${playFlag.code.toLowerCase()}.jpg`;
  function exitGame(){
    restGame();
    nav('/');
  }
  return (
    <div className="board-container">
      <div className="nav-game">
        <div className="gameInfo flex-center-row">
          <p><AiFillStar/> {gameLevel} </p>
          <p><AiFillHeart/>  {misTakes}</p> 
        </div>
        <IoIosArrowBack onClick={()=>exitGame('/')} className="backBtn"/>
      </div>
      <div className="flag-img">
        <img src={flag} alt="flag" />
      </div>
      
    </div>
  );
}
