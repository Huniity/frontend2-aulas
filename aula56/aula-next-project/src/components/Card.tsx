import type React from "react"
import Image from "next/image";

const Card = ({title, description, altDescription, profilePic, children} : {title: string, description: string | React.ReactNode, altDescription?: string | React.ReactNode, profilePic?: string, children?: React.ReactNode}) => {
    return (
                <div className="w-full h-[400px] rounded-xl bg-white p-4 flex flex-col items-center justify-between">
            <div className="flex flex-col items-center flex-grow">
                                {profilePic && (
                                    <Image
                                        width={240}
                                        height={160}
                                        className="w-full max-w-[240px] rounded-3xl p-3 m-0"
                                        src={profilePic}
                                        alt={title}
                                    />
                                )}
                <h2 className="text-2xl font-bold text-black">{title}</h2>
                <p className="text-base text-gray-500 p-0 m-0">{description}</p>
                <p className="text-base text-gray-500 p-0 m-0">{altDescription}</p>
            </div>
            {children}
        </div>
    )
}

export default Card