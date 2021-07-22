import React, {  useState,useEffect } from "react";

export const Timer = ({initialMinute ,initialSeconds,pause }) => { 
   
const [ minutes, setMinutes ] = useState(initialMinute);
const [seconds, setSeconds ] =  useState(initialSeconds);
useEffect(()=>{
let myInterval = setInterval(() => {
  if(!pause){
    
        if (seconds > 0) {
            setSeconds(seconds - 1);
        }
        if (seconds === 0) {
            if (minutes === 0) {
              let audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
  audio.play();
  alert('Start your next section!');
                clearInterval(myInterval)
            } else {
                setMinutes(minutes - 1);
                setSeconds(59);
            }
        } 
      }
    }, 1000)
    return ()=> {
        clearInterval(myInterval);
      };
});
useEffect(() => {
setSeconds(Number(initialSeconds));
setMinutes(Number(initialMinute));
},[initialMinute,initialSeconds])
return (
    <div>
       <h1 style={{color: 'white'}}> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
 
    </div>
)
};

