import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className="flex w-screen justify-between py-5 bg-white fixed top-0 left-0 z-[1000]">
            <div className='flex pl-8 gap-5 items-center text-xs text-black'>
                <Image src="/next.svg" alt="next logo" width={40} height={40} className="h-10 w-10 mr-2.5" />
                <h2>Vite & React</h2>
            </div>
            <nav className='flex pr-8 gap-5 items-center text-xl'>
                <Link href="/" className='text-black no-underline hover:underline'>Home</Link>
                <Link href="/about" className='text-black no-underline hover:underline'>About</Link>
                <Link href="/blog" className='text-black no-underline hover:underline'>Blog</Link>
                <Link href="/search" className='text-black no-underline hover:underline'>Search</Link>
            </nav>
        </div>
    )
}

export default Navbar;