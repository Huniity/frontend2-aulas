'use client'

import { useEffect } from "react";

const MyComponent = () => {
    useEffect(() => {
        console.log("Mounted Component");
        return () => console.log("Unmounted Component");
    }, []);
    return <div className="text-black font-bold">Olá, React!</div>;
};

export default MyComponent;