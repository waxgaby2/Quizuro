// Button.jsx
export function Button({id,disabled,text,selected,size,fontWeight,shadow,handle,scale,bg,hover}) {


  return (
   <button id={id}  onClick={handle} className={`block mt-2.5 p-2.5 ${fontWeight} bg-[#334155] cursor-pointer
   hover:bg-[#475569] ${size} ${shadow} ${scale} disabled:opacity-50 disabled:cursor-not-allowed
   rounded-[10px] transition-all duration-300 ${selected ? "bg-white text-black font-bold!" : ""} 
   ${bg? "bg-white/0 text-black font-bold!" : ""}
   ${hover? "hover:bg-white ease-in hover:text-black hover:scale-120 hover:shadow-[0_0_5px_5px_rgba(125,255,145,0.3)]": ""}
   `}
   
   value={text} disabled={disabled}>{text}</button>
  )
}
