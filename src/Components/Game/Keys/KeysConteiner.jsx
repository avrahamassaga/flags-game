import React,{useContext,useState} from "react";
import FlagContext from "../../../GameData/Function/ContextApi/PlayContext";
import KeyBtn from "./KeyBtn";
import "./KeysConteiner.css";
export default function KeysConteiner() {
  const {randomAnswers} = useContext(FlagContext)
  const [keyFalse,setKeyFalse] = useState(false);
  return (
    <div className="keys-container">
      {randomAnswers.map((val, index) => {
        return <div key={index}><KeyBtn keyFalse={keyFalse} setKeyFalse={setKeyFalse} ans={val}/></div>;
      })}
    </div>
  );
}
