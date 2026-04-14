export function ProgressBar({widthProgress}){
    return (<div>
        <div className={`w-[100%] h-1.5 max-sm:w-[100%]
            bg-blue-500/20 rounded`}>
            <div className={`bg-blue-500 
            h-1.5 rounded
            transition-all
                duration-500`}
                 style={{ width: `${widthProgress}%` }}
                >

            </div>
        </div>
    </div>
    )
}