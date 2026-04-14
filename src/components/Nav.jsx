import { NavLink } from "react-router-dom";
import { useState } from "react";
export function Nav({navcolor,children}){
const [isOpen,setOpen]=useState(false);
function handleToggle(){
      setOpen(prev => !prev);

    
}

    return (<div>
        <button
        onClick={handleToggle}
         className={`${isOpen? "bottom-[-500px]": ""}
          transition-all
           cursor-pointer
           hover:scale-120
         duration-500 ease-in
           fixed flex flex-col items-center 
            bottom-1 right-4
            w-[40px] h-[40px]`}>
                <div className={` ${navcolor? "max-sm:bg-black!":""}
                      w-[100%] duration-500 mb-1.5 h-1.5
                  rounded-sm
                 bg-white`}></div>
               <div className={`${navcolor? "max-sm:bg-black!":""} 
               w-[70%] h-1 duration-300  
           
                rounded-sm bg-white`}></div>
             <div className={`
            ${navcolor? "max-sm:bg-black!":""}
             w-[100%] h-1.5 duration-500 
              mt-1.5 
               rounded-sm bg-white`}></div>

             </button>
             
             <nav className={`
          
    ${isOpen ? "bottom-2 opacity-100" : "bottom-[-300px] opacity-0"}
             w-[100px] flex
              flex-col 
        justify-center items-center
         transition-w duration-500 ease-in-out
      fixed  right-4
        `}>

       {children}
       
       
      <button
        onClick={handleToggle}
         className={`
          backdrop-blur-md
          rounded-[100%] 
          transition-all text-white
           cursor-pointer
           hover:scale-110
         duration-500 ease-in
          bg-red-400
           hover:text-white hover:font-bold
            w-[40px] h-[40px]`}>X</button>
    </nav>
    </div>)
}