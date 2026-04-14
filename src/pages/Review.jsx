import { Logo } from "../components/Logo";
import { Nav } from "../components/Nav";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/Appcontext";

export default function Review({ questions, answers }) {
  const navigate=useNavigate()
const{score}=useContext(AppContext)

useEffect(()=>{
if(!score){
navigate("/")
}
},[navigate,score])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Logo />

      <div className="py-8 max-sm:w-[95%] w-[500px]
        flex flex-col items-center
        bg-gray-800 mb-10 shadow-lg">

        <h2 className="border-b-4 border-amber-500 mb-6 text-white text-xl font-bold">
          Answers Review
        </h2>

        <div className="w-[100%] mt-8">

          {questions?.map((q, i) => {
            const isCorrect = q.answer === answers?.[i];

            return (
              <div
                key={i}
                className={`
                  ${isCorrect ? "bg-green-500/20 border-green-500" : "bg-red-500/20 border-red-500"}
                  border-l-4 w-[100%] px-6 py-4 mb-1 
                `}
              >
                <p className="text-white font-semibold mb-2">
                  {i + 1}. {q.question}
                </p>

                <p className="text-sm text-gray-300">
                  Your answer:{" "}
                  <span className="font-medium">
                    {answers?.[i] || "No answer"}
                  </span>
                </p>

                <p className="text-sm text-gray-400">
                  Correct answer:{" "}
                  <span className="font-medium">
                    {q.answer}
                  </span>
                </p>

                <p
                  className={`mt-2 font-semibold ${
                    isCorrect ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {isCorrect ? "✔ Correct" : "✘ Wrong"}
                </p>
              </div>
            );
          })}

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
          <NavLink to="/result" className="hover:scale-120 
        transition-all duration-300 ease-in-out
         w-[100%] bg-[#404e64] rounded-[10px] 
         my-2 shadow-[0_0_5px_5px_rgba(0,0,0,0.3)] 
         text-center hover:text-white text-black/80
         font-bold 
          hover:bg-blue-950 p-2">Result</NavLink>
          <NavLink to="/about" className="hover:scale-120 
        transition-all duration-300 ease-in-out
         w-[100%] bg-[#404e64] rounded-[10px] 
         my-2 shadow-[0_0_5px_5px_rgba(0,0,0,0.3)] 
         text-center hover:text-white text-black/80
         font-bold 
          hover:bg-blue-950 p-2">About</NavLink>
      </Nav>
    </div>
  );
}