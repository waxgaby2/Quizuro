//loadQuestion.jsx
import { useState } from "react";
import { Button } from "./Button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/Appcontext";
import { ProgressBar } from "./ProgressBar";
import { Timer } from "./Timer";
import { Modal } from "./Modal";
import { useQuery } from "@tanstack/react-query";
import { fetchQuestions } from "../api/questions";
import { QuizLoading} from "./QuizLoading";
import { ErrorState } from "./ErrorState";
import { motion, AnimatePresence } from "framer-motion";

export function LoadQuestion({setQuizQuestions,setQuizAnswers}){

  const {category}=useContext(AppContext)
const {
  data:question = [],
  isLoading,
  error,
  refetch
} = useQuery({
  queryKey: ["questions", category],
  queryFn: () => fetchQuestions(category),
  enabled: !!category,
  retry: 2, refetchOnWindowFocus: false, 
  refetchOnMount: true,         
  staleTime: 0,
});


const [number,setNumber]=useState(0);
const sizes={
  small: "w-[150px]",
  big:"w-[95%] max-sm:w-[90%]"
}
const light="font-extralight"
const shadow="hover:shadow-[0_0_5px_5px_rgba(255,255,164,0.4)]"
const scale="active:scale-90"
const selected="bg-white text-black font-bold"
const bold="font-bold"
const [selectedAnswer,setAnswer]=useState(null);
const [answers, setAnswers]=useState({})
const [isChosen, setChosen]=useState(false)
const [isClicked, setClick]=useState(false)
const navigate=useNavigate()
const {setScore}=useContext(AppContext);
const {setQuestionLength}=useContext(AppContext)
const [width,setWidth]=useState("w-[0%]")
const {quizTimer}=useContext(AppContext)
const [showModal, setShowModal] = useState(false);
const [tabSwitchCount, setTabSwitchCount] = useState(0);
const [showWarning, setShowWarning] = useState(false);


function handleStoreAnswers(option){
setAnswer(option);
setChosen(false);
  {setClick(true);}
}

function handleNext() {
  const newAnswers = { ...answers, [number]: selectedAnswer };
  setAnswers(newAnswers);

  if (number === question.length - 1) {
   submitQuiz(newAnswers);
    return;
  }

  if (!selectedAnswer) {
    setChosen(true);
    
    return;
  }
  
  setNumber(prevNumber => prevNumber + 1);
  setAnswer(null);
  setChosen(false);
}

function submitQuiz(finalAnswers = answers) {
   if (!question.length) return;
  setShowModal(false);
  setQuizAnswers(finalAnswers);
  setQuizQuestions(question);

  const score = question.filter((q, i) => q.answer === finalAnswers[i]).length;

  setScore(score);
  setQuestionLength(question.length);
  navigate("/result");
}

function handlePrev(){
setNumber((prevNumber)=> prevNumber - 1)
setChosen(false);
}


useEffect(() => {
  setAnswer(answers[number] || null);

}, [number]);

useEffect(() => {
  if (!question.length) return
  let progress = number + 1;
  let widthCalc = (progress / question.length) * 100;
  setWidth(widthCalc);
}, [number,question.length]);

useEffect(() => {
  if (quizTimer === 0 ) {
    document.body.style.overflow = "hidden";
setShowModal(true)
  }
}, [quizTimer]);

useEffect(() => {
  if (showModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [showModal]);


useEffect(() => {
  setShowModal(false);
}, []);

useEffect(()=>{
  function handleTabSwitch(){
    if(document.hidden){
       setTabSwitchCount(prev => prev + 1);
       setShowWarning(true)
    }
  }
  document.addEventListener("visibilitychange", handleTabSwitch);

  return () => {
    document.removeEventListener("visibilitychange", handleTabSwitch);
  };
},[])


useEffect(() => {
  if (tabSwitchCount >= 3) {
    alert("Too many tab switches! Quiz submitted.");

    submitQuiz(answers);
  }
}, [tabSwitchCount]);

useEffect(() => {
  if (!category) navigate("/");
}, []);

if (isLoading) return <QuizLoading />;


if (error) return <ErrorState onRetry={refetch} />;


    return (
    <div className={`p-8.5 my-4 rounded-[10px]
    shadow-[0_0_5px_5px_rgba(0,0,0,0.1)] bg-[#1e293b] flex flex-col
    items-center justify-center mb-4 w-[500px]
     max-sm:w-[93%]`}>
      
      {showWarning && 
  <div className="fixed top-4 max-sm:w-[95vw] left-1/2 -translate-x-1/2
   bg-yellow-500 text-black px-4 py-2 rounded-md shadow-lg z-50">
    ⚠️ Warning: Switching tabs is not allowed. After 3 switches, your quiz will auto-submit.
    <button
      className="ml-4 font-bold"
      onClick={() => setShowWarning(false)}
    >
      OK
    </button>
  </div>
}
      <div className={`self-start mb-2 w-[100%]`}>
        <div className="flex justify-between w-[100%]">
          <p>{number+1} of {question.length}</p>
          <Timer />
        </div>
         <ProgressBar widthProgress={width} />
      </div>
      

  <AnimatePresence mode="wait">
  <motion.div
    key={number}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.12, ease: "easeOut" }}
    className="w-full"
  >
    {question[number] && (
      <p className="text-xl text-white/90">
        {question[number].question}
      </p>
    )}

  </motion.div>
</AnimatePresence>
    <div className="my-6 text-white/90 w-[100%] flex flex-col items-center">
      {question[number]?.options.map((option, index) => (
        <Button
          key={index}
          id={number}
          selected={selectedAnswer === option}
          scale={scale}
          size={sizes.big}
          fontWeight={light}
          text={option}
          handle={() => handleStoreAnswers(option)}
        />
      ))}
    </div>



   {isChosen &&
   <p className="text-red-400 pt-1">
    Choose an option</p>}
  
  
         <div className="text-white/90 w-[100%] flex flex-row 
         max-sm:flex-col max-sm:items-center
         justify-between">
        {number > 0 && <Button handle={handlePrev} disabled={showModal} scale={scale} size={sizes.small} shadow={shadow} fontWeight={bold} bold={bold} text="Previous" />}
        <Button handle={handleNext} disabled={showModal} scale={scale} size={sizes.small} shadow={shadow} fontWeight={bold} bold={bold} text={number===question.length-1? "Submit": "Next"} />
    </div>
     {showModal &&<Modal onClose={() => setShowModal(false)}>
    <Button 
     handle={() => {
    const finalAnswers = selectedAnswer
      ? { ...answers, [number]: selectedAnswer }
      : answers;

    submitQuiz(finalAnswers);
  }}
    size={sizes.small} shadow={shadow} fontWeight={bold} bold={bold} text="Submit" />
   
  </Modal>}
  
  
    </div>)
} 