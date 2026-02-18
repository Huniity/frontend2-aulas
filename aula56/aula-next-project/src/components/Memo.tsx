'use client'

import { useMemo, useState } from "react";

const Exemplo = () => {
    const [contador, setContador] = useState(0);

    const numeroPesado = useMemo(() => {
        console.log("Calculando número pesado...");
        return contador * 2;
    }
    , [contador]);
    
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-black">Contador: {contador}</h1>
            <h2 className="text-xl text-gray-500">Número pesado: {numeroPesado}</h2>
            <button 
                className="bg-black border border-black rounded-md text-white m-3 w-[270px] h-[50px]"
                onClick={() => setContador(contador + 1)}
            >
                Incrementar Contador
            </button>
        </div>
    );
}

export default Exemplo;
