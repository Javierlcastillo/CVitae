import React from "react";
import "./Home.css";
import imagen from "../assets/imagenPrueba.jpg";
function Home() {
    return (
        <div className="container home-contnainer" background-color="#08211a">
            <div className="introduction-grid">
                <img src={imagen} id={"foto-perfil"}/>
                <h1 className="home-punchline">Builidng the <span className="highlight">future</span>, one <span className="highlight">line</span> at a time.</h1>
                <p className="home-description">Hi, I’m <span className="highlight">Javier Luis Castillo</span> — a Computer Science student passionate about AI, web development, and solving real problems with code.</p>
            </div>
        </div>
    );
}

export default Home;