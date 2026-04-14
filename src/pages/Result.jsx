//result.jsx

import { useState,useEffect} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { Button } from "../components/Button";
import { Nav } from "../components/Nav";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/Appcontext";
import { useQueryClient } from "@tanstack/react-query";


export default function Result({setQuizAnswers,setQuizQuestions}) {

const navigate=useNavigate();

const queryClient = useQueryClient();
const size="w-[13vw] max-sm:w-[60vw]"

const light="font-extralight"
const shadow="shadow-[0_0_5px_2px_rgba(0,0,0,0.4)]"
const scale="active:scale-90"
const selected="hover:bg-white hover:text-black hover:font-bold"
const bold="bg-white! font-bold!"
const {username}=useContext(AppContext);
const {questionLength}=useContext(AppContext);
const {score}=useContext(AppContext)
const {category}=useContext(AppContext)
const {setScore}=useContext(AppContext)
const {setQuestionLength}=useContext(AppContext)
const {setCategory}=useContext(AppContext)

function handleNavReview(){
  navigate("/review");
}
function handleRestart(){
  queryClient.removeQueries({
  queryKey: ["questions", category],
});
  navigate("/quiz")
}
function handleLeaderBoard(){

  navigate("/leaderboard")
}

useEffect(()=>{
  if(score === null && location.pathname === "/result"){
    navigate("/");
  }
},[score,navigate])

  return (<div className="min-h-screen flex flex-col justify-center items-center">
    <Logo />
    <div className="max-sm:w-[95%] max-sm:rounded max-w-[800px] 
    p-10  flex flex-col justify-center items-center
     shadow-[0_0_5px_5px_rgba(0,0,0,0.3)]
    bg-amber-100/80 text-black
     hover:shadow-[0_0_5px_5px_rgba(253,200,184,0.3)]
     ">
<p className="pb-10 font-bold text-3xl">{score>10? `${username} Congratulations, You Passed!` : `${username} Sorry, You Failed!`}</p>
<div className="flex max-sm:flex-col justify-between items-center w-[100%] flex-row">
    <div>
        <h3 className="border-b-4 border-amber-600 mb-5 text-[20px]">Score</h3>
        <p className={`text-center font-extrabold ${score>10 ? "text-green-600": "text-red-600"}`}>{score}</p>
    </div>
    <div>
        <h3 className="border-b-4 border-amber-600 mb-5 text-[20px]">Total Questions</h3>
        <p className="text-center font-extrabold text-green-600">{questionLength}</p>
    </div>
</div>
<div className="mt-5 flex justify-between w-[100%] min-sm:flex 
gap-2 max-sm:flex max-sm:flex-col max-sm:justify-center
max-sm:items-center">
    <Button handle={handleRestart} hover={true} selected={true} scale={scale} shadow={shadow} text="Restart Quiz" bg={true} size={size}  />
    <Button handle={handleNavReview} hover={true} scale={scale} shadow={shadow} text="Review Answers" bg={true} size={size} />
    <Button handle={handleLeaderBoard} hover={true} scale={scale} shadow={shadow} text="Leader Board" bg={true} size={size} />
    </div>
    </div>
    
  <Nav>
    <NavLink to="/" className="hover:scale-120 
        transition-all duration-300 ease-in-out
         w-[100%] bg-[#404e64] rounded-[10px] 
         my-2 shadow-[0_0_5px_5px_rgba(0,0,0,0.3)] 
         text-center hover:text-white text-black/80
         font-bold 
          hover:bg-blue-950 p-2">Home</NavLink>
          <NavLink to="/review" className="hover:scale-120 
        transition-all duration-300 ease-in-out
         w-[100%] bg-[#404e64] rounded-[10px] 
         my-2 shadow-[0_0_5px_5px_rgba(0,0,0,0.3)] 
         text-center hover:text-white text-black/80
         font-bold 
          hover:bg-blue-950 p-2">Review Quiz</NavLink>
  <NavLink to="/about" className="hover:scale-120 
        transition-all duration-300 ease-in-out
         w-[100%] bg-[#404e64] rounded-[10px] 
         my-2 shadow-[0_0_5px_5px_rgba(0,0,0,0.3)] 
         text-center hover:text-white text-black/80
         font-bold 
          hover:bg-blue-950 p-2">About</NavLink>
  
  </Nav>
  </div>);
}