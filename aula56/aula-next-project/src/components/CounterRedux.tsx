'use client'

import { useState, useEffect } from "react"; // Added hooks
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { SquareButton }  from "./Button";
import { increment, decrement, incrementByAmount } from "@/redux/slices/counterReducer";

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className="flex flex-col gap-2">
            <p className="text-2xl font-bold text-black p-0 m-1">
                {isMounted ? count : 0}
            </p>
            <div className="flex flex-row flex-nowrap items-center gap-2">
                <SquareButton name="+1" onClick={() => dispatch(increment())} />
                <SquareButton name="-1" onClick={() => dispatch(decrement())} />
                <SquareButton name="+5" onClick={() => dispatch(incrementByAmount(5))} />
            </div>
        </div>
    );
}

export default Counter;