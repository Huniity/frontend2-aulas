'use client'
import { useSearchParams } from "next/navigation";
import { useState } from "react";
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

const Search = () => {
    const searchParams = useSearchParams();
    const [queryString, setQueryString] = useState("");
    const query = searchParams?.get("query") || "";

    return (
        <>
            <Navbar />
            <div style={styles}>
                <h1>Search</h1>
                <input type="text" placeholder="Search for something" value={queryString} onChange={(e) => setQueryString(e.target.value)} />
                <button onClick={() => {
                    const params = new URLSearchParams({ query: queryString });
                    window.location.href = `/search?${params.toString()}`;
                }}>Search</button>
            </div>
        </>
    )
}

export default Search

