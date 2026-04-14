import { Nav } from "../components/Nav";
import { NavLink } from "react-router-dom";
import { Logo } from "../components/Logo";

export default function About({navcolor}) {
  return (<div className="min-h-screen flex justify-center flex-col items-center">
    <Logo />
    <div className=" p-8.5 max-sm:p-3 my-4 rounded-[10px]
    shadow-[0_0_5px_5px_rgba(0,0,0,0.1)] flex flex-col
    items-center justify-evenly mb-4 w-[500px] text-black/60
     max-sm:w-[93%] gap-4 text-sm bg-linear-to-br
      from-amber-100 via-amber-200 to-amber-100">
<h2 className="text-center text-black!">About This Quiz App</h2>
<p className="text-justify">
This Quiz App is a simple, interactive platform designed to help users test and improve 
their knowledge of web development fundamentals. It features multiple-choice questions 
covering topics like HTML, CSS, and JavaScript, with real-time navigation, progress tracking,
 and instant scoring at the end of each quiz.
 </p>
<p className="text-justify">The app includes a timed challenge mode to add pressure and simulate real exam conditions.
 A progress bar helps users track how far they are in the quiz, while a results screen 
 summarizes performance at the end.</p>

<p className="text-justify">To encourage focus and fair play, the app 
  includes a focus protection system that
   monitors tab switching during a quiz. 
   If a user switches away from the quiz 
   multiple times, the system assumes loss 
   of focus and will automatically submit 
   the quiz after repeated interruptions. 
   This ensures the integrity
   of results and simulates real exam conditions.</p>
<p className="text-justify">Built with React, the project focuses on 
  component-based architecture, state management, and user experience. 
  It’s designed as both a learning tool and a practical demonstration 
of modern frontend development skills.</p>

<p className="text-justify">Whether you’re revising core concepts or just testing yourself for fun, this app provides
   a smooth and engaging quiz experience.</p>
  
   </div>
    <Nav navcolor={true}>
      <NavLink to="/" className="hover:scale-120 
        transition-all duration-300 ease-in-out
         w-[100%] bg-[#404e64] rounded-[10px] 
         my-2 shadow-[0_0_5px_5px_rgba(0,0,0,0.3)] 
         text-center hover:text-white text-black/80
         font-bold 
          hover:bg-blue-950 p-2">Home</NavLink>
      <NavLink to="/result" className="hover:scale-120 
        transition-all duration-300 ease-in-out
         w-[100%] bg-[#404e64] rounded-[10px] 
         my-2 shadow-[0_0_5px_5px_rgba(0,0,0,0.3)] 
         text-center hover:text-white text-black/80
         font-bold 
          hover:bg-blue-950 p-2">Result</NavLink>
          <NavLink to="/review" className="hover:scale-120 
        transition-all duration-300 ease-in-out
         w-[100%] bg-[#404e64] rounded-[10px] 
         my-2 shadow-[0_0_5px_5px_rgba(0,0,0,0.3)] 
         text-center hover:text-white text-black/80
         font-bold 
          hover:bg-blue-950 p-2">Review Quiz</NavLink>

    </Nav>
  </div>);
}