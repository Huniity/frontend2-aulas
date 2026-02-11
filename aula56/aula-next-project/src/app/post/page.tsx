'use client'
import { useSearchParams } from 'next/navigation';
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

const Post = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    return (
        <>
            <Navbar />
            <div style={styles}>
                <h1>Post Details</h1>
                <p>Post ID: {id || 'Not specified'}</p>
            </div>
        </>
    )
}

export default Post