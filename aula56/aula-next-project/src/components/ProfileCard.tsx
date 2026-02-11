import Image from "next/image";

const ProfileCard = ({name, email, profilePic, isActive} : {name: string, email: string, profilePic: string, isActive: boolean}) => {
    return (
        <div className={`p-1.5 rounded-lg ${isActive ? 'bg-green-500' : 'bg-red-500'}`}>
            {name ? <h2 className={`text-2xl ${isActive ? 'text-white' : 'text-black'}`}>{name}</h2> : null}
            <p className={`text-xl ${isActive ? 'text-white' : 'text-black'}`}>{email}</p>
            <Image className="w-[100px] h-[100px] rounded-full mt-2.5" src={profilePic} alt="Card Default Placeholder" />
        </div>
    )
}

export default ProfileCard