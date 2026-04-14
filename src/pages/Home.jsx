import { Logo } from "../components/Logo.jsx";
import { Login } from "../components/Login.jsx";
import { Nav } from "../components/Nav.jsx";
import { NavLink } from "react-router-dom";

export default function Home({setName}) {

  return  (<div className="min-h-screen p-10 flex flex-col justify-center items-center
    ">
   <Nav>
    <NavLink to="/about" className="hover:scale-120 
        transition-all duration-300 ease-in-out
         w-[100%] bg-[#404e64] rounded-[10px] 
         my-2 shadow-[0_0_5px_5px_rgba(0,0,0,0.3)] 
         text-center hover:text-white text-black/80
         font-bold 
          hover:bg-blue-950 p-2">About</NavLink>
   </Nav>
    <Logo />
    <Login setName={setName} />
      </div>)
}