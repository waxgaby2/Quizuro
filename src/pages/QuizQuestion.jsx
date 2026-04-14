import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LoadQuestion } from "../components/LoadQuestion";
import { Logo } from "../components/Logo";
import { useContext } from "react";
import { AppContext } from "../context/Appcontext";

function QuizQuestion({setQuizQuestions,setQuizAnswers}) {
 const {category}=useContext(AppContext)
  const location = useLocation();
  const navigate = useNavigate();
const {username}=useContext(AppContext);
useEffect(()=>{
if(username===null||username===undefined){
  navigate("/");
}
},[username,navigate])


  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
        <Logo />

        <p className="text-white text-md font-extralight">{username}</p>
      
    
      <LoadQuestion setQuizQuestions={setQuizQuestions} setQuizAnswers={setQuizAnswers} />
    </div>
  );
}

export default QuizQuestion;