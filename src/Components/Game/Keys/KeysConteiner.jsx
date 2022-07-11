import React,{useContext} from "react";
import FlagContext from "../../../GameData/Function/ContextApi/PlayContext";
import KeyBtn from "./KeyBtn";
import "./KeysConteiner.css";
export default function KeysConteiner() {
  const {randomAnswers} = useContext(FlagContext)
  return (
    <div className="keys-container">
      {randomAnswers.map((val, index) => {
        return <div key={index}><KeyBtn ans={val}/></div>;
      })}
    </div>
  );
}
