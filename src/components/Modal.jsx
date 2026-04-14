// Modal.jsx
export function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex
    items-center justify-center">
      <div className=" w-[100vw]
      flex max-sm:flex-col max-sm:w-[90%]
      justify-center items-center
      max-sm:rounded-[10px] h-[30vh]
      bg-white p-6 relative">
         <h2  className="text-3xl! text-red-600! mx-2!">⏰ Time's Up!</h2>
<p className="mr-4! text-black! font-bold!">Your progress will be submitted.</p>
        {children}
      </div>
    </div>
  );
}