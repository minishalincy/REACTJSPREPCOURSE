import React from "react";
import Navbar from "../components/Navbar";
const Home = ()=>{
    return(
        <>
        <Navbar/>
            <div className="hero-section">
                <h2>Welcome to Amazon</h2>
                <button>Shop now</button>
            </div>
        </>
    )
}

export default Home