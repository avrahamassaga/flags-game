import { createContext, useState } from "react";
import { mistakes } from "../GamePlayFuncs";

import { getCountriList, getRandomAnswer } from "../RandomFromList.js";
const FlagContext = createContext();

export function FlagProvider({ children }) {
  const countris = getCountriList(); // countrys array shuffeld
  const [misTakes, setmisTakes] = useState(mistakes); // rounds of play
  const [gameLevel, setGameLevel] = useState(0); //index of game play
  const [playerRecord, setplayerRecord] = useState(localStorage.getItem('recordPlayer'))
  let playFlag = countris[gameLevel]; // the currect flag in game

  function nextFlag(ans, nav) {
    updateRecord();
    if (playFlag.code == ans.code) {
      setGameLevel((currCount) => currCount + 1);
    } else {
      if (misTakes <= 1) {
        nav("/");
        setmisTakes(5);
        setGameLevel(0);
      } else{ 
        setmisTakes(misTakes - 1)
        if(mistakes<=0)setmisTakes(5)
      };
    }
  }

  function updateRecord(){
    if(gameLevel>Number(localStorage.getItem('recordPlayer'))-1){
      setplayerRecord(gameLevel+1)
      localStorage.setItem('recordPlayer',gameLevel+1)
    };
  }
  function restGame() {
    setGameLevel(0);
    setmisTakes(mistakes);
  }
  const randomAnswers = getRandomAnswer(playFlag, countris);
  return (
    <FlagContext.Provider
      value={{
        nextFlag,
        misTakes,
        playFlag,
        gameLevel,
        randomAnswers,
        restGame,
        playerRecord,
      }}
    >
      {children}
    </FlagContext.Provider>
  );
}

export default FlagContext;
