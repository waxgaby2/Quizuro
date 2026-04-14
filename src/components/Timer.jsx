//component Timer.jsx
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/Appcontext";

export function Timer(){
const [time,setTime]=useState(3*60);
const {setQuizTimer}=useContext(AppContext)

useEffect(()=>{
setQuizTimer(time)
if(time===0){
    return;
}
const timeInterval=setInterval(()=>{
setTime((prev) => (prev > 0 ? prev - 1 : 0));
},1000)
return ()=>clearInterval(timeInterval);
},[])

useEffect(() => {
  setQuizTimer(time);
}, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const formattedTime = `${
    minutes > 0 ? String(minutes).padStart(2, "0") + ":" : ""
  }${String(seconds).padStart(2, "0")}`;

    return (<div>
        <p className={`${minutes===0?"text-red-400 not-visited:not-target:animate-pulse transition-all duration-1000":""}
         text-green-400`}>{formattedTime}</p>
    </div>)
}