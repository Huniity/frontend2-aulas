interface ButtonProps {
    name: string;
    onClick?: () => void;
    className?: string;
}

const Button = ({ name, onClick, className = "" }: ButtonProps) => {
    return (
        <button 
            className={`bg-black border border-black rounded-md text-white m-3 w-[250px] h-[30px] ${className}`}
            onClick={onClick}
        > 
            {name} 
        </button>
    )
}

const SquareButton = ({ name, onClick, className = "" }: ButtonProps) => {
    return (
        <button
            className={`bg-black border border-black rounded-md text-white m-3 w-[50px] h-[50px] ${className}`}
            onClick={onClick}
        >
            {name}
        </button>
    )
}


export { Button, SquareButton };