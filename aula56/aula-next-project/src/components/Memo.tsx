'use client'

import { useMemo, useState } from "react";
import { Button } from "./Button";

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
            <Button
                name="Incrementar Contador"
                onClick={() => setContador(contador + 1)}
            />
        </div>
    );
}

export default Exemplo;
