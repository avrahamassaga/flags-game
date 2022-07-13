import { createContext } from "react";
const TimeContext = createContext();

export function TimerProvider({ children }) {
  const Timer = (seconds, flag) => {
    const tt =  setInterval(function () {
      if(seconds <= 0){
        clearInterval(tt);
        flag(true);
        console.log("timer act");
      }
      
      seconds-=1;
      
    }, seconds * 100);
  };
  return (
    <TimeContext.Provider value={{ Timer }}>{children}</TimeContext.Provider>
  );
}

export default TimeContext;
