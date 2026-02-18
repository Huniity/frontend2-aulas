import type React from "react"
import Image from "next/image";

const Card = ({title, description, altDescription, profilePic, children} : {title: string, description: string | React.ReactNode, altDescription?: string | React.ReactNode, profilePic?: string, children?: React.ReactNode}) => {
    return (
        <div className="p-1.5 bg-white rounded-xl flex flex-col items-center justify-between w-[300px] h-[425px] m-6">
            <div className="flex flex-col items-center flex-grow">
                {profilePic && <Image width={40} height={40} className="w-[270px] h-auto rounded-3xl p-3 m-0" src={profilePic} alt={title} />}
                <h2 className="text-2xl font-bold text-black">{title}</h2>
                <p className="text-base text-gray-500 p-0 m-0">{description}</p>
                <p className="text-base text-gray-500 p-0 m-0">{altDescription}</p>
            </div>
            {children}
        </div>
    )
}

export default Card