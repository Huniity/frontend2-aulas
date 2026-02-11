import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';

const styles = {
    width: "100vw", 
    height: "100vh", 
    alignItems: "center", 
    justifyContent: "center",
    textAlign: "center" as const,
    alignSelf: "center",
    display: "flex",
    flexDirection: "column" as const,
    gap: "20px",
}

const About = () => {
    return (
        <>
            <Navbar />
            <div style={styles}>
                <p>This is the About page of the Vite & React application.</p>
                <Link href="/"><button>Go Back Home</button></Link>
            </div>
        </>
    )
}

export default About