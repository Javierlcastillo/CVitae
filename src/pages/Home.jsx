import React, { useState, useEffect } from "react";
import useWindowSize from "@/hooks/useWindowSize.jsx";
import "./Home.css";
import imagen from "@/assets/images/yo.jpg";
import CuadroAnimado from "@/components/ui/CuadroAnimado";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


function Home() {

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: '.introduction-grid',
            start: "top top",
            end: '+=200vh',
            pin: true,
            pinSpacing: true,
            
    });
}, []);
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

    const tamanoCuadro = (base, width) => {
        if (width > 1200){
            console.log("1200")
             return base * 1.3;
        }
        if (width > 900){
            console.log("900")
            return base * 1;
        }   // lg
        if (width > 600){
            console.log("600")
            return base * 0.85;
        }  
        if (width > 420){
            console.log("420")
             return base * 0.7;
        }
        console.log("<420")
        return base * 0.4;
    };


    // Utilidad para generar valores aleatorios dentro de un rango
    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    // Genera un array de objetos con parámetros aleatorios para CuadroAnimado
    const cuadros = Array.from({ length: 12 }, () => ({
        inputScrub: randomInRange(1, 8),
        inputRotation: randomInRange(100, 600),
        inputSize: tamanoCuadro(randomInRange(40, 90), width),
        startY: randomInRange(20, 120),
        startOffset: randomInRange(0, 20) // Desplazamiento vertical inicial aleatorio
    }));

    return (
        <div className="home-container">
            <div className="introduction-grid">
                <img src={imagen} id="foto-perfil" className={`foto-perfil ${screenSize}`} />
                <h1 className={`home-punchline ${screenSize}`} >Building the <span className="highlight">future</span>, one <span className="highlight">line</span> at a time.</h1>
                <p id="line" className={`line ${screenSize}`} >──────────────</p>
                <p className={`home-description ${screenSize}`} >Hi, I’m <span className="highlight">Javier Luis Castillo</span> — a Computer Science student passionate about AI, web development, and solving real problems with code.</p>
            </div>
            <div className="animation-up">
                {cuadros.map((params, idx) => (
                    <CuadroAnimado
                        key={idx}
                        inputScrub={params.inputScrub}
                        inputRotation={params.inputRotation}
                        inputSize={params.inputSize}
                        startY={params.startY}
                        startOffset={params.startOffset}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;