import React,{useState} from 'react';
import {Timer} from './CountDown';
import {useForm} from "../../hooks/useForm";
import  * as path from 'path';
export const FormCountDown = ()=>{
const [ formValues,
  handleInputChange,
  reset,
  ,
  ,
  ,
  setValues,]=useForm(
  {minutes:10,seconds:0}
) ;

const [initialMinutes,setInitialMinutes] = useState(0);
const [initialSeconds,setInitialSeconds] = useState(0);
const [pause,setPause] = useState(true);
const {minutes,seconds} = formValues;
  const handleStart = (e)=>{
    console.log(pause);
    e.preventDefault();
    setInitialMinutes(minutes);
    setInitialSeconds(seconds);
    setPause(false);
  }
  const handlePause = (e)=>{
    e.preventDefault();
    setPause(!pause);
  }
  const handleStop = (e)=>{
    e.preventDefault();
    setInitialMinutes(0);
    setInitialSeconds(0);
  
    
  }

    return(
        <>
        <div className="row">
       <Timer initialMinute ={initialMinutes} initialSeconds ={initialSeconds}pause={pause}/>
        <div className="col-2">
          <label style={{ color: "white" }}>Pomodoro</label>
        </div>
        <div className="col-2">
        <label style={{ color: "white" }}>Minutes</label>
          <input 
          min={1}
          name= "minutes"
          value = { Number(minutes)}
          onChange={handleInputChange}
          className="form-control" type="number" placeholder="minutes"/>          
        </div>
       
        <div className="col-1">
          <button className="btn btn-primary" onClick={handleStart}>Start</button>
        </div>
        <div className="col-1">
          <button className="btn btn-warning" onClick={handlePause}>Pause</button>
        </div>
        <div className="col-1">
          <button className="btn btn-danger" onClick={handleStop}>Stop</button>
        </div>
      </div> 
      </>
    )
}
// *611 - 2 - 1
// 0317500500 -  2 - 1