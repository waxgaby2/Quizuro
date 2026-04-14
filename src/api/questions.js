//questions.js
export const fetchQuestions = async (category=19)=>{
    const res= await fetch (`https://opentdb.com/api.php?amount=20&category=${category}&difficulty=easy&type=multiple`);
    if(!res.ok){
        throw new Error("Failed to fetch")
    }
    const data = await res.json();
    return data.results.map((q)=>({
        question: decodeHTML(q.question),
    options: [...q.incorrect_answers, q.correct_answer]
      .map(opt => decodeHTML(opt))
      .sort(() => Math.random() - 0.5),
    answer: decodeHTML(q.correct_answer),
    }))

    function decodeHTML(str) {
  const txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
}
}