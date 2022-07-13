import React, { useState, useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FlagContext from "../../../GameData/Function/ContextApi/PlayContext";
import TimeContext from "../../../GameData/Function/ContextApi/TimersContext";
import "./KeysConteiner.css";

export default function KeyBtn(props) {
  //4 ansewrs , keyFals flag for ref an disble buttons for 4 seconds
  const { ans, keyFalse, setKeyFalse } = props;
  const { nextFlag } = useContext(FlagContext); // chek and nexe flag function
  const { Timer } = useContext(TimeContext); // timer function
  const nav = useNavigate();
  const keyRef = useRef(null); // ref for change ans btn color
  const [ansFlag, setansFlag] = useState(false); // hook for start timer for next flag
  // start chek and do opretion
  function clickAnswer(ans) {
    Timer(3, setansFlag);
    setKeyFalse(true);
    if (ans.answer) keyRef.current.style.backgroundColor = "green";
    else {
      keyRef.current.style.backgroundColor = "red";
    }
  }

  // start just if timer finish
  useEffect(() => {
    if (ansFlag) {
      keyRef.current.style.backgroundColor = "#303841";
      setKeyFalse(false);
      nextFlag(ans, nav);
      setansFlag(false);
    }
  }, [ansFlag]);
  return (
    <div className="key-btn">
      <button
        disabled={keyFalse}
        style={
          keyFalse ? (ans.answer ? { backgroundColor: "green" } : null) : null
        }
        ref={keyRef}
        onClick={() => clickAnswer(ans)}
      >
        {ans.heb}
      </button>
    </div>
  );
}
