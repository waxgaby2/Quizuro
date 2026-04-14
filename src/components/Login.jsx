//Login
import { useState} from "react"
import {useNavigate} from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/Appcontext";

export function Login({setName}){
  const[userName,setUserName]=useState("")
    const [selectedCategory, setSelectedCategory]=useState("")
const navigate=useNavigate();
const {setUsername}=useContext(AppContext);
const {setCategory}=useContext(AppContext);
function handleStartQuiz(){
    if (!userName) {
    alert("Please enter your name");
    return;
  }
  if(!selectedCategory || selectedCategory === "Select Category..."){
alert("Please enter category");
    return;
  }  
  setCategory(Number(selectedCategory))
    navigate("/quiz");
}
function handleEnter(e){
  if(e.key==="Enter"){
    handleStartQuiz()
  }

}



   function handleInput(e){
  setUserName(e.target.value)
  setName(e.target.value)
  setUsername(e.target.value)
  }
  function handleCategory(e){
    setSelectedCategory(e.target.value)
  }
    return(<div className="flex justify-center 
      flex-col max-sm:w-[100%]
    items-center rounded">
    <select value={selectedCategory} onChange={handleCategory} 
    className="bg-[#404e64] text-[16px] 
    focus:outline-1 focus:outline-blue-400/50 
    cursor-pointer shadow-lg pl-3.5 
    shadow-amber-50/10 text-white py-2 
    rounded-[10px] w-[350px] 
    appearance-none max-sm:w-[95%]">
       <option value="">Select Category...</option>
<option value="19">Mathematics</option>
<option value="22">Geography</option>
<option value="18">Computer</option>
 <option value="21">Sports</option>
 <option value="17">Science And Nature</option>
 
    </select>
    <input
  type="text"
  value={userName}
  onChange={handleInput} onKeyDown={handleEnter}
  placeholder="Your Name..."
  className="bg-white focus:scale-105 
  focus:shadow-[0_0_5px_5px_rgba(255,255,164,0.4)]
  mt-6 my-2 p-2 rounded-md text-center
  transition-all duration-300 ease-in-out 
  outline-none w-150 text-black/70 max-sm:w-[95%]"
/>
    <button onClick={handleStartQuiz}
     className="bg-black/70 py-2 
    cursor-pointer max-sm:w-[50%]
     hover:bg-white/60 
     hover:shadow-[0_0_4px_4px_rgba(255,255,164,0.3)]
     hover:text-black rounded-md
      text-white/70
      my-2 shadow-lg w-39 
      active:scale-90 transition-all 
      duration-300 ease font-bold">Start Quiz</button>
    </div>)
}