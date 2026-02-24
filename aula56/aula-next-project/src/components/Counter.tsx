'use client';

import {useState, useEffect} from 'react';
import { Button } from './Button';

const Contador = () => {
    const [contador, setContador] = useState(0);
    const [pausa, setPausa] = useState(false);
    
    useEffect(() => {
        if (!pausa) {
            const interval = setInterval(() => {
                setContador(contador+1);
            }, 1000);
            return () => {
                clearInterval(interval);
            }
        }
    }, [contador, pausa]);

    const pauseButton = () => {
        setPausa(!pausa);
    }
    
    return (
        <div>
            <p className="text-2xl font-bold text-black p-0 m-2">{contador}</p>
            <Button name={!pausa ? "Pause Me!" : "Unpause Me!"} onClick={pauseButton} />
        </div>
    );
}

export default Contador
