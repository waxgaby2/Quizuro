import { useContext } from "react";
import { AppContext } from "../context/Appcontext";
import {Logo} from "../components/Logo"
import {Nav} from "../components/Nav"
import { NavLink } from "react-router-dom";

export default function Leaderboard(){
    const {score}=useContext(AppContext)
    const {questionLength}=useContext(AppContext)
    return (<div className="flex flex-col justify-center items-center text-amber-800!">
        <Logo />
        <div className="max-w-[800px] max-sm:w-[95%] flex rounded 
        flex-col justify-center items-center bg-amber-50/70 p-8 max-sm:p-3 gap-4">
        <h1 className="text-black! font-bold!">Leader Board</h1>
        <p className="font-bold">Coming Soon...</p>
        </div>

              
  <Nav>
    <NavLink to="/" className="hover:scale-120 
        transition-all duration-300 ease-in-out
         w-[100%] bg-[#404e64] rounded-[10px] 
         my-2 shadow-[0_0_5px_5px_rgba(0,0,0,0.3)] 
         text-center hover:text-white text-black/80
         font-bold 
          hover:bg-blue-950 p-2">Home</NavLink>
         
  <NavLink to="/about" className="hover:scale-120 
        transition-all duration-300 ease-in-out
         w-[100%] bg-[#404e64] rounded-[10px] 
         my-2 shadow-[0_0_5px_5px_rgba(0,0,0,0.3)] 
         text-center hover:text-white text-black/80
         font-bold 
          hover:bg-blue-950 p-2">About</NavLink>
  

  </Nav>
        </div>)
}