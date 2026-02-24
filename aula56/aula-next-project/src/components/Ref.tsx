'use client'

import { useRef } from "react"
import { Button } from "./Button";

const InputFocus = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <div className="flex flex-col items-center justify-center">
            <input ref={inputRef} className="border border-gray-500 rounded-md p-2 m-3 w-[270px] h-[50px]" type="text"/>
            <Button
                name="Focar no Input"
                onClick={() => inputRef.current?.focus()}
            />
        </div>
    );
}

export default InputFocus;