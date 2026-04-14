//skimmer.jsx
export function QuizLoading() {
  return (
    <div className="p-8.5 my-4 rounded-[10px] bg-[#1e293b] w-[500px] max-sm:w-[93%]">
      
      <div className="flex justify-between mb-4">
        <div className="h-4 w-20 skeleton rounded"></div>
        <div className="h-4 w-16 skeleton rounded"></div>
      </div>

      <div className="h-2 w-full skeleton rounded mb-6"></div>

      <div className="h-6 w-[80%] skeleton rounded mb-6"></div>

      <div className="space-y-3">
        <div className="h-10 w-full skeleton rounded"></div>
        <div className="h-10 w-full skeleton rounded"></div>
        <div className="h-10 w-full skeleton rounded"></div>
        <div className="h-10 w-full skeleton rounded"></div>
      </div>

      <div className="flex justify-between mt-6">
        <div className="h-10 w-24 skeleton rounded"></div>
        <div className="h-10 w-24 skeleton rounded"></div>
      </div>
    </div>
  );
}