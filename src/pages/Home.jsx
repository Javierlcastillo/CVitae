import React, { useState, useEffect } from "react";
import useWindowSize from "@/hooks/useWindowSize.jsx";
import "./Home.css";
import imagen from "@/assets/images/yo.jpg";
function Home() {
    const { width } = useWindowSize();
    const getScreenSize = (width) => {
        if (width > 600) return "big";
        if (width > 420) return "small";
        return "xsmall";
        };
    const [screenSize, setScreenSize] = useState(getScreenSize(width));
    useEffect(() => {
        setScreenSize(getScreenSize(width));
    }, [width]);
    return (
        <div className="home-container"background-color="#08211a">
            <div className="introduction-grid">
                <img src={imagen} id="foto-perfil" className={`foto-perfil ${screenSize}`} />
                <h1 className={`home-punchline ${screenSize}`} >Building the <span className="highlight">future</span>, one <span className="highlight">line</span> at a time.</h1>
                <p id="line" className={`line ${screenSize}`} >──────────────</p>
                <p className={`home-description ${screenSize}`} >Hi, I’m <span className="highlight">Javier Luis Castillo</span> — a Computer Science student passionate about AI, web development, and solving real problems with code.</p>
            </div>
        </div>
    );
}

export default Home;