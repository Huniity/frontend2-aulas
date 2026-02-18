'use client'

import { useRef } from "react"

const InputFocus = () => {
    const inputRef = useRef(null);
    return (
        <div className="flex flex-col items-center justify-center">
            <input ref={inputRef} className="border border-gray-500 rounded-md p-2 m-3 w-[270px] h-[50px]" type="text"/>
            <button 
                className="bg-black border border-black rounded-md text-white m-3 w-[270px] h-[50px]"
                onClick={() => inputRef.current.focus()}
            >
                Focar no Input
            </button>
        </div>
    );
}

export default InputFocus;